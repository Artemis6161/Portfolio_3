import { useState } from 'react'
import Hero from './components/Hero'
import Project from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SocialSidebar from './components/SocialSidebar'
import Footer from './components/Footer'
import './App.css'


function App() {
  

  return (
    <>
    <SocialSidebar />
 <main className='min-h-screen'>
   <Hero/>
   <Project/>
   <About/>
   <Skills/>
   <Contact/>
    </main>
      <Footer />
    </>
   
  )
}

export default App
