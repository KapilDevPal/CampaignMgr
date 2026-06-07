const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
    const { Host, Port, Username, Password, To, From, Subject, Body } = req.body;

    if (!Host || !Username || !Password || !To || !From) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        let transporter = nodemailer.createTransport({
            host: Host,
            port: Port || 587,
            secure: Port == 465, // true for 465, false for other ports
            auth: {
                user: Username,
                pass: Password,
            },
        });

        let info = await transporter.sendMail({
            from: From,
            to: To,
            subject: Subject,
            html: Body,
        });

        res.json({ message: 'OK', messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Local SMTP Proxy Server running at http://localhost:${port}`);
    console.log(`Ready to send emails from your Campaign Manager!`);
});
