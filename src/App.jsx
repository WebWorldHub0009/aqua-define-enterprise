import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import Contact from './pages/Contact'
import CertificatePage from './pages/Certificates'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/certificates' element={<CertificatePage/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App