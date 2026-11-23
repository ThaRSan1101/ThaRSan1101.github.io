/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'laptop1440': '1440px',
      },
      colors: {
        brand: {
          yellow: '#fbb03b',      /* The signature golden amber circle & badge from reference */
          'yellow-dark': '#f59e0b',
          'yellow-light': '#fef3c7',
          blue: '#1d4ed8',        /* The signature royal cobalt blue from reference "MATTER?" */
          'blue-dark': '#1e40af',
          'blue-light': '#eff6ff',
          black: '#0a0a0a',       /* Crisp high-contrast deep black */
          charcoal: '#18181b',
          muted: '#52525b',
          soft: '#71717a',
          light: '#f8f9fa',       /* Editorial off-white background */
          card: '#ffffff',
          border: '#e4e4e7',
          'border-dark': '#d4d4d8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
