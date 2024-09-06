import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import About from './component/About'
import Career from './component/Career'
import Services from './component/Services'
import Home from './component/Home'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
