import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaKeyboard, 
  FaFileAlt, 
  FaCode, 
  FaVideo, 
  FaWrench,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa'

const services = [
  {
    title: 'Typing & Data Entry',
    icon: FaKeyboard,
    description: 'Fast and accurate typing services for documents, forms, and data processing tasks.',
    category: 'Administrative'
  },
  {
    title: 'Presentation & Document Creation',
    icon: FaFileAlt,
    description: 'Professional presentations, reports, and document formatting for business needs.',
    category: 'Design'
  },
  {
    title: 'Beginner Web Project Help',
    icon: FaCode,
    description: 'I help students build and debug beginner coding projects in Java, HTML, React.',
    category: 'Development'
  },
  {
    title: 'Video Editing & Content Creation',
    icon: FaVideo,
    description: 'Creative video editing, content creation, and multimedia production services.',
    category: 'Creative'
  },
  {
    title: 'Web & Tech Support',
    icon: FaWrench,
    description: 'Technical support for web development issues and troubleshooting.',
    category: 'Support'
  },
  {
    title: 'Team Collaboration',
    icon: FaUsers,
    description: 'Experience working in teams and supporting collaborative development projects.',
    category: 'Leadership'
  }
]

export default function Services(){
  return (
    <section id="services" className="py-20 relative overflow-hidden" style={{backgroundColor: '#202020'}}>
      {/* API/Service Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #333333 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #333333 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Service/Cloud Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-5xl" style={{color: '#333333'}}>☁️</div>
        <div className="absolute top-40 right-32 text-4xl" style={{color: '#333333'}}>🔗</div>
        <div className="absolute bottom-32 left-32 text-6xl" style={{color: '#333333'}}>⚙️</div>
        <div className="absolute bottom-20 right-20 text-4xl" style={{color: '#333333'}}>🛠</div>
        <div className="absolute top-1/2 left-1/4 text-3xl" style={{color: '#333333'}}>📊</div>
        <div className="absolute top-1/3 right-1/4 text-5xl" style={{color: '#333333'}}>💼</div>
      </div>
      
      {/* Network Connection Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="network" patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="20" cy="20" r="2" fill="#444444"/>
              <circle cx="80" cy="80" r="2" fill="#444444"/>
              <line x1="20" y1="20" x2="80" y2="80" stroke="#444444" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{color: '#d8d8d8'}}>Services / What I Offer</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#a8a8a8'}}>
            Professional services I provide for clients and collaborators
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl transition-all duration-300 group"
              style={{backgroundColor: 'rgba(51, 51, 51, 0.6)', border: '1px solid #666666'}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(75, 75, 75, 0.6)'
                e.currentTarget.style.borderColor = '#888888'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(51, 51, 51, 0.6)'
                e.currentTarget.style.borderColor = '#666666'
              }}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg transition-colors" style={{backgroundColor: 'rgba(170, 170, 170, 0.2)'}}>
                    <service.icon style={{color: '#aaa'}} className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold transition-colors" style={{color: '#d8d8d8'}}>
                      {service.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full" style={{color: '#888', backgroundColor: 'rgba(136, 136, 136, 0.2)'}}>
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{color: '#a8a8a8'}}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-8 rounded-2xl max-w-2xl mx-auto" style={{backgroundColor: 'rgba(51, 51, 51, 0.6)', border: '1px solid #666666'}}>
            <FaLightbulb style={{color: '#aaa'}} className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3" style={{color: '#d8d8d8'}}>Have a Project in Mind?</h3>
            <p className="leading-relaxed mb-6" style={{color: '#a8a8a8'}}>
              Whether you need help with a coding project, document creation, or any other service, 
              I'm here to help bring your ideas to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300"
              style={{backgroundColor: '#aaa', color: '#202020'}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ccc'
                e.target.style.color = '#000'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#aaa'
                e.target.style.color = '#202020'
              }}
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
