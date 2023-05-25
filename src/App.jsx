import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/HomePage'
import AboutPage from '../src/pages/AboutPage'
import ContactPage from '../src/pages/ContactPage'
import MenuPage from '../src/pages/MenuPage'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
    </>
  )
}

export default App