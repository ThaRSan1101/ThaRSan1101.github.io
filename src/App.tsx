import React from 'react'
import Topbar from './components/Topbar'
import SideNavigation from './components/SideNavigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div style={{backgroundColor: '#0a0a0a', color: '#fafafa'}}>
      <Topbar />
      <SideNavigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
