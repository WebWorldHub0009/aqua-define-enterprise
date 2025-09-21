import React from 'react'
import HeroSection from '../components/Hero'
import AboutSection from '../components/AboutUs'
import WhyChooseUs from "../components/WhyChooseUs"
import HowItWorks from '../components/HowItWork'
import Faq from "../components/Faq"

const Home = () => {
  return (
  <>
  <HeroSection/>
  <AboutSection/>
  <WhyChooseUs/>
  <HowItWorks/>
  <Faq/>
  </>
  )
}

export default Home