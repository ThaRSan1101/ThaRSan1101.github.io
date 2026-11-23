import React from 'react'
import Topbar from './components/Topbar'
import SideNavigation from './components/SideNavigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#0a0a0a]">
      <Topbar />
      <SideNavigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
