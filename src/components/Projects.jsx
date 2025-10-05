import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: 'Student Tracker System',
    shortDesc: 'Comprehensive student management system built with Java and MySQL.',
    fullDesc: 'Designed and developed a comprehensive student tracking system for academic institutions. Features include student registration, attendance monitoring, grade management, and detailed reporting capabilities.',
    tags: ['Java', 'MySQL', 'Academic Project', 'Desktop App'],
    techIcons: [FaCode, SiMysql],
    features: [
      'Implemented student registration and profile management system',
      'Developed attendance tracking with automated reports',
      'Created grade management with GPA calculation features',
      'Built comprehensive dashboard for administrators'
    ],
    repo: 'https://github.com/tharsan/student-tracker',
    demo: '#',
    image: '/api/placeholder/600/400',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Waste Pickup Request System',
    shortDesc: 'Full-stack web application for waste management services with real-time tracking.',
    fullDesc: 'Developed a comprehensive waste pickup management system enabling users to request waste collection services. Features real-time tracking, admin dashboard, and automated notifications.',
    tags: ['React', 'Node.js', 'MongoDB', 'Full Stack'],
    techIcons: [FaReact, FaNodeJs, FaDatabase],
    features: [
      'Built responsive React frontend with modern UI components',
      'Developed RESTful API with Node.js and Express',
      'Implemented real-time request tracking and notifications',
      'Created admin dashboard for service management'
    ],
    repo: 'https://github.com/tharsan/waste-pickup-system',
    demo: '#',
    image: '/api/placeholder/600/400',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Animated Portfolio Website',
    shortDesc: 'Interactive birthday celebration website with CSS animations and JavaScript.',
    fullDesc: 'Created an engaging animated website featuring smooth CSS transitions, JavaScript interactions, and responsive design. Showcases advanced frontend development skills.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Animation'],
    techIcons: [SiHtml5, SiCss3, SiJavascript],
    features: [
      'Implemented complex CSS animations and transitions',
      'Created interactive JavaScript components',
      'Designed responsive layout for all devices',
      'Optimized performance for smooth animations'
    ],
    repo: 'https://github.com/tharsan/animated-website',
    demo: '#',
    image: '/api/placeholder/600/400',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Interactive UX Survey Form',
    shortDesc: 'Modern React-based survey form with advanced UX features and data validation.',
    fullDesc: 'Built an intuitive survey form application using React with focus on user experience. Features multi-step forms, real-time validation, and data visualization.',
    tags: ['React', 'UX Design', 'Form Validation', 'Data Visualization'],
    techIcons: [FaReact, SiTailwindcss],
    features: [
      'Designed multi-step form with smooth transitions',
      'Implemented real-time validation and error handling',
      'Created data visualization for survey results',
      'Built responsive design with modern UI patterns'
    ],
    repo: 'https://github.com/tharsan/ux-survey-form',
    demo: '#',
    image: '/api/placeholder/600/400',
    status: 'In Progress'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{backgroundColor: '#1a1a1a'}}>
      {/* Database/Storage Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 35px,
              #2a2a2a 35px,
              #2a2a2a 37px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 35px,
              #2a2a2a 35px,
              #2a2a2a 37px
            )
          `
        }}></div>
      </div>
      
      {/* Project/Repository Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-5xl" style={{color: '#333333'}}>📁</div>
        <div className="absolute top-40 right-32 text-4xl" style={{color: '#333333'}}>💾</div>
        <div className="absolute bottom-32 left-32 text-6xl" style={{color: '#333333'}}>🗂</div>
        <div className="absolute bottom-20 right-20 text-4xl" style={{color: '#333333'}}>💻</div>
        <div className="absolute top-1/2 left-1/4 text-3xl" style={{color: '#333333'}}>⚡</div>
        <div className="absolute top-1/3 right-1/4 text-5xl" style={{color: '#333333'}}>🚀</div>
      </div>
      
      {/* Git Branch Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <path d="M10 20 Q 50 40 90 60 T 170 100" stroke="#444444" strokeWidth="2" fill="none"/>
          <path d="M200 30 Q 240 50 280 70 T 360 110" stroke="#444444" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="40" r="3" fill="#444444"/>
          <circle cx="150" cy="80" r="3" fill="#444444"/>
          <circle cx="250" cy="60" r="3" fill="#444444"/>
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{color: '#e0e0e0'}}>
            A Showcase of My
            <span className="block" style={{color: '#999999'}}>Best Work</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{color: '#b0b0b0'}}>
            Explore projects that highlight my skills in software development using modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6 rounded-2xl transition-all duration-300 h-full" style={{backgroundColor: 'rgba(42, 42, 42, 0.6)', border: '1px solid #555555'}}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.6)'
                     e.currentTarget.style.borderColor = '#777777'
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.6)'
                     e.currentTarget.style.borderColor = '#555555'
                   }}>
                {/* Project Image/Preview */}
                <div className="relative mb-6 rounded-xl overflow-hidden h-48 flex items-center justify-center" style={{backgroundColor: 'rgba(20, 20, 20, 0.8)'}}>
                  <div className="text-6xl" style={{color: 'rgba(153, 153, 153, 0.5)'}}>
                    <FaCode />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'border'
                        : 'border'
                    }`}
                    style={{
                      backgroundColor: project.status === 'Completed' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(251, 191, 36, 0.2)',
                      color: project.status === 'Completed' ? '#22c55e' : '#fbbf24',
                      borderColor: project.status === 'Completed' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(251, 191, 36, 0.3)'
                    }}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold transition-colors" style={{color: '#e0e0e0'}}>
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.techIcons.slice(0, 2).map((Icon, i) => (
                        <Icon key={i} style={{color: '#999999'}} className="text-lg" />
                      ))}
                    </div>
                  </div>

                  <p className="leading-relaxed" style={{color: '#b0b0b0'}}>
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border"
                        style={{
                          backgroundColor: 'rgba(153, 153, 153, 0.1)',
                          color: '#999999',
                          borderColor: 'rgba(153, 153, 153, 0.3)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full" style={{backgroundColor: 'rgba(102, 102, 102, 0.2)', color: '#666666'}}>
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors"
                      style={{color: '#b0b0b0'}}
                      onMouseEnter={(e) => e.target.style.color = '#d0d0d0'}
                      onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-sm" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors"
                      style={{color: '#b0b0b0'}}
                      onMouseEnter={(e) => e.target.style.color = '#d0d0d0'}
                      onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Preview</span>
                    </a>
                  </div>

                  {/* Details Button */}
                  <div className="pt-2">
                    <button className="transition-colors text-sm font-medium" style={{color: '#999999'}}
                            onMouseEnter={(e) => e.target.style.color = '#bbb'}
                            onMouseLeave={(e) => e.target.style.color = '#999999'}>
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 rounded-lg transition-all duration-300"
                  style={{borderColor: '#999999', color: '#999999', backgroundColor: 'transparent'}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#999999'
                    e.target.style.color = '#0a0a0a'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#999999'
                  }}>
            Show more projects
          </button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-space-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-star-white">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-cosmic-gray hover:text-star-white text-xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-cosmic-light leading-relaxed">
                  {selectedProject.fullDesc}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-stellar-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-cosmic-light flex items-start gap-2">
                        <span className="text-stellar-cyan mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-stellar-cyan/10 text-stellar-cyan text-sm rounded-full border border-stellar-cyan/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-stellar-cyan text-space-black rounded-lg 
                               hover:bg-cosmic-blue transition-colors font-medium"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-stellar-cyan text-stellar-cyan 
                               rounded-lg hover:bg-stellar-cyan hover:text-space-black transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
