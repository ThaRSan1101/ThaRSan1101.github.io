import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPhp, SiBootstrap } from 'react-icons/si'
import BackgroundElements from './BackgroundElements'

const projects = [
  {
    id: 1,
    title: 'Home Management System',
    shortDesc: 'Full-stack web application for booking and managing home services with secure payment integration and real-time notifications.',
    fullDesc: 'A comprehensive web-based platform that streamlines home service management by connecting customers with verified service providers. The system features three distinct user roles (Customer, Provider, Admin) with dedicated dashboards, real-time booking management, secure JWT authentication, payment processing, rating/review system, and comprehensive admin oversight. Built with modern web technologies and follows waterfall methodology with extensive testing validation.',
    tags: ['React', 'PHP', 'MySQL', 'JWT', 'OOP', 'Full-Stack'],
    techIcons: [FaReact, FaCode, FaDatabase],
    features: [
      'Multi-role authentication system (Customer, Provider, Admin) with JWT tokens',
      'Real-time service booking with date/time validation and conflict prevention',
      'Secure payment processing with card validation using Luhn algorithm',
      'Comprehensive notification system with email alerts and dashboard notifications',
      'Rating and review system for quality control and provider accountability',
      'Admin panel for user management, provider verification, and system oversight'
    ],
    repo: 'https://github.com/ThaRSan1101/home-management-system-Backend',
    frontendRepo: 'https://github.com/ThaRSan1101/home-management-system-Frontend',
    demo: '#',
    image: '/assets/images/projects/home-management-system.png',
    status: 'Completed',
    category: 'Full Stack Web App'
  },
  {
    id: 2,
    title: 'Campus Connect - SEU Issue Tracker',
    shortDesc: 'Full-stack issue reporting and event management system for university campus',
    fullDesc: 'Campus Connect is a comprehensive web application developed for university campus management. It enables students to report campus issues with photo uploads and location details, while providing administrators with tools to manage reports, events, and users. The system features role-based access control, real-time status tracking, and an intuitive dashboard for both students and administrators.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    techIcons: [SiPhp, SiMysql, SiBootstrap],
    features: [
      'Report Management: Submit campus issues with photo uploads and location tracking',
      'Event Management: Browse and manage university events with admin controls',
      'User Authentication: Secure login system with role-based access (Student/Admin)',
      'Admin Dashboard: Comprehensive administrative interface for managing reports, events, and users',
      'Real-time Updates: Status tracking for reports with badge indicators',
      'Responsive Design: Mobile-friendly interface with Bootstrap 5'
    ],
    repo: 'https://github.com/ThaRSan1101/campus-connect.git',
    demo: '#',
    image: '/assets/images/projects/campus-connect.png',
    status: 'Completed',
    category: 'Full Stack Web App'
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    shortDesc: 'Modern, responsive portfolio website built with React, featuring dark/light themes, smooth animations, and interactive components.',
    fullDesc: 'A comprehensive personal portfolio website showcasing my skills, projects, and experience as a software developer. Built with modern web technologies including React, Framer Motion for animations, and Tailwind CSS for styling. Features include dynamic theme switching, smooth scrolling navigation, animated sections, contact forms, and responsive design that works seamlessly across all devices.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Responsive Design'],
    techIcons: [FaReact, SiJavascript, SiTailwindcss],
    features: [
      'Dynamic dark/light theme switching with smooth transitions',
      'Smooth scroll navigation with animated section reveals using Framer Motion',
      'Responsive design optimized for mobile, tablet, and desktop devices',
      'Interactive project showcase with detailed modal popups',
      'Contact form with email integration and form validation',
      'Animated background elements and interactive UI components',
      'Optimized performance with Vite build tool and lazy loading',
      'SEO-friendly structure with semantic HTML and meta tags'
    ],
    repo: 'https://github.com/ThaRSan1101/ThaRSan1101.github.io',
    demo: 'https://tharsan1101.github.io',
    image: '/assets/images/projects/portfolio-website.png',
    status: 'Completed',
    category: 'Portfolio Website'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [initialProjectsCount] = useState(2) // Number of projects to show initially

  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--projects-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--projects-pattern', isDark ? 'rgba(42, 42, 42, 0.4)' : 'rgba(108, 117, 125, 0.4)')
      document.documentElement.style.setProperty('--projects-dots', isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)')
      document.documentElement.style.setProperty('--projects-icons', isDark ? '#333333' : '#6c757d')
      document.documentElement.style.setProperty('--projects-lines', isDark ? '#444444' : '#6c757d')
      document.documentElement.style.setProperty('--projects-heading', isDark ? '#e0e0e0' : '#212529')
      document.documentElement.style.setProperty('--projects-subheading', isDark ? '#999999' : '#6c757d')
      document.documentElement.style.setProperty('--projects-text', isDark ? '#b0b0b0' : '#495057')
      document.documentElement.style.setProperty('--projects-card-bg', isDark ? 'rgba(42, 42, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--projects-card-border', isDark ? '#555555' : '#dee2e6')
      document.documentElement.style.setProperty('--projects-card-hover-bg', isDark ? 'rgba(60, 60, 60, 0.6)' : 'rgba(233, 236, 239, 0.8)')
      document.documentElement.style.setProperty('--projects-card-hover-border', isDark ? '#777777' : '#6c757d')
      document.documentElement.style.setProperty('--projects-status-completed-bg', isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)')
      document.documentElement.style.setProperty('--projects-status-completed-color', isDark ? '#22c55e' : '#198754')
      document.documentElement.style.setProperty('--projects-status-completed-border', isDark ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.2)')
      document.documentElement.style.setProperty('--projects-status-progress-bg', isDark ? 'rgba(251, 191, 36, 0.2)' : 'rgba(251, 191, 36, 0.1)')
      document.documentElement.style.setProperty('--projects-status-progress-color', isDark ? '#fbbf24' : '#f59e0b')
      document.documentElement.style.setProperty('--projects-status-progress-border', isDark ? 'rgba(251, 191, 36, 0.3)' : 'rgba(251, 191, 36, 0.2)')
      document.documentElement.style.setProperty('--projects-btn-bg', isDark ? 'transparent' : '#ffffff')
      document.documentElement.style.setProperty('--projects-btn-text', isDark ? '#999999' : '#495057')
      document.documentElement.style.setProperty('--projects-btn-border', isDark ? '#999999' : '#6c757d')
      document.documentElement.style.setProperty('--projects-btn-hover-bg', isDark ? '#999999' : '#6c757d')
      document.documentElement.style.setProperty('--projects-btn-hover-text', isDark ? '#0a0a0a' : '#ffffff')
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="projects" density="light" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--projects-pattern) 100px, var(--projects-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--projects-pattern) 100px, var(--projects-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--projects-dots) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 49px, var(--projects-pattern) 50px, transparent 51px),
            linear-gradient(transparent 49px, var(--projects-pattern) 50px, transparent 51px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-5 animate-pulse" style={{color: 'var(--projects-icons)'}}>
          <span className="text-sm">{'<>'}</span>
        </div>
        <div className="absolute top-40 right-20 opacity-5 animate-pulse delay-1000" style={{color: 'var(--projects-icons)'}}>
          <span className="text-xs">{'{ }'}</span>
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-5 animate-pulse delay-2000" style={{color: 'var(--projects-icons)'}}>
          <span className="text-sm">•</span>
        </div>
        <div className="absolute top-60 right-1/3 opacity-5 animate-pulse delay-500" style={{color: 'var(--projects-icons)'}}>
          <span className="text-xs">*</span>
        </div>
        <div className="absolute bottom-60 right-10 opacity-5 animate-pulse delay-1500" style={{color: 'var(--projects-icons)'}}>
          <span className="text-sm">▢</span>
        </div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{color: 'var(--projects-heading)'}}>
            A Showcase of My
            <span className="block" style={{color: 'var(--projects-subheading)'}}>Best Work</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{color: 'var(--projects-text)'}}>
            Explore my collection of projects that reflect my skills, ideas, and creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {(showAllProjects ? projects : projects.slice(0, initialProjectsCount)).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-4 sm:p-6 rounded-2xl transition-all duration-300 h-full" style={{backgroundColor: 'var(--projects-card-bg)', border: '1px solid var(--projects-card-border)'}}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.backgroundColor = 'var(--projects-card-hover-bg)'
                     e.currentTarget.style.borderColor = 'var(--projects-card-hover-border)'
                     e.currentTarget.style.transform = 'translateY(-4px)'
                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.backgroundColor = 'var(--projects-card-bg)'
                     e.currentTarget.style.borderColor = 'var(--projects-card-border)'
                     e.currentTarget.style.transform = 'translateY(0)'
                     e.currentTarget.style.boxShadow = 'none'
                   }}>
                {/* Project Image/Preview */}
                <div className="relative mb-4 sm:mb-6 rounded-xl overflow-hidden h-40 sm:h-48" 
                     style={{backgroundColor: 'var(--projects-card-bg)', border: '1px solid var(--projects-card-border)'}}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback icon (hidden by default) */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl" 
                       style={{color: 'var(--projects-subheading)', display: 'none'}}>
                    <FaCode />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(100, 200, 255, 0.15)',
                      color: '#64c8ff',
                      borderColor: 'rgba(100, 200, 255, 0.3)'
                    }}>
                      {project.category}
                    </span>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
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
                    <h3 className="text-xl font-bold transition-colors" style={{color: 'var(--projects-heading)'}}>
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.techIcons.slice(0, 2).map((Icon, i) => (
                        <Icon key={i} style={{color: 'var(--projects-subheading)'}} className="text-lg" />
                      ))}
                    </div>
                  </div>

                  <p className="leading-relaxed" style={{color: 'var(--projects-text)'}}>
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
                          color: 'var(--projects-subheading)',
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
                      style={{color: 'var(--projects-text)'}}
                      onMouseEnter={(e) => e.target.style.color = 'var(--projects-heading)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--projects-text)'}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="text-sm" />
                      <span className="text-sm">
                        {project.frontendRepo ? 'Backend' : 'GitHub'}
                      </span>
                    </a>
                    {project.frontendRepo && (
                      <a
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors"
                        style={{color: 'var(--projects-text)'}}
                        onMouseEnter={(e) => e.target.style.color = 'var(--projects-heading)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--projects-text)'}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-sm" />
                        <span className="text-sm">Frontend</span>
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors"
                      style={{color: 'var(--projects-text)'}}
                      onMouseEnter={(e) => e.target.style.color = 'var(--projects-heading)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--projects-text)'}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Preview</span>
                    </a>
                  </div>

                  {/* Details Button */}
                  <div className="pt-2">
                    <button className="transition-colors text-sm font-medium" style={{color: 'var(--projects-subheading)'}}
                            onMouseEnter={(e) => e.target.style.color = 'var(--projects-heading)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--projects-subheading)'}>
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button / Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {projects.length > initialProjectsCount ? (
            !showAllProjects ? (
              <button 
                className="px-8 py-3 border-2 rounded-lg transition-all duration-300"
                style={{borderColor: 'var(--projects-btn-border)', color: 'var(--projects-btn-text)', backgroundColor: 'var(--projects-btn-bg)'}}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--projects-btn-hover-bg)'
                  e.target.style.color = 'var(--projects-btn-hover-text)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--projects-btn-bg)'
                  e.target.style.color = 'var(--projects-btn-text)'
                }}
                onClick={() => setShowAllProjects(true)}
              >
                Explore More Projects ({projects.length - initialProjectsCount} more)
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-lg" style={{color: 'var(--projects-text)'}}>
                  You've seen all my projects! More coming soon...
                </p>
                <button 
                  className="px-8 py-3 border-2 rounded-lg transition-all duration-300"
                  style={{borderColor: 'var(--projects-btn-border)', color: 'var(--projects-btn-text)', backgroundColor: 'var(--projects-btn-bg)'}}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--projects-btn-hover-bg)'
                    e.target.style.color = 'var(--projects-btn-hover-text)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--projects-btn-bg)'
                    e.target.style.color = 'var(--projects-btn-text)'
                  }}
                  onClick={() => {
                    setShowAllProjects(false)
                    document.getElementById('projects').scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }}
                >
                  Show Less Projects
                </button>
              </div>
            )
          ) : (
            <div className="space-y-2">
              <p className="text-lg" style={{color: 'var(--projects-text)'}}>
                 These are all my current projects!
              </p>
              <p className="text-sm" style={{color: 'var(--projects-subheading)'}}>
                New projects are in development. Stay tuned for updates!
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-8 glass"
              style={{
                backgroundColor: 'var(--primary-dark)',
                border: '1px solid var(--border-dark)',
                backdropFilter: 'blur(10px)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold" style={{color: 'var(--text-primary)'}}>{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-2xl font-bold leading-none transition-colors"
                    style={{color: 'var(--text-muted)'}}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    ×
                  </button>
                </div>

                <p className="leading-relaxed text-base" style={{color: 'var(--text-secondary)'}}>
                  {selectedProject.fullDesc}
                </p>

                <div>
                  <h4 className="text-lg font-semibold mb-3" style={{color: 'var(--text-primary)'}}>Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2" style={{color: 'var(--text-secondary)'}}>
                        <span className="mt-1 font-bold" style={{color: 'var(--text-primary)'}}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border"
                      style={{
                        backgroundColor: 'var(--secondary-dark)',
                        color: 'var(--text-secondary)',
                        borderColor: 'var(--border-dark)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium"
                    style={{
                      backgroundColor: 'var(--text-primary)',
                      color: 'var(--primary-dark)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--text-secondary)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'var(--text-primary)'
                    }}
                  >
                    <FaGithub />
                    {selectedProject.frontendRepo ? 'Backend Code' : 'View Code'}
                  </a>
                  {selectedProject.frontendRepo && (
                    <a
                      href={selectedProject.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium"
                      style={{
                        backgroundColor: 'var(--text-primary)',
                        color: 'var(--primary-dark)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--text-secondary)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--text-primary)'
                      }}
                    >
                      <FaGithub />
                      Frontend Code
                    </a>
                  )}
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 rounded-lg transition-all duration-300"
                    style={{
                      borderColor: 'var(--text-primary)',
                      color: 'var(--text-primary)',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'var(--text-primary)'
                      e.target.style.color = 'var(--primary-dark)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.color = 'var(--text-primary)'
                    }}
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
