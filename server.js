require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const OWNER_NAME = 'Rohan Srivastava';
const OWNER_EMAIL = process.env.OAUTH_EMAIL || process.env.EMAIL_USER || 'srivastavarohan3125@gmail.com';

let transporter = null;
let useGmailApi = false;
let gmail = null;

if (process.env.OAUTH_CLIENT_ID && process.env.OAUTH_CLIENT_SECRET && process.env.OAUTH_REFRESH_TOKEN) {
    console.log('Using Gmail API (OAuth2) for email...');
    
    const oauth2Client = new google.auth.OAuth2(
        process.env.OAUTH_CLIENT_ID,
        process.env.OAUTH_CLIENT_SECRET,
        'https://developers.google.com/oauthplayground'
    );
    
    oauth2Client.setCredentials({
        refresh_token: process.env.OAUTH_REFRESH_TOKEN
    });
    
    gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    useGmailApi = true;
    console.log('Gmail API (OAuth2) configured successfully');
    
} else if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    console.log('Using Gmail SMTP for email...');
    
    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        requireTLS: true,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        connectionTimeout: 30000,
        greetingTimeout: 30000,
        socketTimeout: 30000
    });
    
    transporter.verify()
        .then(() => { console.log('SMTP connection verified'); })
        .catch((err) => { console.log('SMTP verification failed:', err.message); });
} else {
    console.log('Email credentials not configured. Please set up .env file.');
}

async function sendEmailViaGmailApi(to, subject, htmlContent) {
    try {
        const mailOptions = {
            from: `${OWNER_NAME} <${process.env.OAUTH_EMAIL}>`,
            to: to,
            subject: subject,
            html: htmlContent,
            textEncoding: 'base64'
        };

        const mail = new MailComposer(mailOptions);
        const message = await mail.compile().build();
        const rawMessage = Buffer.from(message)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        const result = await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: rawMessage
            }
        });

        console.log('Email sent via Gmail API! Message ID:', result.data.id);
        return true;
    } catch (error) {
        console.error('Gmail API Error:', error.message);
        throw error;
    }
}

async function sendEmailViaSMTP(to, subject, htmlContent) {
    try {
        const mailOptions = {
            from: `"${OWNER_NAME}" <${process.env.EMAIL_USER}>`,
            to: to,
            subject: subject,
            html: htmlContent
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent via SMTP! MessageId:', info.messageId);
        return true;
    } catch (error) {
        console.error('SMTP Error:', error.message);
        throw error;
    }
}

async function sendEmail(to, subject, htmlContent) {
    if (useGmailApi) {
        return await sendEmailViaGmailApi(to, subject, htmlContent);
    } else if (transporter) {
        return await sendEmailViaSMTP(to, subject, htmlContent);
    } else {
        throw new Error('Email service not configured');
    }
}

const ownerEmailTemplate = (name, email, subject, message) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0BCEAF, #00d4aa); padding: 30px; text-align: center; color: #fff; }
        .content { padding: 30px; }
        .info-box { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 15px 0; }
        .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .label { color: #666; font-weight: 500; }
        .value { color: #333; }
        .message-box { background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 8px; margin-top: 15px; }
        .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin:0;">New Contact from Portfolio</h2>
        </div>
        <div class="content">
            <div class="info-box">
                <div class="info-row"><span class="label">Name:</span><span class="value">${name}</span></div>
                <div class="info-row"><span class="label">Email:</span><span class="value">${email}</span></div>
                <div class="info-row"><span class="label">Subject:</span><span class="value">${subject}</span></div>
                <div class="info-row"><span class="label">Date:</span><span class="value">${new Date().toLocaleString()}</span></div>
            </div>
            <div class="message-box">
                <p style="margin:0; white-space: pre-wrap;">${message}</p>
            </div>
        </div>
        <div class="footer">
            <p>Sent from ${OWNER_NAME} Portfolio</p>
        </div>
    </div>
</body>
</html>
    `;
};

const userAutoReplyTemplate = (userName, ownerName) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0BCEAF, #00d4aa); padding: 40px 30px; text-align: center; color: #fff; }
        .header h1 { margin: 0 0 10px 0; font-size: 28px; }
        .header p { margin: 0; font-size: 16px; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #333; margin-bottom: 20px; }
        .message { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 25px; }
        .highlight-box { background: linear-gradient(135deg, #f0fdf9, #e6fffa); border-left: 4px solid #0BCEAF; padding: 20px; border-radius: 0 8px 8px 0; margin: 25px 0; }
        .highlight-box p { margin: 0; color: #555; font-size: 15px; line-height: 1.7; }
        .divider { border: none; border-top: 1px solid #eee; margin: 30px 0; }
        .footer { background: #f5f5f5; padding: 30px; text-align: center; }
        .footer-content { max-width: 400px; margin: 0 auto; }
        .footer p { margin: 5px 0; color: #666; font-size: 14px; }
        .footer .social-links { margin-top: 15px; }
        .footer .social-links a { display: inline-block; margin: 0 8px; color: #0BCEAF; text-decoration: none; font-weight: 500; }
        .footer .social-links a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Reaching Out!</h1>
            <p>Your message has been received</p>
        </div>
        <div class="content">
            <p class="greeting">Dear ${userName},</p>
            
            <p class="message">Thank you for taking the time to contact me through my portfolio. I truly appreciate your interest and the effort you've taken to send me a message.</p>
            
            <p class="message">I have received your message and will get back to you as soon as possible. I typically respond within 24-48 hours, though during busy periods it might take a little longer.</p>
            
            <div class="highlight-box">
                <p>In the meantime, feel free to explore my work and projects on my portfolio website. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            </div>
            
            <hr class="divider">
            
            <p class="message">Best regards,</p>
            <p class="message" style="font-weight: 600; color: #0BCEAF; margin-top: 0;">${ownerName}</p>
        </div>
        <div class="footer">
            <div class="footer-content">
                <p><strong>Rohan Srivastava</strong></p>
                <p>Full Stack Developer | Problem Solver</p>
                <p>srivastavarohan3125@gmail.com</p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/rohan3125/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/ROHAN-SRIVASTAVA-GIT" target="_blank">GitHub</a>
                    <a href="https://leetcode.com/codethecoding25/" target="_blank">LeetCode</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false,
                error: 'Please provide all required fields.' 
            });
        }

        if (!useGmailApi && !transporter) {
            return res.status(500).json({ 
                success: false,
                error: 'Email service not configured. Contact directly at ' + OWNER_EMAIL 
            });
        }

        const ownerMailOptions = {
            subject: `Portfolio Contact: ${subject}`,
            html: ownerEmailTemplate(name, email, subject, message)
        };

        const userMailOptions = {
            subject: `Thank You for Contacting Me - Rohan Srivastava`,
            html: userAutoReplyTemplate(name, OWNER_NAME)
        };

        await sendEmail(OWNER_EMAIL, ownerMailOptions.subject, ownerMailOptions.html);
        await sendEmail(email, userMailOptions.subject, userMailOptions.html);

        res.json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message.'
        });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT);
});
