# Gmail Email Implementation for Portfolio Contact Form

## Overview
This document contains the email configuration for the portfolio contact form using **Nodemailer** with Gmail SMTP.

---

## Environment Variables (.env)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=YOUR_GMAIL@gmail.com
EMAIL_PASSWORD=YOUR_APP_PASSWORD

# Portfolio Owner Info
OWNER_NAME=Rohan Srivastava
OWNER_EMAIL=srivastavarohan3125@gmail.com
```

---

## Gmail App Password Setup

### Step 1: Enable 2-Step Verification
1. Go to [Google Account](https://myaccount.google.com) → **Security**
2. Enable **2-Step Verification**

### Step 2: Create App Password
1. Go to **App Passwords** (under 2-Step Verification)
2. Select app: "Mail"
3. Select device: "Other (Custom name)" → enter "Portfolio Contact"
4. Copy the 16-character password generated

### Step 3: Update .env File
```env
EMAIL_USER=srivastavarohan3125@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

---

## Quick Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Email:**
   - Create a Gmail App Password
   - Update `.env` file with your credentials

3. **Start Server:**
   ```bash
   npm start
   ```

4. **Access Portfolio:**
   - Open browser: http://localhost:3000

---

## Features

- ✅ Professional HTML email templates
- ✅ Auto-reply to form submitter
- ✅ Email notification to portfolio owner
- ✅ Form validation
- ✅ Error handling
- ✅ Mobile responsive

---

## Important Notes

1. **App Password Required**: Gmail requires an App Password, not your regular password
2. **2-Step Verification**: Must be enabled to create App Passwords
3. **Rate Limits**: Gmail has sending limits (~500 emails/day)
4. **HTTPS Recommended**: For production, use HTTPS

---

## Troubleshooting

### Error: "Authentication failed"
- Check if App Password is correct
- Ensure 2-Step Verification is enabled
- Verify EMAIL_USER and EMAIL_PASSWORD in .env

### Error: "Connection timeout"
- Check internet connection
- Verify Gmail SMTP port (465) is not blocked
- Try using port 587 instead

### Emails not sending
- Check server console for error messages
- Verify .env file is properly configured
- Ensure App Password was generated correctly

---

## Portfolio Features

### Frontend
- 🎨 Modern, responsive design
- ✨ 3D animations with Three.js
- 📊 Interactive skill charts (Chart.js)
- 🎭 Smooth scroll animations (AOS)
- 🔄 Particle effects background
- 📱 Fully responsive layout

### Backend
- 📨 Contact form with email functionality
- 🤖 Automated email replies
- ✅ Input validation
- 🔒 Secure email handling

### Sections
- 🏠 Hero section with 3D animation
- 👤 About me with experience badge
- 💻 Skills with progress bars & charts
- 📅 Timeline for experience/education
- 🚀 Projects with filters & hover effects
- 🏆 Achievements showcase
- 📧 Contact form with email integration
- 🔗 Social media links

---

## Contact

For any issues with the email configuration, ensure your Gmail App Password is correctly set in the `.env` file.

**Portfolio Owner:** Rohan Srivastava  
**Email:** srivastavarohan3125@gmail.com
