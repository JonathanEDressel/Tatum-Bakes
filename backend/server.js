const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const postmark = require('postmark');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Postmark client
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB CONNECTED'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => res.send('starting API'));

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { fname, lname, email, phone, info } = req.body;

        // Validate required fields
        if (!fname || !lname || !email || !phone || !info) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Send email using Postmark
        const result = await postmarkClient.sendEmail({
            From: process.env.POSTMARK_FROM_EMAIL,
            To: process.env.POSTMARK_TO_EMAIL,
            Subject: `New Order Inquiry from ${fname} ${lname}`,
            TextBody: `
New Order Inquiry:

Name: ${fname} ${lname}
Email: ${email}
Phone: ${phone}

Order Details:
${info}
            `,
            HtmlBody: `
<h2>New Order Inquiry</h2>
<p><strong>Name:</strong> ${fname} ${lname}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<h3>Order Details:</h3>
<p>${info.replace(/\n/g, '<br>')}</p>
            `,
            ReplyTo: email
        });

        console.log('Postmark response:', result);
        res.json({ success: true, message: 'Email sent successfully', messageId: result.MessageID });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message || 'Failed to send email' 
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
