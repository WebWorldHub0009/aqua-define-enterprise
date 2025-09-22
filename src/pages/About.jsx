import React from 'react'
import AboutHero from '../components/AboutHero'
import TestimonialSlider from '../components/Testimonials'
import VisionMission from '../components/VisionMission'
import OurJourney from '../components/OurStory'
import StatsSection from '../components/StatsCounter'

const About = () => {
  return (
    <>
    <AboutHero/>
    <OurJourney/>
    <StatsSection/>
    <VisionMission/>
    <TestimonialSlider/>
    </>
  )
}

export default About