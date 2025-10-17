import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'

// Smooth scroll function
const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function Topbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get saved theme from localStorage, default to dark mode
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  const applyTheme = (darkMode) => {
    // Get root element and body
    const root = document.documentElement
    const body = document.body
    
    if (darkMode) {
      // Switch to Dark Mode
      root.classList.remove('light')
      root.classList.add('dark')
      body.style.backgroundColor = '#0a0a0a'
      body.style.color = '#fafafa'
      
      // Update CSS custom properties for dark theme
      root.style.setProperty('--primary-dark', '#0a0a0a')
      root.style.setProperty('--primary-light', '#fafafa')
      root.style.setProperty('--secondary-dark', 'rgba(26, 26, 26, 0.8)')
      root.style.setProperty('--secondary-light', '#2a2a2a')
      root.style.setProperty('--text-primary', '#fafafa')
      root.style.setProperty('--text-secondary', '#cccccc')
      root.style.setProperty('--text-muted', '#666666')
    } else {
      // Switch to Light Mode
      root.classList.remove('dark')
      root.classList.add('light')
      body.style.backgroundColor = '#fafafa'
      body.style.color = '#0a0a0a'
      
      // Update CSS custom properties for light theme
      root.style.setProperty('--primary-dark', '#fafafa')
      root.style.setProperty('--primary-light', '#0a0a0a')
      root.style.setProperty('--secondary-dark', 'rgba(255, 255, 255, 0.9)')
      root.style.setProperty('--secondary-light', '#e0e0e0')
      root.style.setProperty('--text-primary', '#0a0a0a')
      root.style.setProperty('--text-secondary', '#333333')
      root.style.setProperty('--text-muted', '#666666')
    }
    
    // Update hero section specifically
    const heroSection = document.getElementById('home')
    if (heroSection) {
      if (darkMode) {
        heroSection.style.backgroundColor = '#0a0a0a'
      } else {
        heroSection.style.backgroundColor = '#fafafa'
      }
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    
    // Apply the theme
    applyTheme(newTheme)
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { theme: newTheme ? 'dark' : 'light' } 
    }))
  }

  useEffect(() => {
    // Apply the initial theme on component mount
    applyTheme(isDarkMode)
  }, [])
  return (
  <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 xl:pl-56">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo/Name - Left side on mobile, responsive positioning */}
  <div className="flex-shrink-0 xl:-ml-20">
          <button 
            onClick={() => smoothScrollTo('home')}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold flex items-center gap-1 sm:gap-2 cursor-pointer transition-all duration-300 hover:opacity-80"
            style={{color: 'var(--text-primary, #fafafa)', background: 'none', border: 'none', padding: '0'}}
          >
            <span style={{color: 'var(--text-primary, #fafafa)'}}>tharsan</span>
            <span style={{color: 'var(--text-muted, #666666)'}}>.</span>
            <span style={{color: 'var(--text-primary, #fafafa)'}}>Portfolio!</span>
            <span 
              className="text-lg sm:text-xl lg:text-2xl transition-all duration-500 cursor-pointer hover:animate-bounce emoji-element"
              style={{
                filter: 'drop-shadow(0 0 5px rgba(102, 102, 102, 0.3))',
                transform: 'scale(1)',
                animation: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.3) translateY(-5px)'
                e.target.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) brightness(2) contrast(2)'
                e.target.style.animation = 'pulse 0.6s ease-in-out infinite alternate'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) translateY(0px)'
                e.target.style.filter = 'drop-shadow(0 0 5px rgba(102, 102, 102, 0.3))'
                e.target.style.animation = 'none'
              }}
            >
              👨‍💻 
            </span>
          </button>
        </div>

        {/* Social Links - Responsive layout */}
        <div className="hidden sm:flex gap-2 items-center">
          <a 
            href="https://www.linkedin.com/in/tharisan0111/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          >
            <FaLinkedin style={{color: 'var(--text-primary, #fafafa)'}} className="text-lg" />
          </a>
          <a 
            href="https://github.com/ThaRSan1101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          >
            <FaGithub style={{color: 'var(--text-primary, #fafafa)'}} className="text-lg" />
          </a>
          <a 
            href="mailto:tharsan2001@gmail.com"
            className="hidden md:block px-3 py-2 backdrop-blur-sm rounded-lg transition-colors duration-200 text-sm font-medium topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)', 
              color: 'var(--text-primary, #fafafa)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'
              e.target.style.color = 'var(--text-secondary, #cccccc)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'
              e.target.style.color = 'var(--text-primary, #fafafa)'
            }}
          >
            arultharisan01@gmail.com
          </a>
        </div>

        {/* Mobile Social Links - Icons only for mobile */}
        <div className="flex sm:hidden gap-1 items-center">
          <a 
            href="https://www.linkedin.com/in/tharisan0111/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          >
            <FaLinkedin style={{color: 'var(--text-primary, #fafafa)'}} className="text-sm" />
          </a>
          <a 
            href="https://github.com/ThaRSan1101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          >
            <FaGithub style={{color: 'var(--text-primary, #fafafa)'}} className="text-sm" />
          </a>
          <a 
            href="mailto:tharsan2001@gmail.com"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          >
            <FaEnvelope style={{color: 'var(--text-primary, #fafafa)'}} className="text-sm" />
          </a>
        </div>
        
        {/* Theme Toggle Button - Right side, adjusted positioning for mobile */}
        <div className="flex-shrink-0 ml-2 sm:ml-5 mr-1 sm:mr-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-110 topbar-link"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          >
            {isDarkMode ? (
              <FaSun style={{color: 'var(--text-primary, #fafafa)'}} className="text-sm sm:text-base lg:text-lg" />
            ) : (
              <FaMoon style={{color: 'var(--text-primary, #fafafa)'}} className="text-sm sm:text-base lg:text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}