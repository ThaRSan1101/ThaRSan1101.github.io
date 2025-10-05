import React from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaUsers, FaCode } from 'react-icons/fa'

const experiences = [
  {
    company: 'Bank of Ceylon (BOC)',
    position: 'School Leaver',
    location: 'Adampan Branch',
    period: '2023',
    description: 'Assisted staff in data entry, documentation, and customer communication. Gained valuable experience in professional work environment and customer service.',
    icon: FaBuilding,
    type: 'Internship'
  },
  {
    company: 'HNB Assurance',
    position: 'Agent',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Gained real-world experience in communication, sales, and customer service. Developed strong interpersonal skills and business acumen.',
    icon: FaUsers,
    type: 'Part-time'
  },
  {
    company: 'Freelance Projects',
    position: 'Full-Stack Developer',
    location: 'Remote',
    period: '2021 - Present',
    description: 'Worked on various web development projects including Student Tracker System and Waste Pickup Request System. Developed skills in team collaboration and project management.',
    icon: FaCode,
    type: 'Freelance'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden" style={{backgroundColor: '#252525'}}>
      {/* Workplace/Office Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, #353535 40%, #353535 60%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, #353535 40%, #353535 60%, transparent 60%)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Career/Professional Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-5xl" style={{color: '#333333'}}>🏢</div>
        <div className="absolute top-40 right-32 text-4xl" style={{color: '#333333'}}>💼</div>
        <div className="absolute bottom-32 left-32 text-6xl" style={{color: '#333333'}}>📈</div>
        <div className="absolute bottom-20 right-20 text-4xl" style={{color: '#333333'}}>🎯</div>
        <div className="absolute top-1/2 left-1/4 text-3xl" style={{color: '#333333'}}>👔</div>
        <div className="absolute top-1/3 right-1/4 text-5xl" style={{color: '#333333'}}>🤝</div>
      </div>
      
      {/* Timeline Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5" style={{backgroundColor: '#444444'}}></div>
        <div className="absolute left-1/2 top-20 w-3 h-3 rounded-full" style={{backgroundColor: '#444444', transform: 'translateX(-50%)'}}></div>
        <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full" style={{backgroundColor: '#444444', transform: 'translateX(-50%)'}}></div>
        <div className="absolute left-1/2 bottom-20 w-3 h-3 rounded-full" style={{backgroundColor: '#444444', transform: 'translateX(-50%)'}}></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{color: '#d0d0d0'}}>Experience</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#a0a0a0'}}>
            My professional journey and the experiences that shaped my skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl transition-all duration-300"
                style={{backgroundColor: 'rgba(60, 60, 60, 0.6)', border: '1px solid #777777'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(85, 85, 85, 0.6)'
                  e.currentTarget.style.borderColor = '#999999'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.6)'
                  e.currentTarget.style.borderColor = '#777777'
                }}>
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl flex-shrink-0" style={{backgroundColor: 'rgba(187, 187, 187, 0.2)'}}>
                    <exp.icon style={{color: '#bbb'}} className="text-2xl" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold" style={{color: '#d0d0d0'}}>{exp.position}</h3>
                        <p className="font-semibold" style={{color: '#bbb'}}>{exp.company}</p>
                        <p className="text-sm" style={{color: '#a0a0a0'}}>{exp.location}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <span className="text-sm" style={{color: '#888'}}>{exp.period}</span>
                        <span className="px-3 py-1 text-xs rounded-full border mt-1"
                              style={{
                                backgroundColor: 'rgba(187, 187, 187, 0.1)',
                                color: '#bbb',
                                borderColor: 'rgba(187, 187, 187, 0.3)'
                              }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed" style={{color: '#a0a0a0'}}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-6 rounded-xl max-w-2xl mx-auto" style={{backgroundColor: 'rgba(60, 60, 60, 0.6)', border: '1px solid #777777'}}>
            <p className="leading-relaxed" style={{color: '#a0a0a0'}}>
              <span className="font-semibold" style={{color: '#bbb'}}>Currently seeking opportunities</span> to apply my expertise as a Software Developer, 
              contribute effectively, and further enhance my skills in a challenging environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
