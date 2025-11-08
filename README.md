# Tharsan Portfolio

This is a modern, fully responsive personal portfolio website built with React and Tailwind CSS. It showcases my skills, projects, experience, and contact information, with a beautiful animated space theme and dark/light mode support.

## Features
- Responsive design for mobile, tablet, laptop, and desktop
- Animated backgrounds and interactive UI
- Dark/light theme toggle
- Sections: Hero, About, Services, Skills, Projects, Experience, Certifications, Contact
- Downloadable CV
- Social and email links
- Built with best practices for accessibility and performance

## Folder Structure
```
Portfolio/
├── index.html
├── package.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.js
├── vercel.json
├── vite.config.mjs
├── public/
│   ├── manifest.json
│   └── assets/
│       ├── images/
│       │   ├── certificates/
│       │   ├── icons/
│       │   ├── profile/
│       │   └── projects/
│       ├── pdf/
│       │   ├── certificates/
│       │   └── resume/
│       │       └── TharsanCV.pdf
│       └── video/
│           └── my-video.mp4
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── About.jsx
│       ├── BackgroundElements.jsx
│       ├── BackgroundElements.css
│       ├── Certifications.jsx
│       ├── ContactForm.jsx
│       ├── Experience.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Projects.jsx
│       ├── Services.jsx
│       ├── SideNavigation.jsx
│       ├── Skills.jsx
│       └── Topbar.jsx
```

## Technologies Used
- **Languages:** JavaScript (ES6+), JSX, CSS
- **Framework:** React (functional components, hooks)
- **Styling:** Tailwind CSS (utility-first, responsive)
- **Animation:** Framer Motion (for smooth transitions)
- **Build Tool:** Vite (fast development/build)
- **Deployment:** Vercel (production hosting)

## Configuration Files
- `tailwind.config.js`: Tailwind CSS custom configuration
- `postcss.config.cjs`: PostCSS setup for Tailwind
- `vite.config.mjs`: Vite build configuration
- `vercel.json`: Vercel deployment settings
- `manifest.json`: PWA manifest for web app

## How to Run Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/ThaRSan1101/ThaRSan1101.github.io.git
   cd ThaRSan1101.github.io
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Install Tailwind CSS and Framer Motion (if not already installed):**
   ```sh
   npm install tailwindcss framer-motion
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will run at `http://localhost:5173` (or as shown in your terminal).

## How to Build for Production
```sh
npm run build
```
The output will be in the `dist/` folder, ready for deployment.

## How to Deploy
- The site is configured for Vercel. Push your changes to the main branch and Vercel will auto-deploy.
- You can also deploy the `dist/` folder to any static hosting provider.

## Customization
* Update your profile image in `public/assets/images/profile/profile.jpg`.
* Change video in `public/assets/video/my-video.mp4`.
* Edit content in the `src/components/` files for each section.
* Update theme colors in Tailwind config or CSS custom properties.
* Replace or add certificates in `public/assets/images/certificates/`.
* Update your CV in `public/assets/pdf/resume/TharsanCV.pdf`.

## Contact Form Setup (EmailJS)

The contact form uses EmailJS for direct email sending. To set it up:

1. **Create EmailJS Account:** Go to [emailjs.com](https://www.emailjs.com/) and sign up
2. **Connect Gmail Service:** Add Gmail service and note your Service ID
3. **Create Email Template:** Use variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. **Get Public Key:** From Account settings
5. **Update Configuration:** Edit `src/config/emailjs.js`:
   ```javascript
   export const EMAIL_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id', 
     PUBLIC_KEY: 'your_public_key',
     TO_EMAIL: 'arultharisan01@gmail.com'
   }
   ```

**Note:** Without EmailJS setup, the form uses mailto fallback (opens email client).

## Contact
For any questions or feedback, reach out via the contact form on the site or email: arultharisan01@gmail.com

## Add CV 
TharsanCV.pdf in public/assets/pdf/resume