import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-[#0a0a0a] text-white border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left brand & copyright */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">
                THARSAN<span className="text-[#1d4ed8]">.</span>
              </span>
              <span className="bg-[#fbb03b] text-[#0a0a0a] text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
                PORTFOLIO
              </span>
            </div>
            <p className="text-xs text-[#a1a1aa] font-medium">
              © 2025 Yoganathan Arultharisan. Department of Computer Science & Informatics, Uva Wellassa University.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#3f3f46] text-xs font-bold uppercase tracking-wider text-white hover:bg-[#1d4ed8] hover:border-[#1d4ed8] transition-colors"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" />
          </button>

        </div>
      </div>
    </footer>
  )
}
