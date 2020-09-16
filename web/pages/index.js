import React from 'react'
import Home from '@@views/home'
import NavBar from '@@components/Layout/Navbars/Navbar'
import Footer from '@@components/Layout/Footers/Footer'

const HomePage = () => (
  <>
    <NavBar>
      <Home />
      <Footer />
    </NavBar>
  </>
)

export default HomePage
