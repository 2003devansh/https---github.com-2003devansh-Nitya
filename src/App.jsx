import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Bio from './components/Bio'

const App = () => {
  return (
    <div className=' font-["Satoshi"] text-white  bg-zinc-900 h-screen '>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Bio />
    </div>
  )
}

export default App