# Rohan Srivastava - Portfolio Website

A modern, professional portfolio website showcasing skills, experience, and projects with advanced animations and 3D effects.

## 🚀 Features

### Design & Animation
- ✨ **3D Animations** - Interactive Three.js background with rotating torus and particles
- 🎨 **Modern UI** - Clean, professional design with gradient effects
- 📊 **Interactive Charts** - Skill visualization with Chart.js doughnut chart
- 🎭 **Smooth Animations** - AOS (Animate on Scroll) for beautiful transitions
- ✨ **Particle Effects** - Floating particles background
- 🔄 **Typed Effect** - Animated text typing effect
- 📱 **Fully Responsive** - Mobile-first design approach

### Sections
- 🏠 **Hero Section** - Eye-catching introduction with animated stats
- 👤 **About Me** - Professional summary with experience badge
- 💻 **Skills** - Technical skills with animated progress bars & chart
- 📅 **Experience Timeline** - Interactive timeline for education & work
- 🚀 **Projects** - Filterable project showcase with detailed descriptions
- 🏆 **Achievements** - Key accomplishments and recognitions
- 📧 **Contact Form** - Working contact form with email functionality

### Technical Stack
- HTML5, CSS3, JavaScript
- jQuery, Bootstrap 5
- Three.js (3D Graphics)
- Chart.js (Data Visualization)
- AOS (Scroll Animations)
- Typed.js (Text Animation)
- Node.js, Express.js (Backend)
- Nodemailer (Email Service)

## 🛠️ Setup Instructions

### Option 1: Frontend Only (Static HTML)

1. **Open the portfolio:**
   ```bash
   # Simply open index.html in your browser
   ```

2. **Using a local server (recommended):**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

3. **Access:** Open http://localhost:8000

### Option 2: Full Setup with Contact Form

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Gmail account (for contact form)

#### Steps

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Email (Contact Form):**
   
   a. Enable 2-Step Verification on your Gmail:
   - Go to: https://myaccount.google.com → Security
   - Enable 2-Step Verification
   
   b. Generate App Password:
   - Go to: https://myaccount.google.com → Security → App Passwords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact" and generate
   
   c. Update `.env` file:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   ```

3. **Start the Server:**
   ```bash
   npm start
   ```

4. **Access:** Open http://localhost:3000

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Custom styles
├── js/
│   └── main.js            # JavaScript functionality
├── lib/                   # Third-party libraries
│   ├── easing/
│   ├── isotope/
│   ├── lightbox/
│   ├── owlcarousel/
│   ├── typed/
│   └── waypoints/
├── img/                   # Images and assets
├── mail/                  # Email configuration docs
├── server.js              # Backend server
├── package.json           # Dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
└── README.md             # Documentation
```

## 🎯 Portfolio Sections

### 1. Hero Section
- Animated name with gradient effect
- Typed text animation (Full Stack Developer, Data Analyst, etc.)
- Professional summary
- Animated statistics counters
- CTA buttons with hover effects
- 3D animated image with floating tech icons

### 2. About Section
- Professional photo with animated border
- Experience badge (2+ Years)
- Detailed bio with education highlights
- Social media links

### 3. Skills Section
- Four skill categories:
  - Frontend Development
  - Backend Development
  - Data Analytics & Tools
  - DevOps & Tools
- Animated progress bars
- Interactive doughnut chart
- Technology stack icons grid

### 4. Experience Timeline
- Interactive vertical timeline
- Color-coded tags (Work, Education, Internship)
- Detailed descriptions for each position
- Technology tags
- Academic highlights with scores

### 5. Projects Section
- Filterable project grid (All, Web, Mobile, Data, ML)
- Project cards with:
  - Hover animations
  - Tech stack badges
  - GitHub & live demo links
  - Statistics (stars, forks, downloads)
- 8 Featured projects with detailed descriptions

### 6. Achievements Section
- LeetCode solutions showcase
- Internship achievements
- Academic excellence
- Certificate badges

### 7. Contact Section
- Professional contact form
- Contact information display
- Social media links
- Direct email functionality
- Form validation

### 8. Footer
- Quick links
- Contact information
- Social media icons
- Copyright notice

## 📧 Contact Form Features

- ✅ Form validation (client & server side)
- ✅ Professional email templates (HTML)
- ✅ Auto-reply to form submitter
- ✅ Email notification to owner
- ✅ Success/error feedback
- ✅ Mobile responsive
- ✅ Rate limiting ready
- ✅ Error handling

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #0BCEAF;
    --dark: #121212;
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content
Update text content directly in `index.html`

### Projects
Add/modify projects in the `#projects` section:
```html
<div class="project-item" data-category="web">
    <!-- Project content -->
</div>
```

### Skills
Modify the skill bars and chart data in `index.html` and `main.js`

## 🔧 API Endpoints

### POST /api/contact
Send contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss...",
  "phone": "+91 XXXXX XXXXX"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "emailConfigured": true
}
```

## 🌐 Deployment

### Frontend Only (Netlify/Vercel)
1. Upload all files except `server.js`, `package.json`, `.env`
2. Configure build settings if needed
3. Deploy

### Full Stack (Railway/Render/Heroku)
1. Push all files to GitHub
2. Connect repository to deployment platform
3. Set environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `OWNER_NAME`
   - `OWNER_EMAIL`
4. Deploy

### Local Development
```bash
npm install
npm start
```

## 📄 License

This portfolio is created for personal use. Feel free to use it as a template for your own portfolio.

## 👤 Author

**Rohan Srivastava**
- GitHub: [@ROHAN-SRIVASTAVA-GIT](https://github.com/ROHAN-SRIVASTAVA-GIT)
- LinkedIn: [rohan3125](https://www.linkedin.com/in/rohan3125/)
- LeetCode: [codethecoding25](https://leetcode.com/codethecoding25/)
- Email: srivastavarohan3125@gmail.com

## 🙏 Acknowledgments

- Template inspired by modern portfolio designs
- Libraries: Bootstrap, Three.js, Chart.js, AOS, Typed.js
- Icons: Font Awesome
- Fonts: Google Fonts (Poppins, Orbitron)

---

Made with ❤️ by Rohan Srivastava
