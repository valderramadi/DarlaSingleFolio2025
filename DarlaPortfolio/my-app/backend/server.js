require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// middleware 
app.use(express.json());

// applying CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // allowing frontend's origin
    methods: ['GET', 'POST'], // specify allowed HTTP methods
    allowedHeaders: ['Content-Type'], // specify allowed headers
}));

// handles preflight requests for `/api/contact`
app.options('/api/contact', cors());

// nodemailer transporter if use
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// verify nodemailer transporter
transporter.verify((error, success) => {
    if (error) {
        console.error("Error verifying transporter:", error);
    } else {
        console.log("Email transporter is configured correctly!");
    }
});

// email API route ...
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // debug log for incoming data
    console.log("Contact Form Submission:", req.body);

    // validate fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // sender's email lives here
        replyTo: email, // reply to the user's email here
        to: process.env.EMAIL_USER, // recipient (my email)
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // sending email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send message. Please try again." });
    }
});

// starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
