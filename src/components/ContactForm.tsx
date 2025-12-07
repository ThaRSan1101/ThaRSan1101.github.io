import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/ThaRSan1101',
      username: '@ThaRSan1101'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tharisan0111',
      username: '@tharisan0111'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:arultharisan01@gmail.com',
      username: 'arultharisan01@gmail.com'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/94715112782',
      username: '+94 71 511 2782'
    }
  ]

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center">
          {/* About Section */}
          <div>
            <h1 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>About</h1>

            <h2 className="text-2xl font-semibold mb-2 text-left" style={{ color: '#ffffff' }}>Arultharisan</h2>
            <p className="mb-6 text-left" style={{ color: '#cccccc' }}>Computer Science Undergraduate - Department of Computer Science & Informatics, Uva Wellassa University</p>

            <div className="space-y-4 leading-relaxed text-left" style={{ color: '#cccccc' }}>
              <p className="text-left">
                Passionate about full-stack development with expertise in modern web technologies.
                I specialize in creating user-friendly applications and enjoy exploring new technologies
                that make an impact.
              </p>

              <p className="text-left">
                With 2+ years of programming experience, I've completed multiple academic and freelance projects,
                gaining hands-on technical and professional skills through developing 5+ comprehensive projects.
              </p>

              <p className="text-left">
                Currently seeking opportunities to apply my expertise and contribute effectively
                in a challenging development environment.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h1 className="text-4xl font-bold mb-12" style={{ color: '#ffffff' }}>Contact</h1>

            <div className="flex flex-col gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 rounded-lg transition-all duration-300 text-center font-medium shadow-lg hover:scale-105"
                  style={{
                    backgroundColor: '#1a1a1a',
                    borderColor: '#2a2a2a',
                    color: '#ffffff'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact