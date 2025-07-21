import React from 'react'
import Navbar from '../../Home/Navbar'
import SearchBar from '../../Home/Searchbar'
import HeroSection from '../../Home/HeroSection'
import Footer from '../../Home/Footer'
import Testimonials from '../../Home/Testimonials'
import KeySellingPoints from '../../Home/keysellingpoint'
import FeatureCarousel from '../../Home/Featurecarousel'
const page = () => {
  return (
    <>
    <Navbar />
    <SearchBar />
    <HeroSection />
    <FeatureCarousel />
    <KeySellingPoints />
    <Testimonials />
    <Footer />
    </>
  )
}

export default page