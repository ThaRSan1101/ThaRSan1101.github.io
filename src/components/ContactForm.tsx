import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa'

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tharisan0111',
      username: '@tharisan0111',
      actionText: 'Connect on LinkedIn',
      accentColor: '#0a66c2'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/ThaRSan1101',
      username: '@ThaRSan1101',
      actionText: 'Follow on GitHub',
      accentColor: '#0a0a0a'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:arultharisan01@gmail.com',
      username: 'arultharisan01@gmail.com',
      actionText: 'Send an Email',
      accentColor: '#1d4ed8'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/94715112782',
      username: '+94 71 511 2782',
      actionText: 'Message on WhatsApp',
      accentColor: '#25d366'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-white border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#52525b] uppercase">
                COMMUNICATION // PROFILE
              </span>
              <span className="h-px w-10 bg-[#d4d4d8]"></span>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-[#fbb03b] text-[#0a0a0a] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a] uppercase">
              ABOUT ME & <span className="text-[#1d4ed8]">CONTACT.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#52525b] max-w-md font-medium leading-relaxed">
            I'm currently seeking new opportunities, internships, and collaborative development projects.
          </p>
        </div>

        {/* 2-Column Split: About on Left, Contact Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: About Arultharisan */}
          <div className="lg:col-span-7 bg-[#f8f9fa] rounded-2xl md:rounded-3xl p-8 sm:p-10 border border-[#e4e4e7] space-y-8">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1d4ed8]">
                <FaGraduationCap className="text-base" />
                <span>Academic & Professional Profile</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight">
                Arultharisan
              </h3>
              <p className="text-sm font-semibold text-[#52525b]">
                Computer Science Undergraduate — Department of Computer Science & Informatics, Uva Wellassa University
              </p>
            </div>

            {/* Narrative text (preserved 100%) */}
            <div className="space-y-4 text-sm sm:text-base text-[#52525b] leading-relaxed font-medium border-t border-[#e4e4e7] pt-6">
              <p>
                Computer Science Undergraduate – Department of Computer Science & Informatics, Uva Wellassa University
              </p>

              <p>
                Passionate about Full-Stack Development and Software Engineering, with a strong interest in building user-friendly web applications and exploring modern technologies. Enjoy developing practical solutions and continuously learning new technologies.
              </p>

              <p>
                Currently seeking opportunities to apply my expertise and contribute effectively in a challenging development environment.
              </p>
            </div>

            {/* Highlights metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e4e4e7]">
              <div className="bg-white p-4 rounded-xl border border-[#e4e4e7]">
                <div className="text-2xl font-black text-[#0a0a0a]">2+</div>
                <div className="text-xs font-bold text-[#71717a] uppercase mt-0.5">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#e4e4e7]">
                <div className="text-2xl font-black text-[#1d4ed8]">5+</div>
                <div className="text-xs font-bold text-[#71717a] uppercase mt-0.5">Projects Built</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#e4e4e7]">
                <div className="text-2xl font-black text-[#fbb03b]">UWU</div>
                <div className="text-xs font-bold text-[#71717a] uppercase mt-0.5">Computer Science</div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#0a0a0a]">
                Direct Inquiries
              </h3>
              <p className="text-xs font-medium text-[#71717a] mt-1">
                Reach out directly through any of my verified channels below:
              </p>
            </div>

            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-[#f8f9fa] border border-[#e4e4e7] hover:bg-white hover:border-[#0a0a0a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-[#e4e4e7] shadow-xs group-hover:scale-110 transition-transform"
                    style={{ color: link.accentColor }}
                  >
                    <link.icon className="text-2xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-[#0a0a0a] group-hover:text-[#1d4ed8] transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-xs font-mono font-medium text-[#71717a]">
                      {link.username}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#71717a] group-hover:text-[#0a0a0a]">
                  <span className="hidden sm:inline">{link.actionText}</span>
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}

            {/* Quick availability pill */}
            <div className="p-4 rounded-xl bg-[#fef3c7] border border-[#fde68a] flex items-center gap-3 mt-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-ping"></span>
              <p className="text-xs font-bold text-[#92400e]">
                Available for internships, software engineering roles & full-stack development projects.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
