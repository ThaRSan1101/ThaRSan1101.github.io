import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaDatabase,
  FaReact,
  FaServer,
  FaPalette,
  FaLightbulb
} from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql, SiTailwindcss } from 'react-icons/si'
import BackgroundElements from './BackgroundElements'

const services = [
  {
    title: 'Web Design & Frontend Development',
    icon: FaCode,
    description: 'Building responsive, modern websites and interfaces using HTML, CSS, JavaScript, React, and Tailwind. Creating smooth, interactive, and user-friendly experiences.',
    category: 'Development',
    techIcons: [SiHtml5, SiCss3, SiJavascript, FaReact, SiTailwindcss]
  },
  {
    title: 'Backend & Full-Stack Development',
    icon: FaDatabase,
    description: 'Developing dynamic websites and applications using PHP with MySQL databases. Connecting frontend and backend to deliver full-stack solutions.',
    category: 'Server & Database',
    techIcons: [SiPhp, SiMysql, FaServer, FaDatabase]
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="services" density="medium" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--services-pattern) 100px, var(--services-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--services-pattern) 100px, var(--services-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--services-dots) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          {...({ className: "text-center mb-12 sm:mb-16" } as any)}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{color: 'var(--services-heading)'}}>Services / What I Offer</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{color: 'var(--services-text)'}}>
            Delivering creative and reliable tech solutions for any project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              {...({ className: "p-6 sm:p-8 rounded-xl transition-all duration-300 group" } as any)}
              style={{backgroundColor: 'var(--services-card-bg)', border: '1px solid #666666'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--services-card-hover-bg)'
                e.currentTarget.style.borderColor = 'var(--services-card-hover-border)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--services-card-bg)'
                e.currentTarget.style.borderColor = 'var(--services-card-border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="p-3 sm:p-4 rounded-lg transition-colors flex-shrink-0" style={{backgroundColor: 'var(--services-icon-bg)'}}>
                    <service.icon style={{color: 'var(--services-icon-color)'}} className="text-xl sm:text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold transition-colors mb-2" style={{color: 'var(--services-heading)'}}>
                      {service.title}
                    </h3>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium" style={{color: '#888', backgroundColor: 'rgba(136, 136, 136, 0.2)'}}>
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base leading-relaxed" style={{color: 'var(--services-text)'}}>
                  {service.description}
                </p>
                
                {/* Technology Icons */}
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                  {service.techIcons.map((TechIcon, i) => (
                    <div key={i} className="p-2 rounded-lg transition-colors" style={{backgroundColor: 'rgba(136, 136, 136, 0.1)'}}>
                      <TechIcon style={{color: 'var(--services-icon-color)'}} className="text-base sm:text-lg" />
                    </div>
                  ))}
                </div>
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
          {...({ className: "text-center mt-8 sm:mt-12" } as any)}
        >
          <div className="p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto" style={{backgroundColor: 'var(--services-card-bg)', border: '1px solid #666666'}}>
            <FaLightbulb style={{color: 'var(--services-icon-color)'}} className="text-3xl sm:text-4xl mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{color: 'var(--services-heading)'}}>Have a Project in Mind?</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{color: 'var(--services-text)'}}>
              Whether you need help with a coding project or any other service, 
              I'm here to help bring your ideas to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--primary-dark)',
                border: '2px solid var(--text-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)'
                e.currentTarget.style.color = 'var(--primary-dark)'
                e.currentTarget.style.borderColor = 'var(--text-primary)'
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

