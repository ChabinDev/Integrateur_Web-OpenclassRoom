import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
    return (
      <main>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
      </main>
  )
}

export default App