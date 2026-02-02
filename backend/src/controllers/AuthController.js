const User = require("../models/User");
const TempUser = require("../models/Tempuser");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { sendnewusersignupotp, sendusersigninotp } = require("../utils/Mail");
const gentoken = require("../utils/Token");

const generateOtp = () => crypto.randomInt(100000, 999999).toString();
const OTP_EXPIRY = 5 * 60 * 1000;


/* ========================== SIGNUP ========================== */
exports.signup = async (req, res) => {
  try {
    const { step } = req.body;

    /* ---------- STEP 1: SEND OTP ---------- */
    if (step === "send-otp") {
      const { fullname, email, password } = req.body;

      if (!fullname || !email || !password)
        return res.status(400).json({ success: false, message: "All fields required" });

      if (password.length < 8)
        return res.status(400).json({ success: false, message: "Password too short" });

      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(409).json({ success: false, message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const otp = generateOtp();

      await TempUser.findOneAndUpdate(
        { email },
        {
          fullname,
          email,
          password: hashedPassword,
          otp,
          otpexpires: Date.now() + 5 * 60 * 1000,
        },
        { upsert: true, new: true }
      );

      await sendnewusersignupotp(email, otp);

      return res.status(200).json({ success: true, message: "OTP sent" });
    }

    /* ---------- STEP 2: VERIFY OTP ---------- */
    if (step === "verify-otp") {
      const { email, otp } = req.body;
      const tempUser = await TempUser.findOne({ email });

      if (!tempUser)
        return res.status(404).json({ success: false, message: "Signup session not found" });

      if (tempUser.otpexpires < Date.now())
        return res.status(400).json({ success: false, message: "OTP expired" });

      if (tempUser.otp !== otp)
        return res.status(400).json({ success: false, message: "Invalid OTP" });

      tempUser.otpisverified = true;
      tempUser.otp = null;
      tempUser.otpexpires = null;
      await tempUser.save();

      return res.status(200).json({ success: true, message: "OTP verified" });
    }

    /* ---------- STEP 3: COMPLETE PROFILE ---------- */
    if (step === "complete-profile") {
      const { email, gender, mobile, address, country, role } = req.body;
      const tempUser = await TempUser.findOne({ email });

      if (!tempUser || !tempUser.otpisverified)
        return res.status(403).json({ success: false, message: "OTP not verified" });

      let avatar =
        gender === "Male"
          ? "default_male_avatar_url"
          : gender === "Female"
          ? "default_female_avatar_url"
          : "default_other_avatar_url";

      const newUser = await User.create({
        fullname: tempUser.fullname,
        email,
        password: tempUser.password,
        gender,
        mobile,
        address,
        country,
        role: role || "User",
        avatar,
      });

      await TempUser.deleteOne({ email });

      const token = gentoken(newUser._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({
        success: true,
        message: "Signup completed",
        user: newUser,
      });
    }

    return res.status(400).json({ success: false, message: "Invalid step" });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return res.status(500).json({ success: false, message: "Signup failed" });
  }
};

/* ========================== SIGNIN ========================== */
exports.signin = async (req, res) => {
  try {
    const { email, password, otp, secretcode } = req.body;

    /* ================= SUPER ADMIN FLOW ================= */
    if (email === process.env.SUPER_ADMIN) {
      let superuser = await User.findOne({ email });

      if (!superuser) {
        superuser = await User.create({
          email,
          role: "SuperAdmin",
          isverify: false,
        });
      }

      if (password !== process.env.SUPER_ADMIN_PASS) {
        return res.status(400).json({ success: false, message: "Invalid SuperAdmin credentials" });
      }

      // Step 1 → Send OTP
      if (!otp && !secretcode) {
        const superotp = Math.floor(100000 + Math.random() * 900000);
        superuser.supverificationotp = superotp;
        superuser.superadminotpexpires = Date.now() + OTP_EXPIRY;
        await superuser.save();
        await sendsuperadminotp(email, superotp);

        return res.status(200).json({
          success: true,
          step: "SUPERADMIN_OTP_SENT",
          message: "OTP sent to SuperAdmin email",
        });
      }

      // Step 2 → Verify OTP
      if (otp && !secretcode) {
        if (Number(otp) !== Number(superuser.supverificationotp) || superuser.superadminotpexpires < Date.now()) {
          return res.status(400).json({ success: false, message: "Invalid or expired SuperAdmin OTP" });
        }

        return res.status(200).json({
          success: true,
          step: "SECRET_CODE_REQUIRED",
          message: "OTP verified successfully",
        });
      }

      // Step 3 → Verify Secret Code
      if (otp && secretcode) {
        if (secretcode !== process.env.SUPER_ADMIN_SECRETCODE) {
          return res.status(400).json({ success: false, message: "Invalid SuperAdmin secret code" });
        }

        superuser.role = "SuperAdmin";
        superuser.isverify = true;
        superuser.supverificationotp = null;
        superuser.superadminotpexpires = null;
        await superuser.save();

        const token = gentoken(superuser._id);
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 3 * 24 * 60 * 60 * 1000,
          path: "/",
        });

        return res.status(200).json({
          success: true,
          message: "SuperAdmin signin successful",
          user: { name: process.env.SUPER_ADMIN_NAME, email, role: "SuperAdmin" },
        });
      }
    }

    /* ================= NORMAL USER SIGNIN ================= */
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ success: false, message: "User not found" });

    // Step 1 → Verify password & send OTP
    if (password && !otp) {
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordCorrect) return res.status(400).json({ success: false, message: "Invalid credentials" });

      const newOtp = generateOtp();
      existingUser.otp = newOtp;
      existingUser.otpexpires = Date.now() + OTP_EXPIRY;
      await existingUser.save();

      await sendusersigninotp(email, newOtp);

      return res.status(200).json({ success: true, step: "OTP_SENT", message: "Signin OTP sent" });
    }

    // Step 2 → Verify OTP
    if (otp) {
      if (existingUser.otpexpires < Date.now() || existingUser.otp !== otp)
        return res.status(400).json({ success: false, message: "Invalid or expired OTP" });

      existingUser.otp = null;
      existingUser.otpexpires = null;
      await existingUser.save();

      const token = gentoken(existingUser._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ success: true, message: "Signin successful", user: existingUser });
    }

    return res.status(400).json({ success: false, message: "Invalid signin request" });
  } catch (error) {
    console.error("SIGNIN ERROR:", error);
    return res.status(500).json({ success: false, message: "Signin failed" });
  }
};

