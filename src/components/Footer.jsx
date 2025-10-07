import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Footer(){
  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      if (isDark) {
        // Dark theme styles
        document.documentElement.style.setProperty('--footer-bg', '#0f0f0f')
        document.documentElement.style.setProperty('--footer-logo-color', '#ffffff')
        document.documentElement.style.setProperty('--footer-icon-color', '#cccccc')
        document.documentElement.style.setProperty('--footer-icon-bg', 'rgba(42, 42, 42, 0.8)')
        document.documentElement.style.setProperty('--footer-icon-hover-bg', 'rgba(52, 52, 52, 0.8)')
        document.documentElement.style.setProperty('--footer-copyright-color', '#aaaaaa')
        document.documentElement.style.setProperty('--footer-border-color', 'rgba(255, 255, 255, 0.2)')
      } else {
        // Light theme styles - Black and White
        document.documentElement.style.setProperty('--footer-bg', '#ffffff')
        document.documentElement.style.setProperty('--footer-logo-color', '#000000')
        document.documentElement.style.setProperty('--footer-icon-color', '#333333')
        document.documentElement.style.setProperty('--footer-icon-bg', 'rgba(240, 240, 240, 0.8)')
        document.documentElement.style.setProperty('--footer-icon-hover-bg', 'rgba(220, 220, 220, 0.8)')
        document.documentElement.style.setProperty('--footer-copyright-color', '#666666')
        document.documentElement.style.setProperty('--footer-border-color', 'rgba(0, 0, 0, 0.2)')
      }
    }
    
    // Apply theme on initial load
    applyTheme()
    
    // Listen for theme changes
    const handleThemeChange = () => applyTheme()
    const handleStorageChange = () => applyTheme()
    
    window.addEventListener('themeChange', handleThemeChange)
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])
  return (
    <footer className="py-12 relative overflow-hidden" style={{ backgroundColor: 'var(--footer-bg)' }}>
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Logo */}
          <div className="text-2xl font-bold" style={{ color: 'var(--footer-logo-color)' }}>
            Tharsan.
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <motion.a 
              href="https://www.linkedin.com/in/tharisan0111/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--footer-icon-bg)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-bg)'
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" style={{ color: 'var(--footer-icon-color)' }} />
            </motion.a>
            
            <motion.a 
              href="https://github.com/ThaRSan1101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--footer-icon-bg)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-bg)'
              }}
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" style={{ color: 'var(--footer-icon-color)' }} />
            </motion.a>
            
            <motion.a 
              href="https://wa.me/94715112782"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--footer-icon-bg)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-bg)'
              }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" style={{ color: 'var(--footer-icon-color)' }} />
            </motion.a>
            
            <motion.a 
              href="mailto:arultharisan01@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--footer-icon-bg)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--footer-icon-bg)'
              }}
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" style={{ color: 'var(--footer-icon-color)' }} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="pt-8" style={{ borderTop: '1px solid var(--footer-border-color)' }}>
            <p style={{ color: 'var(--footer-copyright-color)' }}>
              © 2025 Tharsan | All Rights Reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
