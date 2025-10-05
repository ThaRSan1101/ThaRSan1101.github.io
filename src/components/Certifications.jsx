import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa'
import BackgroundElements from './BackgroundElements'

const certifications = [
  {
    title: 'WSO2 Linux and DevOps Training',
    issuer: 'WSO2',
    score: '954 points',
    year: '2024',
    description: 'Comprehensive training in Linux administration and DevOps practices with WSO2 technologies.',
    icon: FaAward,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'IBM Machine Learning Certificate',
    issuer: 'IBM',
    score: 'Completed',
    year: '2023',
    description: 'Machine learning fundamentals and practical applications using IBM Watson and cloud services.',
    icon: FaCertificate,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Google Digital Marketing Certificate',
    issuer: 'Google',
    score: 'Completed',
    year: '2023',
    description: 'Digital marketing strategies, analytics, and online advertising best practices.',
    icon: FaGraduationCap,
    color: 'from-green-400 to-green-600'
  }
]

export default function Certifications() {
  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--certifications-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--certifications-pattern', isDark ? 'var(--certifications-pattern)' : 'rgba(108, 117, 125, 0.4)')
      document.documentElement.style.setProperty('--certifications-dots', isDark ? 'var(--certifications-dots)' : 'rgba(0,0,0,0.07)')
      document.documentElement.style.setProperty('--certifications-icons', isDark ? 'var(--certifications-icons)' : '#6c757d')
      document.documentElement.style.setProperty('--certifications-heading', isDark ? 'var(--certifications-heading)' : '#212529')
      document.documentElement.style.setProperty('--certifications-text', isDark ? 'var(--certifications-text)' : '#495057')
      document.documentElement.style.setProperty('--certifications-card-bg', isDark ? 'var(--certifications-card-bg)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--certifications-card-border', isDark ? 'var(--certifications-card-border)' : '#dee2e6')
      document.documentElement.style.setProperty('--certifications-card-hover-bg', isDark ? 'var(--certifications-card-hover-bg)' : 'rgba(233, 236, 239, 0.8)')
      document.documentElement.style.setProperty('--certifications-card-hover-border', isDark ? 'var(--certifications-card-hover-border)' : '#6c757d')
      document.documentElement.style.setProperty('--certifications-badge-bg', isDark ? 'var(--certifications-badge-bg)' : 'rgba(108, 117, 125, 0.2)')
      document.documentElement.style.setProperty('--certifications-badge-text', isDark ? 'var(--certifications-badge-text)' : '#6c757d')
      document.documentElement.style.setProperty('--certifications-link-color', isDark ? 'var(--certifications-badge-text)' : '#007bff')
      document.documentElement.style.setProperty('--certifications-link-hover', isDark ? '#ccc' : '#0056b3')
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
    <section id="certifications" className="py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="certifications" density="medium" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--about-pattern) 100px, var(--about-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--about-pattern) 100px, var(--about-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--about-pattern) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Minimal Tech Symbols */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 text-2xl" style={{color: 'var(--about-code-text)'}}>🏆</div>
        <div className="absolute bottom-20 right-20 text-2xl" style={{color: 'var(--about-code-text)'}}>📜</div>
        <div className="absolute top-1/2 right-1/4 text-2xl" style={{color: 'var(--about-code-text)'}}>🎓</div>
        <div className="absolute bottom-1/3 left-1/4 text-2xl" style={{color: 'var(--about-code-text)'}}>⭐</div>
      </div>
      
      {/* Achievement Medal Icons */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute top-20 left-10 text-5xl">🏆</div>
        <div className="absolute top-32 right-20 text-3xl">🎖️</div>
        <div className="absolute bottom-40 left-20 text-4xl">🥇</div>
        <div className="absolute bottom-20 right-10 text-3xl">📜</div>
        <div className="absolute top-60 left-1/3 text-2xl">🎓</div>
        <div className="absolute bottom-60 right-1/3 text-2xl">⭐</div>
        <div className="absolute top-72 right-72 text-3xl">🌟</div>
        <div className="absolute bottom-72 left-72 text-2xl">💎</div>
      </div>
      
      {/* Achievement Badge Patterns */}
      <div className="absolute inset-0 opacity-15">
        <div 
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(187, 187, 187, 0.1) 2px, transparent 2px),
                              radial-gradient(circle at 75px 75px, rgba(187, 187, 187, 0.08) 2px, transparent 2px),
                              radial-gradient(circle at 125px 40px, rgba(187, 187, 187, 0.06) 1.5px, transparent 1.5px)`,
            backgroundSize: '150px 150px',
            backgroundPosition: '0 0, 50px 50px, 100px 20px'
          }}
          className="w-full h-full"
        ></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: '#c0c0c0' }}>Certifications</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#909090' }}>
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl transition-all duration-300 group"
              style={{ 
                backgroundColor: 'var(--certifications-icons)',
                border: '1px solid #404040',
                backdropFilter: 'blur(10px)'
              }}>
              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold group-hover:scale-105 transition-transform" style={{ color: '#c0c0c0' }}>
                      {cert.title}
                    </h3>
                    <p className="font-semibold" style={{ color: '#a0a0a0' }}>{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#808080' }}>{cert.year}</span>
                    <span className="px-3 py-1 text-xs rounded-full" 
                          style={{ 
                            backgroundColor: '#404040',
                            color: '#c0c0c0',
                            border: '1px solid #505050'
                          }}>
                      {cert.score}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: '#909090' }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-6 rounded-xl max-w-3xl mx-auto"
               style={{ 
                 backgroundColor: 'var(--certifications-icons)',
                 border: '1px solid #404040',
                 backdropFilter: 'blur(10px)'
               }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#c0c0c0' }}>Continuous Learning</h3>
            <p className="leading-relaxed" style={{ color: '#909090' }}>
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and my passion 
              for expanding my skill set in various domains of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
