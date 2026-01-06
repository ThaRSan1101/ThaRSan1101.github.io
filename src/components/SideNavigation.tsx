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
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-50">
        <div className="flex gap-1 p-2 backdrop-blur-sm rounded-xl bg-black/60 border border-[#2a2a2a]"
        >
          <button
            onClick={() => smoothScrollTo('home')}
            className="p-1.5 rounded-lg transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
            title="Home"
          >
            <span className="emoji-element text-sm">🏠</span>
          </button>
          <button
            onClick={() => smoothScrollTo('skills')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
            title="Skills"
          >
            <span className="text-base emoji-element">⚡</span>
          </button>
          <button
            onClick={() => smoothScrollTo('projects')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
            title="Projects"
          >
            <span className="text-base emoji-element">🚀</span>
          </button>
          <button
            onClick={() => smoothScrollTo('contact')}
            className="p-2 rounded-lg transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
            title="Contact"
          >
            <span className="text-base emoji-element">📧</span>
          </button>
        </div>
      </div>

      {/* Desktop Emoji Navigation - Right Side */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex-col gap-3 hidden md:flex z-50">
        <button
          onClick={() => smoothScrollTo('home')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
          title="Home"
        >
          <span className="text-base emoji-element">🏠</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/80 text-[#fafafa]"
          >
            Home
          </div>
        </button>
        <button
          onClick={() => smoothScrollTo('skills')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
          title="Skills"
        >
          <span className="text-base emoji-element">⚡</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/80 text-[#fafafa]"
          >
            Skills
          </div>
        </button>
        <button
          onClick={() => smoothScrollTo('projects')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
          title="Projects"
        >
          <span className="text-base emoji-element">🚀</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/80 text-[#fafafa]"
          >
            Projects
          </div>
        </button>
        <button
          onClick={() => smoothScrollTo('contact')}
          className="group relative p-2 backdrop-blur-sm rounded-lg hover:scale-110 transition-all duration-300 sidebar-button bg-[#1a1a1a]/80 border border-[#2a2a2a] hover:bg-[#2a2a2a]/80"
          title="Contact"
        >
          <span className="text-base emoji-element">📧</span>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/80 text-[#fafafa]"
          >
            Contact
          </div>
        </button>
      </div>
    </>
  )
}
