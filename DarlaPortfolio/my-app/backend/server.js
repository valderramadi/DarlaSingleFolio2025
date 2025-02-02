require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(express.json());

// Apply CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow your frontend's origin
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

// Handle preflight requests for `/api/contact`
app.options('/api/contact', cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify Nodemailer transporter
transporter.verify((error, success) => {
    if (error) {
        console.error("Error verifying transporter:", error);
    } else {
        console.log("Email transporter is configured correctly!");
    }
});

// Email API route
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // Debug log for incoming data
    console.log("Contact Form Submission:", req.body);

    // Validate fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email
        replyTo: email, // Reply to the user's email
        to: process.env.EMAIL_USER, // Recipient (your email)
        subject: `New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send message. Please try again." });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
