import React from 'react'
import Navbar from '../../../Home/Navbar'
import BlogHero from './Bloghero'
import Blogposts from './Blogposts'
import Footer from './Footer'
const page = () => {
  return (
    <>
      <Navbar />
      <BlogHero />
      <Blogposts />
      <Footer />
    </>
  )
}

export default page