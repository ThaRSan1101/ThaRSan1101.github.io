import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaUsers, FaCode } from 'react-icons/fa'
import BackgroundElements from './BackgroundElements'

const experiences = [
  // Currently building experience through projects and learning
]

export default function Experience() {
  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--experience-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--experience-pattern', isDark ? 'rgba(42, 42, 42, 0.4)' : 'rgba(108, 117, 125, 0.4)')
      document.documentElement.style.setProperty('--experience-dots', isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)')
      document.documentElement.style.setProperty('--experience-icons', isDark ? '#333333' : '#6c757d')
      document.documentElement.style.setProperty('--experience-heading', isDark ? '#e0e0e0' : '#212529')
      document.documentElement.style.setProperty('--experience-text', isDark ? '#b0b0b0' : '#495057')
      document.documentElement.style.setProperty('--experience-card-bg', isDark ? 'rgba(42, 42, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--experience-card-border', isDark ? '#555555' : '#dee2e6')
      document.documentElement.style.setProperty('--experience-card-hover-bg', isDark ? 'rgba(60, 60, 60, 0.6)' : 'rgba(233, 236, 239, 0.8)')
      document.documentElement.style.setProperty('--experience-card-hover-border', isDark ? '#777777' : '#6c757d')
      document.documentElement.style.setProperty('--experience-timeline-bg', isDark ? '#555555' : '#6c757d')
      document.documentElement.style.setProperty('--experience-timeline-border', isDark ? '#777777' : '#adb5bd')
      document.documentElement.style.setProperty('--experience-type-bg', isDark ? 'rgba(170, 170, 170, 0.2)' : 'rgba(108, 117, 125, 0.2)')
      document.documentElement.style.setProperty('--experience-type-text', isDark ? '#aaa' : '#6c757d')
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
    <section id="experience" className="py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="experience" density="medium" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--experience-pattern) 100px, var(--experience-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--experience-pattern) 100px, var(--experience-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--experience-dots) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Minimal Tech Symbols */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute bottom-20 right-20 text-sm" style={{color: 'var(--experience-symbols)'}}>📈</div>
        <div className="absolute bottom-1/3 left-1/4 text-sm" style={{color: 'var(--experience-symbols)'}}>💼</div>
      </div>
      
      {/* Career/Professional Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-lg" style={{color: 'var(--experience-icons)'}}>🏢</div>
        <div className="absolute bottom-32 left-32 text-xl" style={{color: 'var(--experience-icons)'}}>📈</div>
        <div className="absolute bottom-20 right-20 text-lg" style={{color: 'var(--experience-icons)'}}>🎯</div>
      </div>
      
      {/* Enhanced Timeline Lines */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute left-1/2 top-0 bottom-0 w-1" style={{backgroundColor: 'var(--experience-timeline-bg)', transform: 'translateX(-50%)'}}></div>
        <div className="absolute left-1/2 top-20 w-4 h-4 rounded-full border-2" style={{backgroundColor: 'var(--experience-timeline-bg)', borderColor: 'var(--experience-timeline-border)', transform: 'translateX(-50%)'}}></div>
        <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2" style={{backgroundColor: 'var(--experience-timeline-bg)', borderColor: 'var(--experience-timeline-border)', transform: 'translateX(-50%)'}}></div>
        <div className="absolute left-1/2 bottom-20 w-4 h-4 rounded-full border-2" style={{backgroundColor: 'var(--experience-timeline-bg)', borderColor: 'var(--experience-timeline-border)', transform: 'translateX(-50%)'}}></div>
        {/* Additional timeline branches */}
        <div className="absolute left-1/2 top-32 w-16 h-0.5" style={{backgroundColor: 'var(--experience-timeline-bg)', transform: 'translateX(-50%)'}}></div>
        <div className="absolute left-1/2 bottom-32 w-16 h-0.5" style={{backgroundColor: 'var(--experience-timeline-bg)', transform: 'translateX(-50%)'}}></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{color: 'var(--experience-heading)'}}>Experience</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--experience-text)'}}>
            My professional journey in software development and web technologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Currently seeking opportunities message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-8 rounded-2xl max-w-3xl mx-auto" 
                 style={{
                   backgroundColor: 'var(--experience-card-bg)', 
                   border: '1px solid var(--experience-card-border)',
                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                 }}>
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full" style={{backgroundColor: 'var(--experience-type-bg)'}}>
                  <FaCode style={{color: 'var(--experience-icons)'}} className="text-3xl" />
                </div>
              </div>
              
              <p className="text-lg leading-relaxed" style={{color: 'var(--experience-text)'}}>
                <span className="font-bold text-xl" style={{color: 'var(--experience-heading)'}}>Currently seeking opportunities</span> 
                <span className="block mt-3">
                  to apply my expertise as a Software Developer, contribute effectively to projects, 
                  and enhance my full-stack development skills.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional spacing */}
        <div className="mt-12"></div>
      </div>
    </section>
  )
}
