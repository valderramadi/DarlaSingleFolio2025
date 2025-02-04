// serverless function --> equivalent AWS Lambda function for sending emails using AWS SES:
const AWS = require("aws-sdk");

exports.handler = async (event) => {
    // this is enabling CORS for frontend requests
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    try {
        const { name, email, message } = JSON.parse(event.body);

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "All fields are required" }),
            };
        }

        // here we are configuring AWS SES
        AWS.config.update({ region: "us-east-1" });
        const ses = new AWS.SES();

        const emailParams = {
            Source: process.env.EMAIL_USER, // my verified SES email
            Destination: { ToAddresses: [process.env.EMAIL_USER] },
            ReplyToAddresses: [email],
            Message: {
                Subject: { Data: `New Message from ${name}` },
                Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` } },
            },
        };

        await ses.sendEmail(emailParams).promise();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: "Message sent successfully!" }),
        };

    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "Failed to send message. Please try again." }),
        };
    }
};
