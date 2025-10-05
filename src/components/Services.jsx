import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaKeyboard, 
  FaFileAlt, 
  FaCode, 
  FaVideo, 
  FaWrench,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa'

const services = [
  {
    title: 'Typing & Data Entry',
    icon: FaKeyboard,
    description: 'Fast and accurate typing services for documents, forms, and data processing tasks.',
    category: 'Administrative'
  },
  {
    title: 'Presentation & Document Creation',
    icon: FaFileAlt,
    description: 'Professional presentations, reports, and document formatting for business needs.',
    category: 'Design'
  },
  {
    title: 'Beginner Web Project Help',
    icon: FaCode,
    description: 'I help students build and debug beginner coding projects in Java, HTML, React.',
    category: 'Development'
  },
  {
    title: 'Video Editing & Content Creation',
    icon: FaVideo,
    description: 'Creative video editing, content creation, and multimedia production services.',
    category: 'Creative'
  },
  {
    title: 'Web & Tech Support',
    icon: FaWrench,
    description: 'Technical support for web development issues and troubleshooting.',
    category: 'Support'
  },
  {
    title: 'Team Collaboration',
    icon: FaUsers,
    description: 'Experience working in teams and supporting collaborative development projects.',
    category: 'Leadership'
  }
]

export default function Services(){
  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--services-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--services-pattern', isDark ? 'rgba(42, 42, 42, 0.4)' : 'rgba(108, 117, 125, 0.4)')
      document.documentElement.style.setProperty('--services-dots', isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)')
      document.documentElement.style.setProperty('--services-icons', isDark ? '#333333' : '#6c757d')
      document.documentElement.style.setProperty('--services-heading', isDark ? 'var(--services-heading)' : '#212529')
      document.documentElement.style.setProperty('--services-text', isDark ? 'var(--services-text)' : '#495057')
      document.documentElement.style.setProperty('--services-card-bg', isDark ? 'var(--services-card-bg)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--services-card-border', isDark ? 'var(--services-card-border)' : '#dee2e6')
      document.documentElement.style.setProperty('--services-card-hover-bg', isDark ? 'var(--services-card-hover-bg)' : 'rgba(233, 236, 239, 0.8)')
      document.documentElement.style.setProperty('--services-card-hover-border', isDark ? 'var(--services-card-hover-border)' : '#6c757d')
      document.documentElement.style.setProperty('--services-icon-bg', isDark ? 'var(--services-icon-bg)' : 'rgba(108, 117, 125, 0.2)')
      document.documentElement.style.setProperty('--services-icon-color', isDark ? 'var(--services-icon-color)' : '#6c757d')
      document.documentElement.style.setProperty('--services-cta-bg', isDark ? 'var(--services-card-bg)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--services-cta-border', isDark ? 'var(--services-card-border)' : '#dee2e6')
      document.documentElement.style.setProperty('--services-btn-bg', isDark ? 'var(--services-icon-color)' : '#007bff')
      document.documentElement.style.setProperty('--services-btn-text', isDark ? '#202020' : '#ffffff')
      document.documentElement.style.setProperty('--services-btn-hover-bg', isDark ? '#ccc' : '#0056b3')
      document.documentElement.style.setProperty('--services-btn-hover-text', isDark ? '#000' : '#ffffff')
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
    <section id="services" className="py-20 relative overflow-hidden" style={{backgroundColor: 'var(--services-bg)'}}>
      {/* Clean Services Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, rgba(42, 42, 42, 0.3) 100px, rgba(42, 42, 42, 0.3) 101px, transparent 102px),
            linear-gradient(transparent 99px, rgba(42, 42, 42, 0.3) 100px, rgba(42, 42, 42, 0.3) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Service Cloud Dots Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '70px 70px'
        }}></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{color: 'var(--services-heading)'}}>Services / What I Offer</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--services-text)'}}>
            Professional services I provide for clients and collaborators
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl transition-all duration-300 group"
              style={{backgroundColor: 'var(--services-card-bg)', border: '1px solid #666666'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--services-card-hover-bg)'
                e.currentTarget.style.borderColor = 'var(--services-card-hover-border)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--services-card-bg)'
                e.currentTarget.style.borderColor = 'var(--services-card-border)'
              }}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg transition-colors" style={{backgroundColor: 'var(--services-icon-bg)'}}>
                    <service.icon style={{color: 'var(--services-icon-color)'}} className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold transition-colors" style={{color: 'var(--services-heading)'}}>
                      {service.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full" style={{color: '#888', backgroundColor: 'rgba(136, 136, 136, 0.2)'}}>
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{color: 'var(--services-text)'}}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-8 rounded-2xl max-w-2xl mx-auto" style={{backgroundColor: 'var(--services-card-bg)', border: '1px solid #666666'}}>
            <FaLightbulb style={{color: 'var(--services-icon-color)'}} className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3" style={{color: 'var(--services-heading)'}}>Have a Project in Mind?</h3>
            <p className="leading-relaxed mb-6" style={{color: 'var(--services-text)'}}>
              Whether you need help with a coding project, document creation, or any other service, 
              I'm here to help bring your ideas to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              style={{backgroundColor: 'var(--services-icon-color)', color: '#202020'}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ccc'
                e.target.style.color = '#000'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--services-icon-color)'
                e.target.style.color = '#202020'
              }}
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
