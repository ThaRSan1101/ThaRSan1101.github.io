import React from 'react'
import { FaArrowRight, FaCode } from 'react-icons/fa'

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-16 pb-0 lg:pt-16 lg:pb-0 relative overflow-hidden bg-[#f8f9fa] flex items-center justify-center"
    >
      {/* Subtle architectural grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* Left Column: Untouched Typography & CTA */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5 lg:space-y-4 order-2 lg:order-1 py-6 lg:py-0">

            {/* Masthead Header / Metadata */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#52525b] uppercase">
                ARULTHARISAN // PORTFOLIO
              </span>
              <span className="h-px w-12 bg-[#d4d4d8]"></span>
            </div>

            {/* Amber Category Badge */}
            <div>
              <span className="inline-block bg-[#fbb03b] text-[#0a0a0a] text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
                SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-0.5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4.25rem] 2xl:text-[4.75rem] font-black tracking-tight leading-[0.94] text-[#0a0a0a] uppercase">
                <div>CODE</div>
                <div>THAT</div>
                <div className="text-[#1d4ed8]">DELIVERS.</div>
              </h1>
            </div>

            {/* Subheading / Description */}
            <div className="space-y-2.5 max-w-xl">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#18181b] tracking-tight">
                Building Modern Web Applications & Scalable Digital Systems
              </h2>

              {/* Editorial Crosshair Emblem & University Info */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <div className="w-6 h-6 rounded-full border-2 border-[#1d4ed8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-[#1d4ed8] rounded-full"></div>
                </div>
                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-medium">
                  Hi, I'm <strong className="text-[#0a0a0a] font-bold">Tharsan</strong> — Computer Science Undergraduate at the <span className="text-[#0a0a0a] font-semibold">Department of Computer Science & Informatics, Uva Wellassa University</span>. Passionate about engineering full-stack solutions that solve real-world problems.
                </p>
              </div>
            </div>

            {/* CTA Buttons - Get In Touch hovers to golden circle color (#fbb03b) */}
            <div className="pt-1.5 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-[#0a0a0a] text-white font-bold text-xs sm:text-sm tracking-wide uppercase rounded-lg hover:bg-[#fbb03b] hover:text-[#0a0a0a] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-[#0a0a0a] border-2 border-[#0a0a0a] font-bold text-xs sm:text-sm tracking-wide uppercase rounded-lg hover:bg-[#f4f4f5] transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <FaCode className="text-xs sm:text-sm" />
                <span>View Projects</span>
              </button>
            </div>

          </div>

          {/* Right Column: Balanced Cutout Profile & Sun Circle */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 self-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[580px] flex items-end justify-center">

              {/* Yellow Backdrop Circle */}
              <div className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px] rounded-full bg-[#fbb03b] top-2 sm:top-4 lg:top-6 left-1/2 -translate-x-[48%] sm:-translate-x-[50%] lg:-translate-x-[52%] z-0 transition-transform duration-700 hover:scale-105 shadow-sm" />

              {/* Cutout Profile Image */}
              <div
                className="relative z-10 w-full flex items-end justify-center"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 65%, rgba(0,0,0,0.4) 85%, transparent 98%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 65%, rgba(0,0,0,0.4) 85%, transparent 98%)'
                }}
              >
                <img
                  src="/assets/images/profile/profile.png"
                  alt="Arultharisan - Software Developer"
                  className="w-auto h-[420px] sm:h-[490px] md:h-[550px] lg:h-[600px] xl:h-[660px] 2xl:h-[720px] max-h-[82vh] object-contain drop-shadow-2xl grayscale contrast-125 brightness-100 hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.endsWith('profile.jpg')) {
                      img.src = '/assets/images/profile/profile.jpg';
                    }
                  }}
                />
              </div>

              {/* Soft Bottom Fade Overlay */}
              <div className="absolute -bottom-1 left-0 right-0 h-28 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/60 to-transparent pointer-events-none z-20" />

              {/* Floating Editorial Badges */}
              <div className="absolute bottom-10 -left-1 sm:-left-3 z-30 bg-white/95 backdrop-blur-sm border border-[#e4e4e7] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1d4ed8]"></span>
                <span className="text-[11px] sm:text-xs font-bold text-[#0a0a0a] tracking-tight">
                  3+ Years Programming
                </span>
              </div>

              <div className="absolute top-6 -right-1 sm:right-0 z-30 bg-white/95 backdrop-blur-sm border border-[#e4e4e7] px-3.5 py-1.5 rounded-xl shadow-lg hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#fbb03b]"></span>
                <span className="text-[11px] sm:text-xs font-bold text-[#0a0a0a]">
                  7+ Completed Projects
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
