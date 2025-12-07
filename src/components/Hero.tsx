import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}>

      {/* Night Sky Background with Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Starfield Layer 1 - Small stars */}
        <div className="absolute inset-0" style={{
          opacity: 0.4,
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent)
          `,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>

        {/* Starfield Layer 2 - Medium stars */}
        <div className="absolute inset-0" style={{
          opacity: 0.3,
          backgroundImage: `
            radial-gradient(2px 2px at 40% 20%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1.5px 1.5px at 70% 80%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1.5px 1.5px at 25% 50%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(2px 2px at 85% 40%, rgba(255, 255, 255, 0.8), transparent)
          `,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat'
        }}></div>

        {/* Subtle nebula glow */}
        <div className="absolute inset-0 opacity-10" style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(100, 100, 255, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(150, 100, 255, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1 px-4 sm:px-0">

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: '#ffffff' }}>
                Hi, I'm <span style={{ color: '#00ff88' }}>Tharsan</span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                style={{ color: '#cccccc' }}>
                &lt;Software Developer/&gt;
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              style={{ color: '#999999' }}>
              Building modern web applications and digital solutions that bring ideas to life
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }
                }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 font-semibold rounded-lg hero-cta-button transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="text-base sm:text-lg" />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Profile Image */}
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{
                  border: '4px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img
                  src="/assets/images/profile/profile.jpg"
                  alt="Tharsan - Software Developer"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'contrast(1.05) brightness(0.98)'
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const nextElement = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'flex';
                  }}
                />

                {/* Fallback Avatar */}
                <div
                  className="w-full h-full flex items-center justify-center text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                    color: '#fafafa',
                    display: 'none'
                  }}
                >
                  T
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}