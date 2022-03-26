import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Recommend from './components/Recommend'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Hero from './components/Hero'

export default function App() {
  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
    <Hero></Hero>
    <Services></Services>
    <Recommend></Recommend>
    <Testimonial></Testimonial>
    <Footer></Footer>
    </>
  )
}

