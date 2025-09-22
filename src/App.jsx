import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import Contact from './pages/Contact'
import CertificatePage from './pages/Certificates'
import About from './pages/About'
import Product from './pages/Product'
import PrivacyPolicy from './pages/PrivacyAndPolicy'
import TermsAndConditions from './pages/TermAndCondition'
import Service from './pages/Service'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/certificates' element={<CertificatePage/>}/>
      <Route path='/privacy&policy' element={<PrivacyPolicy/>}/>
      <Route path='/term&condition' element={<TermsAndConditions/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App