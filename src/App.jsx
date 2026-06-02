import React from 'react'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Form from './pages/Form'
import { Routes, Route } from 'react-router-dom'
import '../src/css/Index.css'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      
      
      <section className='appsection' id='home'>
        <Header />
      </section>

      <section className='appsection' id='about'>
        <About />
      </section>

      <section className='appsection' id='services'>
        <Services />
      </section>


      <section className='appsection' id='contact'>
        <Contact />
      </section>

      <BackToTop />


    </>
  )
}

export default App

      // <Routes>
      //   <Route path='/' element={<Home />} />
      //   <Route path='/about' element={<About />} />
      //   <Route path='/projects' element={<Projects />} />
      //   <Route path='/skills' element={<Skills />} />
      //   <Route path='/contact' element={<Contact />} />
      // </Routes>
