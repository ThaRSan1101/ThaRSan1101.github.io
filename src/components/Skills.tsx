import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaFigma, FaLinux,
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaCode 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiVite, SiMysql, SiCanva, SiTypescript,
  SiNextdotjs, SiMongodb, SiExpress, SiPostgresql
} from 'react-icons/si'
import BackgroundElements from './BackgroundElements'

const skillCategories = [
  {
    name: 'PROGRAMMING LANGUAGES',
    skills: [
      { name: 'C', icon: FaCode },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'PHP', icon: FaPhp },
      { name: 'SQL', icon: SiMysql }
    ]
  },
  {
    name: 'FRAMEWORKS',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs }
    ]
  },
  {
    name: 'TOOLS',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
      { name: 'Figma', icon: FaFigma }
    ]
  }
]

function SkillItem({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      {...({ className: "p-4 sm:p-6 rounded-xl" } as any)}
      style={{
        backgroundColor: 'var(--skills-item-bg)',
        border: '1px solid var(--skills-item-border)'
      }}
    >
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        {/* Icon container */}
        <div 
          className="p-3 sm:p-4 rounded-lg"
          style={{
            backgroundColor: 'var(--skills-icon-bg)',
            border: '1px solid var(--skills-icon-border)'
          }}
        >
          <skill.icon className="text-xl sm:text-2xl" style={{color: 'var(--skills-icon-color)'}} />
        </div>
        
        {/* Skill name */}
        <h3 className="font-medium text-base sm:text-lg" style={{color: 'var(--skills-name-color)'}}>
          {skill.name}
        </h3>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('PROGRAMMING LANGUAGES')

  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--skills-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--skills-pattern', isDark ? 'rgba(42, 42, 42, 0.2)' : 'rgba(108, 117, 125, 0.2)')
      document.documentElement.style.setProperty('--skills-dots', isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)')
      document.documentElement.style.setProperty('--skills-symbols', isDark ? '#333333' : '#6c757d')
      document.documentElement.style.setProperty('--skills-heading', isDark ? '#f5f5f5' : '#212529')
      document.documentElement.style.setProperty('--skills-text', isDark ? '#c0c0c0' : '#495057')
      document.documentElement.style.setProperty('--skills-familiar-heading', isDark ? '#f5f5f5' : '#212529')
      document.documentElement.style.setProperty('--skills-category-active-bg', isDark ? '#ffffff' : '#212529')
      document.documentElement.style.setProperty('--skills-category-active-text', isDark ? '#0f0f0f' : '#ffffff')
      document.documentElement.style.setProperty('--skills-category-bg', isDark ? 'rgba(26, 26, 26, 0.8)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--skills-category-text', isDark ? '#c0c0c0' : '#495057')
      document.documentElement.style.setProperty('--skills-category-border', isDark ? '#333333' : '#dee2e6')
      document.documentElement.style.setProperty('--skills-item-bg', isDark ? 'rgba(26, 26, 26, 0.8)' : 'rgba(255, 255, 255, 0.9)')
      document.documentElement.style.setProperty('--skills-item-text', isDark ? '#c0c0c0' : '#495057')
      document.documentElement.style.setProperty('--skills-item-border', isDark ? '#333333' : '#dee2e6')
      document.documentElement.style.setProperty('--skills-icon-color', isDark ? '#888888' : '#212529')
      document.documentElement.style.setProperty('--skills-icon-bg', isDark ? 'rgba(42, 42, 42, 0.6)' : 'rgba(240, 240, 240, 0.8)')
      document.documentElement.style.setProperty('--skills-icon-border', isDark ? '#444444' : '#dee2e6')
      document.documentElement.style.setProperty('--skills-name-color', isDark ? '#f5f5f5' : '#212529')
    }
    
    // Apply theme on initial load
    applyTheme()
    
    // Listen for theme changes from the same tab (custom event)
    const handleThemeChange = () => applyTheme()
    window.addEventListener('themeChange', handleThemeChange)
    
    // Listen for theme changes from other tabs (storage event)
    const handleStorageChange = () => applyTheme()
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="skills" density="medium" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--skills-pattern) 100px, var(--skills-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--skills-pattern) 100px, var(--skills-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--skills-dots) 1px, transparent 1px)',
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
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4" style={{color: 'var(--skills-heading)'}}>
            My Skills
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{color: 'var(--skills-text)'}}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Simple Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          {...({ className: "flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4" } as any)}
        >
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold`}
              style={{
                backgroundColor: activeCategory === category.name ? 'var(--skills-category-active-bg)' : 'var(--skills-category-bg)',
                color: activeCategory === category.name ? 'var(--skills-category-active-text)' : 'var(--skills-category-text)',
                border: '1px solid var(--skills-category-border)'
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: activeCategory === category.name ? 1 : 0,
                height: activeCategory === category.name ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
              {...({ className: `${activeCategory === category.name ? 'block' : 'hidden'}` } as any)}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <SkillItem 
                    key={`${category.name}-${skill.name}`} 
                    skill={skill} 
                    delay={index * 0.1} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also Familiar With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          {...({ className: "mt-12 sm:mt-16" } as any)}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center" style={{color: 'var(--skills-familiar-heading)'}}>
            Also Familiar With
          </h3>
          
          {/* Front-End / UI Tools */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center" style={{color: 'var(--skills-familiar-heading)'}}>
              Front-End / UI Tools
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {[
                'Bootstrap', 'Tailwind CSS'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  {...({ className: "px-3 sm:px-4 py-1 sm:py-2 rounded-lg cursor-default text-sm" } as any)}
                  style={{
                    backgroundColor: 'var(--skills-item-bg)',
                    color: 'var(--skills-item-text)',
                    border: '1px solid var(--skills-item-border)'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* APIs / Data Handling */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center" style={{color: 'var(--skills-familiar-heading)'}}>
              APIs / Data Handling
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {[
                'REST APIs', 'Postman'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  {...({ className: "px-3 sm:px-4 py-1 sm:py-2 rounded-lg cursor-default text-sm" } as any)}
                  style={{
                    backgroundColor: 'var(--skills-item-bg)',
                    color: 'var(--skills-item-text)',
                    border: '1px solid var(--skills-item-border)'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* DevOps / Deployment / Tools */}
          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center" style={{color: 'var(--skills-familiar-heading)'}}>
              DevOps / Deployment / Tools
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {[
                'Docker', 'AWS', 'Vercel'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  {...({ className: "px-3 sm:px-4 py-1 sm:py-2 rounded-lg cursor-default text-sm" } as any)}
                  style={{
                    backgroundColor: 'var(--skills-item-bg)',
                    color: 'var(--skills-item-text)',
                    border: '1px solid var(--skills-item-border)'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
