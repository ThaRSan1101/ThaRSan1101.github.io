import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0a0a]">

      {/* Night Sky Background with Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Starfield Layer 1 - Small stars */}
        <div className="absolute inset-0 hero-starfield-1"></div>

        {/* Starfield Layer 2 - Medium stars */}
        <div className="absolute inset-0 hero-starfield-2"></div>

        {/* Subtle nebula glow */}
        <div className="absolute inset-0 hero-nebula"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1 px-4 sm:px-0">

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Hi, I'm <span className="text-[#00ff88]">Tharsan</span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#cccccc]">
                &lt; Software Developer /&gt;
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 text-[#999999]">
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
                className="w-full h-full rounded-full overflow-hidden border-[4px] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                <img
                  src="/assets/images/profile/profile.jpg"
                  alt="Tharsan - Software Developer"
                  className="w-full h-full object-cover brightness-[0.98] contrast-[1.05]"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = 'none';
                    const nextElement = img.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'flex';
                  }}
                />

                {/* Fallback Avatar */}
                <div
                  className="w-full h-full flex items-center justify-center text-6xl font-bold bg-[#1a1a1a] text-[#fafafa] hidden"
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