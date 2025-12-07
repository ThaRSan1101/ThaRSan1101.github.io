import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="relative flex items-center justify-start sm:justify-between max-w-7xl mx-auto">

        {/* Desktop Social Links - Left side */}
        <div className="flex-shrink-0">
          <div className="hidden sm:flex gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/tharisan0111/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                border: '1px solid #2a2a2a'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
            >
              <FaLinkedin className="text-lg" style={{ color: '#fafafa' }} />
            </a>

            <a
              href="https://github.com/ThaRSan1101"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                border: '1px solid #2a2a2a'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
            >
              <FaGithub className="text-lg" style={{ color: '#fafafa' }} />
            </a>

            <a
              href="mailto:arultharisan01@gmail.com"
              className="hidden md:block px-3 py-2 backdrop-blur-sm rounded-lg text-sm font-medium topbar-link"
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                border: '1px solid #2a2a2a',
                color: '#fafafa'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
            >
              arultharisan01@gmail.com
            </a>
          </div>
        </div>


        {/* Mobile Social Links - Icons only for mobile, aligned left */}
        <div className="flex sm:hidden gap-1 items-center">
          <a
            href="https://www.linkedin.com/in/tharisan0111/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.8)',
              border: '1px solid #2a2a2a'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
          >
            <FaLinkedin style={{ color: '#fafafa' }} className="text-sm" />
          </a>
          <a
            href="https://github.com/ThaRSan1101"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.8)',
              border: '1px solid #2a2a2a'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
          >
            <FaGithub style={{ color: '#fafafa' }} className="text-sm" />
          </a>
          <a
            href="mailto:tharsan2001@gmail.com"
            className="p-2 backdrop-blur-sm rounded-lg transition-colors duration-200 topbar-link"
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.8)',
              border: '1px solid #2a2a2a'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
          >
            <FaEnvelope style={{ color: '#fafafa' }} className="text-sm" />
          </a>
        </div>

        {/* CV/Resume Button with green dot - Right side, absolute on mobile */}
        <div className="absolute right-0 sm:relative flex items-center gap-2 ml-2 sm:ml-5 mr-0 sm:mr-3 xl:mr-32 laptop1440:fixed laptop1440:top-5 laptop1440:right-10 laptop1440:mr-0">

          {/* Green dot indicator */}
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00ff88' }}></div>

          <a
            href="/assets/pdf/resume/TharsanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 backdrop-blur-sm rounded-lg text-sm font-medium topbar-link"
            style={{
              backgroundColor: 'rgba(26, 26, 26, 0.8)',
              border: '1px solid #2a2a2a',
              color: '#fafafa'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(42, 42, 42, 0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.8)'}
          >
            CV
          </a>
        </div>
      </div>
    </div>
  )
}
