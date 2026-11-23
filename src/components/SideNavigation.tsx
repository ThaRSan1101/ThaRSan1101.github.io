import React, { useState, useEffect } from 'react'
import { FaHome, FaBolt, FaFolderOpen, FaEnvelope } from 'react-icons/fa'

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function SideNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar only after scrolling down past top hero section (scrollY > 150)
      if (window.scrollY > 150) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Track active section for indicator
      const sections = ['home', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'skills', label: 'Skills', icon: FaBolt },
    { id: 'projects', label: 'Projects', icon: FaFolderOpen },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ]

  return (
    <>
      {/* Mobile Floating Bottom Bar - Appears only when scrolled */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-12'
        }`}
      >
        <nav className="flex gap-1.5 p-1.5 backdrop-blur-md rounded-2xl bg-white/95 border border-[#e4e4e7] shadow-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center active:scale-95 ${
                  isActive
                    ? 'bg-[#0a0a0a] text-white shadow-sm'
                    : 'text-[#52525b] hover:text-[#0a0a0a] hover:bg-[#f4f4f5]'
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <item.icon className="text-base" />
              </button>
            )
          })}
        </nav>
      </div>

      {/* Desktop Floating Right Bar - Appears smoothly only when scrolled */}
      <aside
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-2.5 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-12'
        }`}
      >
        <div className="p-1.5 backdrop-blur-md rounded-2xl bg-white/95 border border-[#e4e4e7] shadow-xl flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                className={`group relative p-3 rounded-xl transition-all duration-200 flex items-center justify-center ${
                  isActive
                    ? 'bg-[#0a0a0a] text-white shadow-sm'
                    : 'text-[#52525b] hover:text-[#0a0a0a] hover:bg-[#f4f4f5]'
                }`}
                title={item.label}
                aria-label={item.label}
              >
                <item.icon className={`text-base transition-transform group-hover:scale-110 ${isActive ? 'text-[#fbb03b]' : ''}`} />
                
                {/* Tooltip Label */}
                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#0a0a0a] text-white shadow-md pointer-events-none">
                  {item.label}
                </div>
              </button>
            )
          })}
        </div>
      </aside>
    </>
  )
}
