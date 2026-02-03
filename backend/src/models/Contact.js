const { default: mongoose } = require("mongoose");

const contactschema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
    budget: { type: String },
    phonenumber: { type: String }
  },
  { timestamps: true }
);

module.exports=mongoose.model("Contact",contactschema);