import { useState } from 'react'
import Navbar from './components/common/Navbar'
import About from './components/pages/About'
import Footer from './components/common/Footer'
import Skills from './components/pages/Skills'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import Hero from './components/pages/Hero'
 

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>

    <Footer/>
    </>
  )
}

export default App
