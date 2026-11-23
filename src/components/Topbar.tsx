import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pointer-events-none ${
        isScrolled
          ? 'bg-transparent border-transparent'
          : 'bg-[#f8f9fa]/90 backdrop-blur-md border-b border-[#e4e4e7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={() => smoothScrollTo('home')}
            className="flex items-center gap-2 text-left group"
          >
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0a0a0a]">
              THARSAN<span className="text-[#1d4ed8]">.</span>
            </span>
          </button>
        </div>

        {/* Center Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-opacity duration-300 ${
            isScrolled
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 pointer-events-auto text-[#52525b]'
          }`}
        >
          <button
            onClick={() => smoothScrollTo('home')}
            className="hover:text-[#0a0a0a] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1d4ed8] hover:after:w-full after:transition-all"
          >
            HOME
          </button>
          <button
            onClick={() => smoothScrollTo('skills')}
            className="hover:text-[#0a0a0a] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1d4ed8] hover:after:w-full after:transition-all"
          >
            SKILLS
          </button>
          <button
            onClick={() => smoothScrollTo('projects')}
            className="hover:text-[#0a0a0a] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1d4ed8] hover:after:w-full after:transition-all"
          >
            PROJECTS
          </button>
          <button
            onClick={() => smoothScrollTo('contact')}
            className="hover:text-[#0a0a0a] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1d4ed8] hover:after:w-full after:transition-all"
          >
            ABOUT & CONTACT
          </button>
        </nav>

        {/* Right side - Social Icons & Resume CTA (Consistent border & hover colors) */}
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          <a
            href="https://github.com/ThaRSan1101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e4e4e7] bg-white text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors shadow-xs"
          >
            <FaGithub className="text-base" />
          </a>

          <a
            href="https://www.linkedin.com/in/tharisan0111/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#e4e4e7] bg-white text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors shadow-xs"
          >
            <FaLinkedin className="text-base" />
          </a>

          <a
            href="mailto:arultharisan01@gmail.com"
            aria-label="Email Me"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg border border-[#e4e4e7] bg-white text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors shadow-xs"
          >
            <FaEnvelope className="text-sm" />
          </a>

          {/* CV / Resume Button - Matches other buttons with #e4e4e7 border */}
          <a
            href="/assets/pdf/resume/TharsanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#e4e4e7] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#fbb03b] animate-pulse"></span>
            CV
          </a>
        </div>

      </div>
    </header>
  )
}
