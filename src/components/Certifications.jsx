import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa'

const certifications = [
  {
    title: 'WSO2 Linux and DevOps Training',
    issuer: 'WSO2',
    score: '954 points',
    year: '2024',
    description: 'Comprehensive training in Linux administration and DevOps practices with WSO2 technologies.',
    icon: FaAward,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'IBM Machine Learning Certificate',
    issuer: 'IBM',
    score: 'Completed',
    year: '2023',
    description: 'Machine learning fundamentals and practical applications using IBM Watson and cloud services.',
    icon: FaCertificate,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Google Digital Marketing Certificate',
    issuer: 'Google',
    score: 'Completed',
    year: '2023',
    description: 'Digital marketing strategies, analytics, and online advertising best practices.',
    icon: FaGraduationCap,
    color: 'from-green-400 to-green-600'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Achievement Badge Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #3a3a3a 1px, transparent 1px),
                              radial-gradient(circle at 60px 60px, #4a4a4a 1px, transparent 1px),
                              radial-gradient(circle at 100px 30px, #353535 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
            backgroundPosition: '0 0, 40px 40px, 80px 10px'
          }}
          className="w-full h-full"
        ></div>
      </div>
      
      {/* Achievement Medal Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🏆</div>
        <div className="absolute top-32 right-20 text-4xl">🎖️</div>
        <div className="absolute bottom-40 left-20 text-5xl">🥇</div>
        <div className="absolute bottom-20 right-10 text-4xl">📜</div>
        <div className="absolute top-60 left-1/3 text-3xl">🎓</div>
        <div className="absolute bottom-60 right-1/3 text-3xl">⭐</div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: '#c0c0c0' }}>Certifications</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#909090' }}>
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl transition-all duration-300 group"
              style={{ 
                backgroundColor: '#333333',
                border: '1px solid #404040',
                backdropFilter: 'blur(10px)'
              }}>
              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold group-hover:scale-105 transition-transform" style={{ color: '#c0c0c0' }}>
                      {cert.title}
                    </h3>
                    <p className="font-semibold" style={{ color: '#a0a0a0' }}>{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#808080' }}>{cert.year}</span>
                    <span className="px-3 py-1 text-xs rounded-full" 
                          style={{ 
                            backgroundColor: '#404040',
                            color: '#c0c0c0',
                            border: '1px solid #505050'
                          }}>
                      {cert.score}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: '#909090' }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-6 rounded-xl max-w-3xl mx-auto"
               style={{ 
                 backgroundColor: '#333333',
                 border: '1px solid #404040',
                 backdropFilter: 'blur(10px)'
               }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#c0c0c0' }}>Continuous Learning</h3>
            <p className="leading-relaxed" style={{ color: '#909090' }}>
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and my passion 
              for expanding my skill set in various domains of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
