import React from 'react'

// Smooth scroll function
const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function SideNavigation() {
  return (
    <>
      {/* Mobile Emoji Navigation - Bottom */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 md:hidden z-50">
        <div className="flex gap-2 p-3 backdrop-blur-sm rounded-2xl" 
          style={{
            backgroundColor: 'var(--primary-dark, rgba(0, 0, 0, 0.6))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
        >
          <button 
            onClick={() => smoothScrollTo('home')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
            title="Home"
          >
            <span className="text-lg emoji-element" style={{fontSize: '16px'}}>🏠</span>
          </button>
          <button 
            onClick={() => smoothScrollTo('about')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
            title="About"
          >
            <span className="text-lg emoji-element" style={{fontSize: '16px'}}>👨‍💻</span>
          </button>
          <button 
            onClick={() => smoothScrollTo('skills')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
            title="Skills"
          >
            <span className="text-lg emoji-element" style={{fontSize: '16px'}}>⚡</span>
          </button>
          <button 
            onClick={() => smoothScrollTo('projects')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
            title="Projects"
          >
            <span className="text-lg emoji-element" style={{fontSize: '16px'}}>🚀</span>
          </button>
          <button 
            onClick={() => smoothScrollTo('services')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
            title="Services"
          >
            <span className="text-lg emoji-element" style={{fontSize: '16px'}}>💼</span>
          </button>
          <button 
            onClick={() => smoothScrollTo('contact')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button"
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
              border: '1px solid var(--secondary-light, #2a2a2a)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
            title="Contact"
          >
            <span className="text-lg emoji-element" style={{fontSize: '16px'}}>📧</span>
          </button>
        </div>
      </div>
      
      {/* Desktop Emoji Navigation - Right Side */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex-col gap-3 hidden md:flex z-50">
        <button 
          onClick={() => smoothScrollTo('home')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button"
          style={{
            backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          title="Home"
        >
          <span className="text-lg emoji-element" style={{fontSize: '16px'}}>🏠</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" 
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(0, 0, 0, 0.8))', 
              color: 'var(--text-primary, #fafafa)'
            }}
          >
            Home
          </div>
        </button>
        <button 
          onClick={() => smoothScrollTo('about')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button"
          style={{
            backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          title="About"
        >
          <span className="text-lg emoji-element" style={{fontSize: '16px'}}>👨‍💻</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" 
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(0, 0, 0, 0.8))', 
              color: 'var(--text-primary, #fafafa)'
            }}
          >
            About
          </div>
        </button>
        <button 
          onClick={() => smoothScrollTo('skills')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button"
          style={{
            backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          title="Skills"
        >
          <span className="text-lg emoji-element" style={{fontSize: '16px'}}>⚡</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" 
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(0, 0, 0, 0.8))', 
              color: 'var(--text-primary, #fafafa)'
            }}
          >
            Skills
          </div>
        </button>
        <button 
          onClick={() => smoothScrollTo('projects')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button"
          style={{
            backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          title="Projects"
        >
          <span className="text-lg emoji-element" style={{fontSize: '16px'}}>🚀</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" 
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(0, 0, 0, 0.8))', 
              color: 'var(--text-primary, #fafafa)'
            }}
          >
            Projects
          </div>
        </button>
        <button 
          onClick={() => smoothScrollTo('services')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button"
          style={{
            backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          title="Services"
        >
          <span className="text-lg emoji-element" style={{fontSize: '16px'}}>💼</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" 
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(0, 0, 0, 0.8))', 
              color: 'var(--text-primary, #fafafa)'
            }}
          >
            Services
          </div>
        </button>
        <button 
          onClick={() => smoothScrollTo('contact')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button"
          style={{
            backgroundColor: 'var(--secondary-dark, rgba(26, 26, 26, 0.8))', 
            border: '1px solid var(--secondary-light, #2a2a2a)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-light, rgba(42, 42, 42, 0.8))'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-dark, rgba(26, 26, 26, 0.8))'}
          title="Contact"
        >
          <span className="text-lg emoji-element" style={{fontSize: '16px'}}>📧</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" 
            style={{
              backgroundColor: 'var(--secondary-dark, rgba(0, 0, 0, 0.8))', 
              color: 'var(--text-primary, #fafafa)'
            }}
          >
            Contact
          </div>
        </button>
      </div>
    </>
  )
}