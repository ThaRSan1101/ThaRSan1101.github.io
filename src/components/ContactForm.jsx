import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import BackgroundElements from './BackgroundElements'
import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG } from '../config/emailjs'

// Initialize EmailJS with public key
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY)

// Input validation and sanitization utilities
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''
  // Only remove dangerous characters, keep spaces
  return input.replace(/[<>"']/g, '')
}

const sanitizeForSubmit = (input) => {
  if (typeof input !== 'string') return ''
  // Trim spaces only when submitting
  return input.trim().replace(/[<>"']/g, '')
}

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/
  return nameRegex.test(name.trim())
}

const validateMessage = (message) => {
  const trimmed = message.trim()
  return trimmed.length >= 10 && trimmed.length <= 1000
}

export default function Contact(){
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      if (isDark) {
        // Dark theme styles
        document.documentElement.style.setProperty('--contact-bg', '#0f0f0f')
        document.documentElement.style.setProperty('--contact-pattern', 'rgba(42, 42, 42, 0.4)')
        document.documentElement.style.setProperty('--contact-dots', 'rgba(255,255,255,0.07)')
        document.documentElement.style.setProperty('--contact-icons', '#333333')
        document.documentElement.style.setProperty('--contact-heading', '#ffffff')
        document.documentElement.style.setProperty('--contact-text', '#cccccc')
        document.documentElement.style.setProperty('--contact-card-bg', 'rgba(42, 42, 42, 0.8)')
        document.documentElement.style.setProperty('--contact-card-border', '#666666')
        document.documentElement.style.setProperty('--contact-card-hover-bg', 'rgba(52, 52, 52, 0.8)')
        document.documentElement.style.setProperty('--contact-card-hover-border', '#777777')
        document.documentElement.style.setProperty('--contact-icon-bg', 'rgba(136, 136, 136, 0.2)')
        document.documentElement.style.setProperty('--contact-icon-color', '#cccccc')
        document.documentElement.style.setProperty('--contact-input-bg', 'rgba(32, 32, 32, 0.8)')
        document.documentElement.style.setProperty('--contact-input-border', '#555555')
        document.documentElement.style.setProperty('--contact-input-text', '#ffffff')
        document.documentElement.style.setProperty('--contact-label-color', '#aaaaaa')
        document.documentElement.style.setProperty('--contact-btn-bg', '#ffffff')
        document.documentElement.style.setProperty('--contact-btn-text', '#000000')
        document.documentElement.style.setProperty('--contact-btn-hover-bg', '#eeeeee')
      } else {
        // Light theme styles - Black and White
        document.documentElement.style.setProperty('--contact-bg', '#ffffff')
        document.documentElement.style.setProperty('--contact-pattern', 'rgba(0, 0, 0, 0.1)')
        document.documentElement.style.setProperty('--contact-dots', 'rgba(0, 0, 0, 0.05)')
        document.documentElement.style.setProperty('--contact-icons', '#666666')
        document.documentElement.style.setProperty('--contact-heading', '#000000')
        document.documentElement.style.setProperty('--contact-text', '#333333')
        document.documentElement.style.setProperty('--contact-card-bg', 'rgba(255, 255, 255, 0.9)')
        document.documentElement.style.setProperty('--contact-card-border', '#e0e0e0')
        document.documentElement.style.setProperty('--contact-card-hover-bg', 'rgba(245, 245, 245, 0.9)')
        document.documentElement.style.setProperty('--contact-card-hover-border', '#cccccc')
        document.documentElement.style.setProperty('--contact-icon-bg', 'rgba(240, 240, 240, 0.8)')
        document.documentElement.style.setProperty('--contact-icon-color', '#333333')
        document.documentElement.style.setProperty('--contact-input-bg', 'rgba(255, 255, 255, 0.9)')
        document.documentElement.style.setProperty('--contact-input-border', '#d0d0d0')
        document.documentElement.style.setProperty('--contact-input-text', '#000000')
        document.documentElement.style.setProperty('--contact-label-color', '#555555')
        document.documentElement.style.setProperty('--contact-btn-bg', '#000000')
        document.documentElement.style.setProperty('--contact-btn-text', '#ffffff')
        document.documentElement.style.setProperty('--contact-btn-hover-bg', '#333333')
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const sanitizedValue = sanitizeInput(value)
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be 2-50 characters and contain only letters and spaces'
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters'
    }
    
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be 10-1000 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e){
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    setStatus('')
    
    // Sanitize all inputs (trim spaces only on submit)
    const sanitizedData = {
      name: sanitizeForSubmit(formData.name),
      email: sanitizeForSubmit(formData.email),
      subject: sanitizeForSubmit(formData.subject),
      message: sanitizeForSubmit(formData.message)
    }
    
    // Template parameters for EmailJS
    const templateParams = {
      from_name: sanitizedData.name,
      from_email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message,
      to_email: EMAIL_CONFIG.TO_EMAIL
    }
    
    // Send email using EmailJS
    emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams)
      .then((response) => {
        setStatus('SUCCESS')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsLoading(false)
      })
      .catch((error) => {
        // If EmailJS fails, use mailto fallback
        const mailtoURL = `mailto:arultharisan01@gmail.com?subject=${encodeURIComponent(sanitizedData.subject)}&body=${encodeURIComponent(
          `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`
        )}`
        
        try {
          window.open(mailtoURL, '_self')
          setStatus('MAILTO_SUCCESS')
          setFormData({ name: '', email: '', subject: '', message: '' })
          setIsLoading(false)
        } catch (mailtoError) {
          setStatus('ERROR')
          setIsLoading(false)
        }
      })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'arultharisan01@gmail.com',
      href: 'mailto:arultharisan01@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Badulla, Sri Lanka',
      href: 'https://maps.google.com/?q=Badulla,+Sri+Lanka'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 71 511 2782',
      href: 'tel:+94715112782'
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/ThaRSan1101',
      username: '@ThaRSan1101'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tharisan0111/',
      username: 'Tharisan'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/94715112782',
      username: '+94 71 511 2782'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="contact" density="light" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--contact-pattern) 100px, var(--contact-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--contact-pattern) 100px, var(--contact-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--contact-dots) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--contact-heading)' }}>
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--contact-text)' }}>
            Let's work together and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Header Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--contact-heading)' }}>
                Let's Connect
              </h3>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--contact-text)' }}>
                Ready to start your next project? I'm here to help bring your ideas to life.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="block p-4 sm:p-6 rounded-2xl transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--contact-card-bg)',
                      border: '2px solid var(--contact-card-border)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--contact-card-hover-bg)'
                      e.currentTarget.style.borderColor = 'var(--contact-card-hover-border)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--contact-card-bg)'
                      e.currentTarget.style.borderColor = 'var(--contact-card-border)'
                    }}
                  >
                    <div className="flex items-center space-x-4 sm:space-x-5">
                      {/* Icon Container */}
                      <div 
                        className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center"
                        style={{ 
                          backgroundColor: 'var(--contact-icon-bg)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <info.icon 
                          className="text-lg sm:text-2xl" 
                          style={{ color: 'var(--contact-icon-color)' }} 
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <p 
                          className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1" 
                          style={{ color: 'var(--contact-label-color)' }}
                        >
                          {info.label}
                        </p>
                        <p 
                          className="text-base sm:text-lg font-bold" 
                          style={{ color: 'var(--contact-heading)' }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl"
                 style={{ 
                   backgroundColor: 'var(--contact-card-bg)',
                   border: '1px solid var(--contact-card-border)',
                   backdropFilter: 'blur(10px)'
                 }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--contact-heading)' }}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--contact-label-color)' }}>Name</label>
                    <input 
                      name="name" 
                      type="text"
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      style={{ 
                        backgroundColor: 'var(--contact-input-bg)',
                        border: errors.name ? '1px solid #ef4444' : '1px solid var(--contact-input-border)',
                        color: 'var(--contact-input-text)'
                      }}
                      placeholder="Your full name"
                      maxLength={50}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-red-500 mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--contact-label-color)' }}>Email</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      style={{ 
                        backgroundColor: 'var(--contact-input-bg)',
                        border: errors.email ? '1px solid #ef4444' : '1px solid var(--contact-input-border)',
                        color: 'var(--contact-input-text)'
                      }}
                      placeholder="your.email@example.com"
                      maxLength={100}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-500 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--contact-label-color)' }}>Subject</label>
                  <input 
                    name="subject" 
                    type="text"
                    required 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    style={{ 
                      backgroundColor: 'var(--contact-input-bg)',
                      border: errors.subject ? '1px solid #ef4444' : '1px solid var(--contact-input-border)',
                      color: 'var(--contact-input-text)'
                    }}
                    placeholder="What's this about?"
                    maxLength={100}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-red-500 mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--contact-label-color)' }}>Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                    style={{ 
                      backgroundColor: 'var(--contact-input-bg)',
                      border: errors.message ? '1px solid #ef4444' : '1px solid var(--contact-input-border)',
                      color: 'var(--contact-input-text)'
                    }}
                    placeholder="Tell me about your project or just say hello!"
                    maxLength={1000}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-500 mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full px-6 py-4 font-bold text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: 'var(--contact-btn-bg)',
                    color: 'var(--contact-btn-text)',
                    border: '2px solid var(--contact-btn-bg)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.target.style.backgroundColor = 'var(--contact-btn-hover-bg)'
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 8px 20px rgba(0, 123, 255, 0.3)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) {
                      e.target.style.backgroundColor = 'var(--contact-btn-bg)'
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = 'none'
                    }
                  }}>
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" 
                           style={{ borderColor: 'var(--contact-btn-text)' }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              {status === 'SUCCESS' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    color: '#22c55e'
                  }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {status === 'MAILTO_SUCCESS' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#3b82f6'
                  }}
                >
                  📧 Email client opened! Please send your message from there.
                </motion.div>
              )}
              
              {status === 'ERROR' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#ef4444'
                  }}
                >
                  ⚠️ Failed to send message. Please try again or contact me directly at arultharisan01@gmail.com
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
