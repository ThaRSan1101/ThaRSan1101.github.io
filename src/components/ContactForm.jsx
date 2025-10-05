import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'
import emailjs from 'emailjs-com'

export default function Contact(){
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    const form = e.target
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    // NOTE: replace the service_id, template_id and user_id with your EmailJS values
    emailjs.send('service_id','template_id', payload, 'user_id')
      .then(() => {
        setStatus('SUCCESS')
        form.reset()
      })
      .catch(() => setStatus('ERROR'))
      .finally(() => setIsLoading(false))
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'tharsan2001@gmail.com',
      href: 'mailto:tharsan2001@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Badulla, Sri Lanka',
      href: '#'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 71 511 2782',
      href: 'tel:+94715112782'
    }
  ]

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
      href: 'https://www.linkedin.com/in/tharisan0111/',
      username: 'Tharisan'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/94715112782',
      username: '+94 71 511 2782'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#2f2f2f' }}>
      {/* Communication Pattern Background */}
      <div className="absolute inset-0 opacity-15">
        <div 
          style={{
            backgroundImage: `linear-gradient(45deg, #3f3f3f 25%, transparent 25%),
                              linear-gradient(-45deg, #3f3f3f 25%, transparent 25%),
                              linear-gradient(45deg, transparent 75%, #3f3f3f 75%),
                              linear-gradient(-45deg, transparent 75%, #3f3f3f 75%)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}
          className="w-full h-full"
        ></div>
      </div>
      
      {/* Communication Icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-12 text-5xl">💬</div>
        <div className="absolute top-28 right-16 text-4xl">📧</div>
        <div className="absolute bottom-32 left-16 text-5xl">📞</div>
        <div className="absolute bottom-16 right-12 text-4xl">🌐</div>
        <div className="absolute top-52 left-1/4 text-3xl">💼</div>
        <div className="absolute bottom-52 right-1/4 text-3xl">🤝</div>
        <div className="absolute top-72 right-1/3 text-3xl">✉️</div>
        <div className="absolute bottom-72 left-1/3 text-3xl">📱</div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#b0b0b0' }}>
            Contact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="p-8 rounded-2xl"
                 style={{ 
                   backgroundColor: '#383838',
                   border: '1px solid #484848',
                   backdropFilter: 'blur(10px)'
                 }}>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                     style={{ 
                       background: 'linear-gradient(135deg, #505050, #606060)',
                       color: '#f0f0f0'
                     }}>
                  T
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold" style={{ color: '#b0b0b0' }}>Tharsan</h3>
                  <p className="font-medium" style={{ color: '#909090' }}>Computer Science Student - Uva Wellassa University</p>
                  <p className="leading-relaxed" style={{ color: '#808080' }}>
                    Passionate about Software Engineering and Full-Stack Development, with a strong 
                    foundation in modern web technologies. Experienced in building innovative projects 
                    that deliver user-focused solutions to real-world problems.
                  </p>
                  <p className="leading-relaxed mt-4" style={{ color: '#808080' }}>
                    Currently seeking opportunities to apply my expertise as a Software Developer, 
                    contribute effectively, and further enhance my skills in a challenging environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl flex items-center gap-4 transition-all duration-300 group"
                  style={{ 
                    backgroundColor: '#383838',
                    border: '1px solid #484848',
                    backdropFilter: 'blur(10px)'
                  }}>
                  <div className="p-3 rounded-lg transition-colors"
                       style={{ 
                         backgroundColor: '#484848',
                         borderColor: '#585858'
                       }}>
                    <info.icon className="text-lg" style={{ color: '#a0a0a0' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#707070' }}>{info.label}</p>
                    <p className="font-medium" style={{ color: '#b0b0b0' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#b0b0b0' }}>Connect with me</h4>
              <div className="grid gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl flex items-center justify-between transition-all duration-300 group"
                    style={{ 
                      backgroundColor: '#383838',
                      border: '1px solid #484848',
                      backdropFilter: 'blur(10px)'
                    }}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg transition-colors"
                           style={{ 
                             backgroundColor: '#484848',
                             borderColor: '#585858'
                           }}>
                        <social.icon className="text-lg" style={{ color: '#a0a0a0' }} />
                      </div>
                      <div>
                        <p className="font-medium" style={{ color: '#b0b0b0' }}>{social.label}</p>
                        <p className="text-sm" style={{ color: '#707070' }}>{social.username}</p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#a0a0a0' }}>
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="/assets/TharsanCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group"
                style={{ 
                  backgroundColor: '#383838',
                  border: '1px solid #484848',
                  backdropFilter: 'blur(10px)'
                }}>
                <FaDownload className="group-hover:animate-bounce" style={{ color: '#a0a0a0' }} />
                <span className="font-medium" style={{ color: '#b0b0b0' }}>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl"
                 style={{ 
                   backgroundColor: '#383838',
                   border: '1px solid #484848',
                   backdropFilter: 'blur(10px)'
                 }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#b0b0b0' }}>Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#808080' }}>Name</label>
                    <input 
                      name="name" 
                      type="text"
                      required 
                      className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none"
                      style={{ 
                        backgroundColor: '#2a2a2a',
                        border: '1px solid #484848',
                        color: '#b0b0b0'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#808080' }}>Email</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none"
                      style={{ 
                        backgroundColor: '#2a2a2a',
                        border: '1px solid #484848',
                        color: '#b0b0b0'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#808080' }}>Subject</label>
                  <input 
                    name="subject" 
                    type="text"
                    required 
                    className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none"
                    style={{ 
                      backgroundColor: '#2a2a2a',
                      border: '1px solid #484848',
                      color: '#b0b0b0'
                    }}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#808080' }}>Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none resize-none"
                    style={{ 
                      backgroundColor: '#2a2a2a',
                      border: '1px solid #484848',
                      color: '#b0b0b0'
                    }}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: '#505050',
                    color: '#f0f0f0'
                  }}>
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" 
                           style={{ borderColor: '#f0f0f0' }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              {status === 'SUCCESS' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  Thanks! I'll get back to you soon. 🚀
                </motion.div>
              )}
              
              {status === 'ERROR' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  Oops! Something went wrong. Please try again later.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8"
          style={{ borderTop: '1px solid #484848' }}>
          <p style={{ color: '#707070' }}>
            © 2025 Tharsan. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
