import React, { useEffect, useState } from 'react'
import './home.css'
import NavBar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/HeroSection/Hero'
import Testimonial from '../../Components/Testimonial/Testimonial'

// import NavBar from '../../Components/Navbar/NavBar'
const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Testimonial/>
    </div>
  )
}

export default Home