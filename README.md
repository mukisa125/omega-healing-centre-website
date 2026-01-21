# Omega Healing Center - Church Website

A modern, professional church website built with React, Tailwind CSS, and Framer Motion for Omega Healing Center ministry.

## 🎨 Design Features

- **Primary Theme Color**: HSL(266, 70%, 50%) - Purple accent throughout
- **Dark Premium Aesthetic**: Faith-centered, professional design
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile-first design approach
- **Modern UI/UX**: Inspired by contemporary church websites

## 🏗️ Tech Stack

- **React 18** - Modern functional components
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Router** - Client-side routing

## 📄 Pages

### ✅ Home Page (Fully Designed)
- Full-screen hero section with background image
- Service times card with schedule
- Welcome section with ministry highlights
- Mission section with imagery
- Upcoming events showcase
- Smooth scroll animations throughout

### 🚧 Placeholder Pages (Dark Theme Ready)
- About Us
- Ministries
- Resources
- Sermons
- Contact
- Give/Donations

All placeholder pages are structured and ready for content expansion.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
omega-healing-center/
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── WelcomeSection.jsx
│   │   │   ├── MissionSection.jsx
│   │   │   └── UpcomingEvents.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Ministries.jsx
│   │   ├── Resources.jsx
│   │   ├── Sermons.jsx
│   │   ├── Contact.jsx
│   │   └── Give.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Service Times

**Thursdays**
- Healing Service – 5:00 PM (EAT)

**Sundays**
- First Service – 9:00 AM
- Second Service – 11:30 AM

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the primary color:
```javascript
colors: {
  primary: 'hsl(266, 70%, 50%)',
  'primary-dark': 'hsl(266, 70%, 40%)',
  'primary-light': 'hsl(266, 70%, 60%)',
}
```

### Hero Background Image
Update the background image in `src/components/home/HeroSection.jsx`:
```javascript
backgroundImage: 'url(YOUR_IMAGE_URL)'
```

### Logo
The current logo is text-based. To add a custom logo:
1. Place your logo file in the `public` folder
2. Update the Navbar component to use an `<img>` tag

## 📝 Next Steps

1. **Replace Placeholder Images**: Add actual church photos
2. **Add Real Logo**: Replace text logo with ministry branding
3. **Complete Placeholder Pages**: Add content to About, Ministries, etc.
4. **Add Contact Form**: Implement functional contact form
5. **Integrate Donation System**: Add payment gateway for giving
6. **Add Sermon Archive**: Create sermon library with video/audio
7. **SEO Optimization**: Add meta tags and structured data

## 🌐 Deployment

This project can be deployed to:
- **Vercel** (Recommended for React)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 Omega Healing Center. All rights reserved.

## 🙏 Ministry Information

**Omega Healing Center**
An open invitation to a life of healing, restoration, and faith through the Word of God.

---

Built with ❤️ for the Kingdom
