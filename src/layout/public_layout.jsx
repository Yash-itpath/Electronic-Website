import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'

function Publiclayout() {
  return (
    <>
       <div>
         <Header />
         <Outlet />
         <Footer />
       </div>
    </>
  )
}

export default Publiclayout