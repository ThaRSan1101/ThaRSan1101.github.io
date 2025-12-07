# Tharsan - Personal Portfolio

A modern, high-performance personal portfolio website built with **React** and **Tailwind CSS**. Designed with a premium **Dark Space Theme**, it features smooth animations, responsive layouts, and a professional showcase of skills and projects.

## 🚀 Features

- **Premium Dark Space Theme**: Features a custom-animated starry night sky background and nebula effects.
- **Fully Responsive**: Optimized for all devices from small mobiles (320px) to large 4K screens.
- **Interactive UI**: Smooth scroll navigation, hover effects, and modern glassmorphism elements.
- **Sections**: 
  - **Hero**: Dynamic introduction with profile and quick links.
  - **Skills**: Interactive accordion-style skill categories.
  - **Projects**: Showcase of work with alternating layouts and details.
  - **Contact**: Clean contact information section.
- **CV Download**: Dedicated resume download button.
- **Performance Optimized**: Built with Vite for lightning-fast loading.

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile/      # Profile pictures
│   │   │   └── projects/     # Project screenshots
│   │   ├── pdf/
│   │   │   └── resume/
│   │   │       └── TharsanCV.pdf # Downloadable Resume
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx   # Contact & About section
│   │   ├── Footer.tsx        # Simple footer
│   │   ├── Hero.tsx          # Hero section with space background
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── SideNavigation.tsx# Floating sidebar nav & mobile menu
│   │   ├── Skills.tsx        # Collapsible technical skills
│   │   └── Topbar.tsx        # Top navigation & social links
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles & Tailwind directives
├── index.html
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.mjs           # Vite configuration
└── package.json
```

## 🛠️ Technologies

- **Frontend Library**: [React 18](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: TypeScript

## 🔧 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ThaRSan1101/ThaRSan1101.github.io.git
cd ThaRSan1101.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
The app will open at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

## 🎨 Customization

### Profile & Resume
- **Profile Image**: Replace `public/assets/images/profile/profile.jpg`
- **Resume/CV**: Replace `public/assets/pdf/resume/TharsanCV.pdf`

### Updating Content
- **Skills**: Edit data in `src/components/Skills.tsx`
- **Projects**: Edit `projects` array in `src/components/Projects.tsx`
- **Contact Info**: Update `socialLinks` in `src/components/ContactForm.tsx` and `src/components/Topbar.tsx`

### Theme
- The project uses a **hardcoded dark theme**. 
- Colors are defined directly in components and `tailwind.config.js` with custom breakpoints (e.g., `laptop1440`).

## 📬 Contact

- **Email**: arultharisan01@gmail.com
- **LinkedIn**: [Tharsan](https://www.linkedin.com/in/tharisan0111/)
- **GitHub**: [ThaRSan1101](https://github.com/ThaRSan1101)

---
© 2025 Yoganathan Arultharisan. All rights reserved.