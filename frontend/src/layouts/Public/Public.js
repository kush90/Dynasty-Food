import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Public = () => {
  return (
    <div>
        <Navbar></Navbar>
    <main style={{margin:'10px'}}>
        <Outlet/>
    </main>
    <Footer></Footer>
    </div>
  )
}

export default Public;




