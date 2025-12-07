import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPhp, SiBootstrap } from 'react-icons/si'


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
    demo: 'https://www.linkedin.com/posts/tharisan0111_fullstackdevelopment-reactjs-php-ugcPost-7385535315865886720-Fa6Y?utm_source=social_share_send&utm_medium=member_desktop_web',
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
    demo: '#',
    image: '/assets/images/projects/portfolio-website.png',
    status: 'Completed',
    category: 'Portfolio Website'
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4" style={{ color: '#f5f5f5' }}>
            A Showcase of My Best Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4" style={{ color: '#c0c0c0' }}>
            A selection of my recent work and technical experiments
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, #333333, transparent)'
            }}>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {visibleProjects.map((project, index) => (
              <div key={project.id} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Project Details */}
                  <div
                    className={`order-2 ${index % 2 === 0 ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'}`}
                  >
                    <div
                      className="p-10 sm:p-12 rounded-[2.5rem] shadow-lg relative z-10"
                      style={{
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        border: '1px solid #333333'
                      }}
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg mb-6 leading-relaxed" style={{ color: '#c0c0c0' }}>
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundColor: 'rgba(42, 42, 42, 0.8)',
                              color: '#ffffff'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:opacity-90"
                            style={{
                              backgroundColor: '#333333',
                              color: '#ffffff'
                            }}
                          >
                            <FaExternalLinkAlt /> Demo
                          </a>
                        )}

                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all border"
                          style={{
                            borderColor: '#333333',
                            color: '#f5f5f5'
                          }}
                        >
                          <FaGithub /> {project.frontendRepo ? 'Backend' : 'Code'}
                        </a>

                        {project.frontendRepo && (
                          <a
                            href={project.frontendRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all border"
                            style={{
                              borderColor: '#333333',
                              color: '#f5f5f5'
                            }}
                          >
                            <FaGithub /> Frontend
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div
                    className={`order-1 ${index % 2 === 0 ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'} group`}
                  >
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ border: '1px solid #333333' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgNzBWMTMwTTIzMCAxMDBIMTcwIiBzdHJva2U9IiM5Q0E0QUYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjczODAiPlByb2plY3QgSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo='
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {projects.length > 3 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl font-medium transition-all hover:opacity-90 hover:scale-105"
              style={{
                backgroundColor: '#333333',
                color: '#ffffff',
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)'
              }}
            >
              {showAll ? 'Show Less' : 'Show All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
