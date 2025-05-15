import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/> 
      <About/>
      <Services/> 
      <Projects/>
      <Pricing/>
      <Contact/>
      
    </div>
  )
}
