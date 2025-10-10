import React, { useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaDownload, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa'
import BackgroundElements from './BackgroundElements'

export default function About() {
  const highlights = []

  useEffect(() => {
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      document.documentElement.style.setProperty('--about-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--about-pattern', isDark ? '#1a1a1a' : '#e9ecef')
      document.documentElement.style.setProperty('--about-code-text', isDark ? '#2a2a2a' : '#6c757d')
      document.documentElement.style.setProperty('--about-binary', isDark ? '#333333' : '#6c757d')
      document.documentElement.style.setProperty('--about-heading', isDark ? '#f5f5f5' : '#212529')
      document.documentElement.style.setProperty('--about-text', isDark ? '#c0c0c0' : '#495057')
      document.documentElement.style.setProperty('--about-accent', isDark ? '#888888' : '#6c757d')
      document.documentElement.style.setProperty('--about-card-bg', isDark ? 'rgba(26, 26, 26, 0.6)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--about-card-border', isDark ? '#333333' : '#dee2e6')
      document.documentElement.style.setProperty('--about-video-bg', isDark ? 'rgba(20, 20, 20, 0.8)' : 'rgba(248, 249, 250, 0.9)')
      document.documentElement.style.setProperty('--about-btn-bg', isDark ? '#1a1a1a' : '#ffffff')
      document.documentElement.style.setProperty('--about-btn-text', isDark ? '#f5f5f5' : '#212529')
      document.documentElement.style.setProperty('--about-btn-border', isDark ? '#333333' : '#dee2e6')
      document.documentElement.style.setProperty('--about-btn-hover-bg', isDark ? '#333333' : '#e9ecef')
      document.documentElement.style.setProperty('--about-btn-hover-text', isDark ? '#fafafa' : '#495057')
      document.documentElement.style.setProperty('--about-btn-secondary-border', isDark ? '#444444' : '#6c757d')
      document.documentElement.style.setProperty('--about-btn-secondary-hover-border', isDark ? '#666666' : '#495057')
      document.documentElement.style.setProperty('--about-btn-secondary-hover-bg', isDark ? 'rgba(136, 136, 136, 0.1)' : 'rgba(108, 117, 125, 0.1)')
      document.documentElement.style.setProperty('--about-icon-bg', isDark ? 'rgba(136, 136, 136, 0.2)' : 'rgba(108, 117, 125, 0.2)')
      document.documentElement.style.setProperty('--about-card-hover-bg', isDark ? 'rgba(42, 42, 42, 0.6)' : 'rgba(233, 236, 239, 0.8)')
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
    <section id="about" className="py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="about" density="medium" />
      {/* Space dust particles */}
      <div className="space-dust"></div>
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--about-pattern) 100px, var(--about-pattern) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--about-pattern) 100px, var(--about-pattern) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, var(--about-pattern) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      {/* Minimal Tech Symbols */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 text-2xl" style={{color: 'var(--about-code-text)'}}>👨‍💻</div>
        <div className="absolute bottom-20 right-20 text-2xl" style={{color: 'var(--about-code-text)'}}>🎓</div>
        <div className="absolute top-1/2 right-1/4 text-xl" style={{color: 'var(--about-code-text)'}}>�</div>
        <div className="absolute bottom-1/3 left-1/4 text-2xl" style={{color: 'var(--about-code-text)'}}>�</div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{color: 'var(--about-heading)'}}>About Me</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{color: 'var(--about-text)'}}>
            Get to know me better and my journey in software development
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
          {/* Video Section - left on laptop, top on mobile/tablet */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="p-6 sm:p-8 rounded-3xl w-full max-w-xl" style={{backgroundColor: 'var(--about-card-bg)', border: '1px solid var(--about-card-border)'}}>
              <div className="h-48 sm:h-56 lg:h-64 rounded-2xl flex items-center justify-center relative overflow-hidden" style={{backgroundColor: 'var(--about-video-bg)'}}>
                <video 
                  className="w-full h-full object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/assets/images/profile/about.png"
                >
                  <source src="/assets/video/my-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          {/* Content Section - right on laptop, bottom on mobile/tablet */}
          <div className="order-2 lg:order-2 space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--about-heading)'}}>Who I Am</h3>
                <p className="text-lg leading-relaxed" style={{color: 'var(--about-text)'}}>
                  I'm <span className="font-semibold" style={{color: 'var(--about-accent)'}}>Tharsan</span>, a passionate Computer Science undergraduate at{' '}
                  <span className="font-semibold" style={{color: 'var(--about-accent)'}}>Uva Wellassa University</span>. 
                  I specialize in full-stack development and enjoy creating user-friendly applications using modern web technologies.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--about-heading)'}}>What I Do</h3>
                <p className="text-lg leading-relaxed" style={{color: 'var(--about-text)'}}>
                  With 2+ years of experience in programming, I've completed multiple academic and freelance projects. 
                  I specialize in full-stack development.  
                  I enjoy exploring new technologies and building solutions that make an impact.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--about-heading)'}}>My Experience</h3>
                <p className="text-lg leading-relaxed" style={{color: 'var(--about-text)'}}>
                  Experienced in developing 5+ projects, gaining hands-on technical and professional skills.
                </p>
              </div>
            </div>
            {/* Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 group"
                  style={{backgroundColor: 'var(--about-card-bg)', border: '1px solid var(--about-card-border)'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--about-card-hover-bg)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--about-card-bg)'}
                >
                  <div className="p-3 rounded-lg" style={{backgroundColor: 'var(--about-icon-bg)'}}>
                    <item.icon style={{color: 'var(--about-accent)'}} className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: 'var(--about-heading)'}}>{item.title}</h4>
                    <p className="text-sm" style={{color: 'var(--about-text)'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/assets/pdf/resume/TharsanCV.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold rounded-lg transition-colors duration-200"
                style={{backgroundColor: 'var(--about-btn-bg)', color: 'var(--about-btn-text)', border: '1px solid var(--about-btn-border)'}}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--about-btn-hover-bg)'
                  e.target.style.color = 'var(--about-btn-hover-text)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--about-btn-bg)'
                  e.target.style.color = 'var(--about-btn-text)'
                }}
              >
                <FaDownload />
                Download CV
              </a>
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                style={{backgroundColor: 'transparent', color: 'var(--about-accent)', border: '2px solid var(--about-btn-secondary-border)'}}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--about-btn-secondary-hover-border)'
                  e.target.style.backgroundColor = 'var(--about-btn-secondary-hover-bg)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--about-btn-secondary-border)'
                  e.target.style.backgroundColor = 'transparent'
                }}
              >
                View Projects
              </ScrollLink>
            </div>
          </div>
        </div>
        {/* Profile Image/Avatar Floating Icon - moved outside main video */}
        <div className="hidden lg:block relative">
          <div className="absolute -top-4 -right-4 p-4 rounded-xl" style={{backgroundColor: 'var(--about-card-bg)', border: '1px solid var(--about-card-border)'}}>
            <FaCode style={{color: 'var(--about-accent)'}} className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}