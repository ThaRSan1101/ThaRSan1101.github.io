import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaFigma, FaLinux,
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaCode 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiVite, SiMysql, SiCanva, SiTypescript,
  SiNextdotjs, SiMongodb, SiExpress, SiPostgresql
} from 'react-icons/si'

const skillCategories = [
  {
    name: 'PROGRAMMING LANGUAGES',
    skills: [
      { name: 'C', level: 85, icon: FaCode },
      { name: 'Java', level: 80, icon: FaJava },
      { name: 'JavaScript', level: 85, icon: FaJs },
      { name: 'PHP', level: 70, icon: FaPhp },
      { name: 'HTML/CSS', level: 90, icon: FaHtml5 }
    ]
  },
  {
    name: 'FRAMEWORKS & TOOLS',
    skills: [
      { name: 'React', level: 80, icon: FaReact },
      { name: 'Node.js', level: 78, icon: FaNodeJs },
      { name: 'Vite', level: 85, icon: SiVite },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss },
      { name: 'MySQL', level: 80, icon: SiMysql },
      { name: 'Git & GitHub', level: 85, icon: FaGitAlt },
      { name: 'Linux', level: 70, icon: FaLinux }
    ]
  },
  {
    name: 'OTHER TOOLS',
    skills: [
      { name: 'Figma', level: 80, icon: FaFigma },
      { name: 'Canva', level: 85, icon: FaCode },
      { name: 'VS Code', level: 90, icon: FaCode },
      { name: 'Postman', level: 75, icon: FaCode }
    ]
  },
  {
    name: 'SOFT SKILLS',
    skills: [
      { name: 'Problem-Solving', level: 90, icon: FaCode },
      { name: 'Teamwork', level: 85, icon: FaCode },
      { name: 'Adaptability', level: 88, icon: FaCode },
      { name: 'Leadership', level: 75, icon: FaCode },
      { name: 'Communication', level: 85, icon: FaCode },
      { name: 'Creativity', level: 82, icon: FaCode }
    ]
  }
]

function ProgressBar({ skill, delay }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          setTimeout(() => {
            setProgress(skill.level)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => observer.disconnect()
  }, [skill.level, delay, isVisible])

  return (
    <motion.div
      ref={progressRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{backgroundColor: 'rgba(122, 122, 122, 0.2)'}}>
            <skill.icon style={{color: '#7a7a7a'}} className="text-lg" />
          </div>
          <span className="font-medium" style={{color: '#e8e8e8'}}>{skill.name}</span>
        </div>
        <span style={{color: '#b8b8b8'}} className="font-semibold">{skill.level}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full h-2 rounded-full overflow-hidden" style={{backgroundColor: '#2a2a2a'}}>
          <motion.div
            className="h-full rounded-full relative"
            style={{backgroundColor: '#7a7a7a'}}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-50 blur-sm" style={{backgroundColor: '#7a7a7a'}}></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('PROGRAMMING LANGUAGES')

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{backgroundColor: '#151515'}}>
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M20 0v40M0 20h40" stroke="#2a2a2a" strokeWidth="1"/>
              <circle cx="20" cy="20" r="2" fill="#333333"/>
              <circle cx="0" cy="0" r="1" fill="#2a2a2a"/>
              <circle cx="40" cy="40" r="1" fill="#2a2a2a"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Tech Icons Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl" style={{color: '#333333'}}>⚛</div>
        <div className="absolute top-40 right-32 text-5xl" style={{color: '#333333'}}>⚙</div>
        <div className="absolute bottom-32 left-32 text-7xl" style={{color: '#333333'}}>💻</div>
        <div className="absolute bottom-20 right-20 text-5xl" style={{color: '#333333'}}>🔧</div>
        <div className="absolute top-1/2 left-1/4 text-4xl" style={{color: '#333333'}}>📱</div>
        <div className="absolute top-1/3 right-1/4 text-6xl" style={{color: '#333333'}}>🖥</div>
      </div>
      
      {/* Connection Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#444444" strokeWidth="1"/>
          <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="#444444" strokeWidth="1"/>
          <line x1="20%" y1="80%" x2="60%" y2="90%" stroke="#444444" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4" style={{color: '#e8e8e8'}}>
            My Skills
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{color: '#b8b8b8'}}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'shadow-lg'
                  : 'hover:bg-opacity-50'
              }`}
              style={{
                backgroundColor: activeCategory === category.name ? '#7a7a7a' : 'rgba(42, 42, 42, 0.6)',
                color: activeCategory === category.name ? '#0a0a0a' : '#b8b8b8',
                border: '1px solid #444444'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category.name) {
                  e.target.style.backgroundColor = 'rgba(122, 122, 122, 0.2)'
                  e.target.style.color = '#d8d8d8'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.name) {
                  e.target.style.backgroundColor = 'rgba(42, 42, 42, 0.6)'
                  e.target.style.color = '#b8b8b8'
                }
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
              className={`${activeCategory === category.name ? 'block' : 'hidden'}`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <ProgressBar 
                    key={`${category.name}-${skill.name}`} 
                    skill={skill} 
                    delay={index * 0.1} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-8" style={{color: '#e8e8e8'}}>Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Three.js', 'Framer Motion', 'Bootstrap', 'SASS', 'REST APIs', 
              'GraphQL', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Webpack',
              'Jest', 'Cypress', 'Postman', 'Photoshop', 'Blender'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-lg transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'rgba(42, 42, 42, 0.6)',
                  color: '#b8b8b8',
                  border: '1px solid #555555'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#777777'
                  e.target.style.color = '#d8d8d8'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#555555'
                  e.target.style.color = '#b8b8b8'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
