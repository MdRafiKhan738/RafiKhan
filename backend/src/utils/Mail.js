const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.Merkova_GMAIL,
        pass: process.env.APP_PASS,
    },
});

const sendnewusersignupotp = async (to, otp) => {
    try {
        await transporter.sendMail({
            from: `"RafiKhan Welcome" <${process.env.Merkova_GMAIL}>`,
            to,
            subject: `Welcome to RafiKhan Website!`,
            html: `<h1>Welcome to RafiKhan Website</h1><p>Your verification code for signup is: <strong>${otp}</strong></p>`
        });
        console.log("✅ sendnewusersignupotp sent");
    } catch (error) { console.log(`❌ sendnewusersignupotp error: ${error}`); }
};
const sendusersigninotp = async (to, otp) => {
    try {
        await transporter.sendMail({
            from: `"RafiKhan Security" <${process.env.Merkova_GMAIL}>`,
            to,
            subject: `Sign-In Verification`,
            html: `<h1>RafiKhan Sign-In Verification</h1><p>Your verification code for signin is: <strong>${otp}</strong></p>`
        });
        console.log("✅ sendusersigninotp sent");
    } catch (error) { console.log(`❌ sendusersigninotp error: ${error}`); }
};
module.exports = { sendnewusersignupotp, sendusersigninotp };