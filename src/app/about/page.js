import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import History from './History'
import AimGoal from './AimGoal'
import Team from './Team'
import Footer from './Footer'
const page = () => {
  return (
    <>
    <Navbar />
    <Herosection />
    <History />
    <AimGoal />
    <Team />
    <Footer />
    </>
  )
}

export default page