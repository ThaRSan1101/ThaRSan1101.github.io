import React from 'react'
import Topbar from './components/Topbar'
import SideNavigation from './components/SideNavigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{backgroundColor: '#0a0a0a', color: '#fafafa'}}>
      <Topbar />
      <SideNavigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
