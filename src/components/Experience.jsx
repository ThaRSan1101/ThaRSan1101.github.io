import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaUsers, FaCode } from 'react-icons/fa'
import BackgroundElements from './BackgroundElements'

const experiences = [
  {
    company: 'Bank of Ceylon (BOC)',
    position: 'School Leaver',
    location: 'Adampan Branch',
    period: '2023',
    description: 'Assisted staff in data entry, documentation, and customer communication. Gained valuable experience in professional work environment and customer service.',
    icon: FaBuilding,
    type: 'Internship'
  },
  {
    company: 'HNB Assurance',
    position: 'Agent',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Gained real-world experience in communication, sales, and customer service. Developed strong interpersonal skills and business acumen.',
    icon: FaUsers,
    type: 'Part-time'
  },
  {
    company: 'Freelance Projects',
    position: 'Full-Stack Developer',
    location: 'Remote',
    period: '2021 - Present',
    description: 'Worked on various web development projects including Student Tracker System and Waste Pickup Request System. Developed skills in team collaboration and project management.',
    icon: FaCode,
    type: 'Freelance'
  }
]

export default function Experience() {
  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--experience-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--experience-pattern', isDark ? 'rgba(42, 42, 42, 0.4)' : 'rgba(108, 117, 125, 0.4)')
      document.documentElement.style.setProperty('--experience-dots', isDark ? 'var(--experience-dots)' : 'rgba(0,0,0,0.07)')
      document.documentElement.style.setProperty('--experience-icons', isDark ? 'var(--experience-icons)' : '#6c757d')
      document.documentElement.style.setProperty('--experience-heading', isDark ? 'var(--experience-heading)' : '#212529')
      document.documentElement.style.setProperty('--experience-text', isDark ? 'var(--experience-text)' : '#495057')
      document.documentElement.style.setProperty('--experience-card-bg', isDark ? 'var(--experience-card-bg)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--experience-card-border', isDark ? 'var(--experience-timeline-border)' : '#dee2e6')
      document.documentElement.style.setProperty('--experience-card-hover-bg', isDark ? 'var(--experience-card-hover-bg)' : 'rgba(233, 236, 239, 0.8)')
      document.documentElement.style.setProperty('--experience-card-hover-border', isDark ? 'var(--experience-card-hover-border)' : '#6c757d')
      document.documentElement.style.setProperty('--experience-timeline-bg', isDark ? 'var(--experience-timeline-bg)' : '#6c757d')
      document.documentElement.style.setProperty('--experience-timeline-border', isDark ? 'var(--experience-timeline-border)' : '#adb5bd')
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
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 text-2xl" style={{color: 'var(--experience-symbols)'}}>🏢</div>
        <div className="absolute bottom-20 right-20 text-2xl" style={{color: 'var(--experience-symbols)'}}>📈</div>
        <div className="absolute top-1/2 right-1/4 text-2xl" style={{color: 'var(--experience-symbols)'}}>⚡</div>
        <div className="absolute bottom-1/3 left-1/4 text-2xl" style={{color: 'var(--experience-symbols)'}}>💼</div>
      </div>
      
      {/* Career/Professional Icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-4xl" style={{color: 'var(--experience-icons)'}}>🏢</div>
        <div className="absolute top-40 right-32 text-3xl" style={{color: 'var(--experience-icons)'}}>💼</div>
        <div className="absolute bottom-32 left-32 text-5xl" style={{color: 'var(--experience-icons)'}}>📈</div>
        <div className="absolute bottom-20 right-20 text-3xl" style={{color: 'var(--experience-icons)'}}>🎯</div>
        <div className="absolute top-1/2 left-1/4 text-2xl" style={{color: 'var(--experience-icons)'}}>👔</div>
        <div className="absolute top-1/3 right-1/4 text-4xl" style={{color: 'var(--experience-icons)'}}>🤝</div>
        <div className="absolute top-68 right-68 text-2xl" style={{color: 'var(--experience-icons)'}}>⭐</div>
        <div className="absolute bottom-68 left-68 text-3xl" style={{color: 'var(--experience-icons)'}}>🚀</div>
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
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{color: '#d0d0d0'}}>Experience</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#a0a0a0'}}>
            My professional journey and the experiences that shaped my skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl transition-all duration-300"
                style={{backgroundColor: 'rgba(60, 60, 60, 0.6)', border: '1px solid #777777'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(85, 85, 85, 0.6)'
                  e.currentTarget.style.borderColor = '#999999'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.6)'
                  e.currentTarget.style.borderColor = '#777777'
                }}>
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl flex-shrink-0" style={{backgroundColor: 'rgba(187, 187, 187, 0.2)'}}>
                    <exp.icon style={{color: '#bbb'}} className="text-2xl" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold" style={{color: '#d0d0d0'}}>{exp.position}</h3>
                        <p className="font-semibold" style={{color: '#bbb'}}>{exp.company}</p>
                        <p className="text-sm" style={{color: '#a0a0a0'}}>{exp.location}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <span className="text-sm" style={{color: '#888'}}>{exp.period}</span>
                        <span className="px-3 py-1 text-xs rounded-full border mt-1"
                              style={{
                                backgroundColor: 'rgba(187, 187, 187, 0.1)',
                                color: '#bbb',
                                borderColor: 'rgba(187, 187, 187, 0.3)'
                              }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed" style={{color: '#a0a0a0'}}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-6 rounded-xl max-w-2xl mx-auto" style={{backgroundColor: 'rgba(60, 60, 60, 0.6)', border: '1px solid #777777'}}>
            <p className="leading-relaxed" style={{color: '#a0a0a0'}}>
              <span className="font-semibold" style={{color: '#bbb'}}>Currently seeking opportunities</span> to apply my expertise as a Software Developer, 
              contribute effectively, and further enhance my skills in a challenging environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
