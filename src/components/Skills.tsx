import React, { useState } from 'react'
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaFigma, FaLinux,
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython,
  FaAws
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMysql, SiCanva, SiTypescript,
  SiNextdotjs, SiMongodb, SiExpress, SiPostgresql,
  SiPostman, SiVercel, SiDjango
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    tag: 'CORE CODE',
    skills: [
      { name: 'JavaScript', icon: FaJs, desc: 'Interactive Web Logic', color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, desc: 'Type-Safe Development', color: '#3178c6' },
      { name: 'Java', icon: FaJava, desc: 'Enterprise Apps', color: '#f89820' },
      { name: 'PHP', icon: FaPhp, desc: 'Server-Side Scripting', color: '#777bb4' },
      { name: 'HTML5', icon: FaHtml5, desc: 'Semantic Structure', color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, desc: 'Modern Styling', color: '#1572b6' },
      { name: 'SQL', icon: SiMysql, desc: 'Database Queries', color: '#4479a1' },
      { name: 'Python', icon: FaPython, desc: 'Versatile Programming', color: '#3776ab' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    tag: 'LIBRARIES & ARCHITECTURE',
    skills: [
      { name: 'React', icon: FaReact, desc: 'Dynamic UI Building', color: '#61dafb' },
      { name: 'Next.js', icon: SiNextdotjs, desc: 'React Framework', color: '#000000' },
      { name: 'Node.js', icon: FaNodeJs, desc: 'Scalable Backend', color: '#339933' },
      { name: 'Express', icon: SiExpress, desc: 'Web Framework', color: '#000000' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Utility-First CSS', color: '#06b6d4' },
      { name: 'Django', icon: SiDjango, desc: 'High-level Framework', color: '#092e20' },
    ]
  },
  {
    title: 'Tools & Platforms',
    tag: 'WORKFLOW & DEVOPS',
    skills: [
      { name: 'Git', icon: FaGitAlt, desc: 'Version Control', color: '#f05032' },
      { name: 'GitHub', icon: FaGitAlt, desc: 'Collaboration', color: '#181717' },
      { name: 'AWS', icon: FaAws, desc: 'Cloud Services', color: '#ff9900' },
      { name: 'Linux', icon: FaLinux, desc: 'Open Source OS', color: '#fcc624' },
      { name: 'Vercel', icon: SiVercel, desc: 'Deployment', color: '#000000' },
      { name: 'Postman', icon: SiPostman, desc: 'API Testing', color: '#ff6c37' },
    ]
  },
  {
    title: 'Design & Database',
    tag: 'DATA & INTERFACES',
    skills: [
      { name: 'MySQL', icon: SiMysql, desc: 'Relational DB', color: '#4479a1' },
      { name: 'PostgreSQL', icon: SiPostgresql, desc: 'Advanced SQL', color: '#4169e1' },
      { name: 'MongoDB', icon: SiMongodb, desc: 'NoSQL Database', color: '#47a248' },
      { name: 'Figma', icon: FaFigma, desc: 'UI/UX Design', color: '#f24e1e' },
      { name: 'Canva', icon: SiCanva, desc: 'Graphic Design', color: '#00c4cc' },
    ]
  }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All')

  const displayedCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.title === activeTab)

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden bg-white border-t border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#52525b] uppercase">
                CAPABILITIES // STACK
              </span>
              <span className="h-px w-10 bg-[#d4d4d8]"></span>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-[#fbb03b] text-[#0a0a0a] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
                TECH ARSENAL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a] uppercase">
              TOOLS & <span className="text-[#1d4ed8]">TECHNOLOGIES.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#52525b] max-w-md font-medium leading-relaxed">
            I use modern tools and technologies to build fast, reliable, and user-friendly web applications.
          </p>
        </div>

        {/* Filter Navigation Tabs - Active tab turns solid black (#0a0a0a) */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e4e4e7] pb-4">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-all ${
              activeTab === 'All'
                ? 'bg-[#0a0a0a] text-white shadow-sm'
                : 'bg-[#f4f4f5] text-[#52525b] hover:bg-[#e4e4e7] hover:text-[#0a0a0a]'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-all ${
                activeTab === cat.title
                  ? 'bg-[#0a0a0a] text-white shadow-sm'
                  : 'bg-[#f4f4f5] text-[#52525b] hover:bg-[#e4e4e7] hover:text-[#0a0a0a]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Categorized Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center justify-between border-l-4 border-[#fbb03b] pl-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0a0a0a]">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[11px] font-bold text-[#71717a] uppercase tracking-wider">
                    {category.tag}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold bg-[#f4f4f5] px-2.5 py-1 rounded text-[#52525b]">
                  {category.skills.length} Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl border border-[#e4e4e7] bg-[#f8f9fa] hover:bg-white hover:border-[#0a0a0a] transition-all duration-200 hover:-translate-y-1 hover:shadow-md group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#e4e4e7] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      <skill.icon className="text-2xl transition-colors" style={{ color: skill.color }} />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-base text-[#0a0a0a] tracking-tight group-hover:text-[#1d4ed8] transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs font-medium text-[#71717a] leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
