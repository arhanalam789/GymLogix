import React from 'react'
import Navbar from './Navbar'
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