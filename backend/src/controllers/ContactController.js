const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

/* ======================================================
   1️⃣ USER: SEND CONTACT MESSAGE
====================================================== */
exports.sendcontactmessage = async (req, res) => {
  try {
    const { name, email, subject, message, budget, phonenumber } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required"
      });
    }

    const newmessage = await Contact.create({
      name,
      email,
      subject,
      message,
      budget,
      phonenumber
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newmessage
    });

  } catch (error) {
    console.error("Send Contact Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while sending message"
    });
  }
};

/* ======================================================
   2️⃣ ADMIN: GET ALL MESSAGES (LATEST FIRST)
====================================================== */
exports.getallcontactmessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: messages.length,
      data: messages
    });

  } catch (error) {
    console.error("Get All Messages Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching messages"
    });
  }
};

/* ======================================================
   3️⃣ ADMIN: REPLY TO USER MESSAGE (EMAIL)
====================================================== */
exports.replycontactmessage = async (req, res) => {
  try {
    const { contactid } = req.params;
    const { replymessage } = req.body;

    if (!replymessage) {
      return res.status(400).json({
        success: false,
        message: "Reply message is required"
      });
    }

    const contact = await Contact.findById(contactid);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found"
      });
    }

    // MAIL TRANSPORT
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
      }
    });

    const mailoptions = {
      from: `"Support Team" <${process.env.MAIL_EMAIL}>`,
      to: contact.email,
      subject: `Reply: ${contact.subject || "Your Contact Message"}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h3>Hello ${contact.name},</h3>
          <p>${replymessage}</p>
          <br/>
          <p>Regards,</p>
          <strong>Support Team</strong>
        </div>
      `
    };

    await transporter.sendMail(mailoptions);

    res.status(200).json({
      success: true,
      message: "Reply sent successfully"
    });

  } catch (error) {
    console.error("Reply Message Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while sending reply"
    });
  }
};

/* ======================================================
   4️⃣ USER: GET THEIR OWN MESSAGES (BY EMAIL)
====================================================== */
exports.getusermessages = async (req, res) => {
  try {
    const { email } = req.params;

    const messages = await Contact.find({ email }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: messages.length,
      data: messages
    });

  } catch (error) {
    console.error("Get User Messages Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching user messages"
    });
  }
};
