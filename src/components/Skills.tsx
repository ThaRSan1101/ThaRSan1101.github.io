import React, { useState } from 'react'
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaFigma, FaLinux,
  FaHtml5, FaCss3Alt, FaJs, FaPhp,
  FaAws, FaChevronDown, FaChevronUp
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMysql, SiCanva, SiTypescript,
  SiNextdotjs, SiMongodb, SiExpress, SiPostgresql,
  SiPostman, SiVercel
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: FaJs, desc: 'Interactive Web Logic' },
      { name: 'TypeScript', icon: SiTypescript, desc: 'Type-Safe Development' },
      { name: 'Java', icon: FaJava, desc: 'Enterprise Apps' },
      { name: 'PHP', icon: FaPhp, desc: 'Server-Side Scripting' },
      { name: 'HTML5', icon: FaHtml5, desc: 'Semantic Structure' },
      { name: 'CSS3', icon: FaCss3Alt, desc: 'Modern Styling' },
      { name: 'SQL', icon: SiMysql, desc: 'Database Queries' },

    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: FaReact, desc: 'Dynamic UI Building' },
      { name: 'Next.js', icon: SiNextdotjs, desc: 'React Framework' },
      { name: 'Node.js', icon: FaNodeJs, desc: 'Scalable Backend' },
      { name: 'Express', icon: SiExpress, desc: 'Web Framework' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Utility-First CSS' },

    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt, desc: 'Version Control' },
      { name: 'GitHub', icon: FaGitAlt, desc: 'Collaboration' },

      { name: 'AWS', icon: FaAws, desc: 'Cloud Services' },
      { name: 'Linux', icon: FaLinux, desc: 'Open Source OS' },
      { name: 'Vercel', icon: SiVercel, desc: 'Deployment' },
      { name: 'Postman', icon: SiPostman, desc: 'API Testing' },

    ]
  },
  {
    title: 'Design & Database',
    skills: [
      { name: 'MySQL', icon: SiMysql, desc: 'Relational DB' },
      { name: 'PostgreSQL', icon: SiPostgresql, desc: 'Advanced SQL' },
      { name: 'MongoDB', icon: SiMongodb, desc: 'NoSQL Database' },
      { name: 'Figma', icon: FaFigma, desc: 'UI/UX Design' },
      { name: 'Canva', icon: SiCanva, desc: 'Graphic Design' },
    ]
  }
]

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Languages'])

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryTitle)
        ? prev.filter(title => title !== categoryTitle)
        : [...prev, categoryTitle]
    )
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4" style={{ color: '#f5f5f5' }}>
            My <span style={{ color: '#ffffff' }}>&lt;Tech&gt;</span> Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#a3a3a3' }}>
            I use modern tools and technologies to build fast, reliable, and user-friendly web applications.
          </p>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.title)

            return (
              <div key={category.title} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: '#0f0f0f' }}
                >
                  <h3 className="text-xl font-bold flex items-center gap-3"
                    style={{ color: '#f5f5f5' }}>
                    <span className="w-1 h-6 rounded" style={{ backgroundColor: '#ffffff' }}></span>
                    {category.title}
                  </h3>
                  {isExpanded ? (
                    <FaChevronUp style={{ color: '#ffffff' }} />
                  ) : (
                    <FaChevronDown style={{ color: '#ffffff' }} />
                  )}
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? '1000px' : '0',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-start gap-4 group"
                        >
                          <div className="mt-1">
                            <skill.icon
                              className="text-3xl transition-transform duration-300 group-hover:scale-110"
                              style={{ color: '#ffffff' }}
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-1" style={{ color: '#ffffff' }}>
                              {skill.name}
                            </h4>
                            <p className="text-sm font-medium" style={{ color: '#888888' }}>
                              {skill.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}