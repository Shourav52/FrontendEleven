import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../compunents/Navbar'
import Footer from '../compunents/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default MainLayout
