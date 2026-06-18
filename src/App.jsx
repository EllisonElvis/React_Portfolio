import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>


      <BackToTop />
      <Footer />

    </>
  )
}

export default App


