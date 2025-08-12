import { useState } from 'react'
import Hero from './components/Hero'
import Project from './components/Projects'
import About from './components/About'
import './App.css'


function App() {
  

  return (
    <div className='min-h-screen'>
   <Hero/>
   <Project/>
   <About/>
    </div>
  )
}

export default App
