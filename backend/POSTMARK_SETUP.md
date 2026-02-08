# Email Setup with Postmark

## Prerequisites
1. Create a free Postmark account at https://postmarkapp.com/
2. Verify your sender signature (the email address you'll send from)

## Configuration Steps

### 1. Get Your Postmark API Key
1. Log into your Postmark account
2. Go to **Servers** → Select your server
3. Click on **API Tokens**
4. Copy your **Server API Token**

### 2. Verify Sender Signature
1. In Postmark, go to **Sender Signatures**
2. Add and verify the email address you want to send from
3. Check your email for the verification link

### 3. Update Backend .env File
Add these variables to your `backend/.env` file:

```env
POSTMARK_API_KEY=your_actual_api_key_here
POSTMARK_FROM_EMAIL=noreply@yourdomain.com
POSTMARK_TO_EMAIL=orders@yourdomain.com
```

- **POSTMARK_API_KEY**: Your Server API Token from Postmark
- **POSTMARK_FROM_EMAIL**: The verified sender email (must be verified in Postmark)
- **POSTMARK_TO_EMAIL**: Where you want to receive order inquiries

### 4. Install Dependencies
```bash
cd backend
npm install
```

### 5. Start the Backend Server
```bash
npm run dev
```

The server will run on port 8080 (or the port specified in your .env file).

## Testing
1. Make sure both frontend and backend servers are running
2. Fill out the contact form on the website
3. Check the email inbox for POSTMARK_TO_EMAIL

## Troubleshooting
- **405 Method Not Allowed**: Postmark free tier only allows emails to verified addresses
- **API Key Invalid**: Double-check your API key in the .env file
- **Email not received**: Check Postmark dashboard → Activity to see if email was sent
- **CORS errors**: Make sure backend CORS is configured properly

## Postmark Free Tier Limits
- 100 emails per month free
- Only send to verified email addresses in development
- Upgrade to production for higher limits
