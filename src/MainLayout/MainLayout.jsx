import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../compunents/Navbar'
import Footer from '../compunents/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
