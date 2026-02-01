const { default: mongoose } = require("mongoose");

const tempsignupschema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,

  otp: String,
  otpexpires: Date,
  otpisverified: { type: Boolean, default: false },
  resendcount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("tempsignup", tempsignupschema);