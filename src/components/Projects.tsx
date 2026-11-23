import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact, FaCheck } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiPhp, SiBootstrap } from 'react-icons/si'

const projects = [
  {
    id: 1,
    number: '01',
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
    number: '02',
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
    number: '03',
    title: 'Personal Portfolio Website',
    shortDesc: 'Modern, responsive portfolio website built with React, featuring dynamic themes, smooth animations, and interactive components.',
    fullDesc: 'A comprehensive personal portfolio website showcasing my skills, projects, and experience as a software developer. Built with modern web technologies including React, Framer Motion for animations, and Tailwind CSS for styling. Features include dynamic theme switching, smooth scrolling navigation, animated sections, contact forms, and responsive design that works seamlessly across all devices.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    techIcons: [FaReact, SiJavascript],
    features: [
      'Dynamic theme styling with high-contrast editorial aesthetics',
      'Smooth scroll navigation with section reveals and responsive layout',
      'Responsive design optimized for mobile, tablet, and desktop devices',
      'Interactive project showcase with detailed modal popups',
      'Direct social & contact channels with validated interaction links',
      'Optimized performance with modern Vite build tool and modular components'
    ],
    repo: 'https://github.com/ThaRSan1101/ThaRSan1101.github.io',
    demo: '#',
    image: '/assets/images/projects/portfolio-website.png',
    status: 'Completed',
    category: 'Portfolio Website'
  }
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden bg-[#f8f9fa] border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#52525b] uppercase">
                SHOWCASE // WORKS
              </span>
              <span className="h-px w-10 bg-[#d4d4d8]"></span>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-[#fbb03b] text-[#0a0a0a] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
                SELECTED CASE STUDIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a] uppercase">
              FEATURED <span className="text-[#1d4ed8]">PROJECTS.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#52525b] max-w-md font-medium leading-relaxed">
            A selection of my recent full-stack applications, academic systems, and technical experiments.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl md:rounded-3xl border border-[#e4e4e7] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

                {/* Left/Details Column */}
                <div className={`p-6 sm:p-10 lg:p-12 lg:col-span-7 flex flex-col justify-between ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="space-y-6">

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl sm:text-3xl font-black text-[#1d4ed8]">
                          {project.number}
                        </span>
                        <span className="h-4 w-px bg-[#d4d4d8]"></span>
                        <span className="bg-[#fef3c7] text-[#92400e] text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                          {project.category}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold text-[#52525b]">
                        STATUS: {project.status.toUpperCase()}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-medium">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Features Highlights */}
                    <div className="space-y-2 pt-2 border-t border-[#f4f4f5]">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717a]">
                        Key Highlights:
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm text-[#52525b]">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <FaCheck className="text-[#1d4ed8] text-xs mt-1 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#f4f4f5] text-[#18181b] border border-[#e4e4e7]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="pt-8 flex flex-wrap items-center gap-3">
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors shadow-sm"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-[#0a0a0a] text-white hover:bg-[#27272a] transition-colors shadow-sm"
                    >
                      <FaGithub className="text-sm" />
                      {project.frontendRepo ? 'Backend Repository' : 'Source Code'}
                    </a>

                    {project.frontendRepo && (
                      <a
                        href={project.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-white border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#f4f4f5] transition-colors shadow-sm"
                      >
                        <FaGithub className="text-sm" />
                        Frontend Repository
                      </a>
                    )}
                  </div>

                </div>

                {/* Right/Image Column */}
                <div className={`p-6 sm:p-10 lg:p-12 lg:col-span-5 flex items-center justify-center bg-[#f4f4f5] border-t lg:border-t-0 ${
                  index % 2 === 1 ? 'lg:order-1 lg:border-r border-[#e4e4e7]' : 'lg:order-2 lg:border-l border-[#e4e4e7]'
                }`}>
                  <div
                    onClick={() => setSelectedImage(project.image)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#e4e4e7] shadow-md group cursor-pointer bg-white"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2QjczODAiPlByb2plY3QgUHJldmlldzwvdGV4dD4KPC9zdmc+'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-[#0a0a0a] text-xs font-black uppercase tracking-wider px-4 py-2 rounded shadow-md">
                        Click to Expand Preview
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="self-end mb-2 text-white hover:text-[#fbb03b] text-3xl font-bold transition-colors"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Project Full Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-2 border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
