/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'space-black': 'var(--space-black)',
        'deep-space': 'var(--deep-space)',
        'nebula-purple': 'var(--nebula-purple)',
        'cosmic-blue': 'var(--cosmic-blue)',
        'stellar-cyan': 'var(--stellar-cyan)',
        'galaxy-pink': 'var(--galaxy-pink)',
        'star-white': 'var(--star-white)',
        'cosmic-gray': 'var(--cosmic-gray)',
        'cosmic-light': 'var(--cosmic-light)',
        navy: 'var(--navy)',
        'dark-blue': 'var(--dark-blue)',
        electric: 'var(--electric)',
        slate: 'var(--slate)',
        'light-slate': 'var(--light-slate)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 20s linear infinite',
        'cosmic-glow': 'cosmic-glow 3s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float-particles': 'float-particles 15s linear infinite',
        'nebula-drift': 'nebula-drift 30s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(2deg)' },
          '66%': { transform: 'translateY(5px) rotate(-2deg)' }
        },
        sparkle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200px)' }
        },
        'cosmic-glow': {
          '0%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1.2)' }
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2), 0 0 60px rgba(6, 182, 212, 0.1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.3), 0 0 90px rgba(6, 182, 212, 0.2)'
          }
        },
        'float-particles': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)' }
        },
        'nebula-drift': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1) rotate(180deg)' }
        }
      }
    }
  },
  plugins: []
}