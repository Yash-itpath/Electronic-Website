import React from 'react'
import Login from '../../component/Login'
import Banner from '../../component/banner'

function Contact() {
  return (
    <>
    <div className="pr-14 h-[286px]" style={{ backgroundColor: "#F2F0FF" }}>
      <h1 className='px-24 py-24 h-[36px] font-bold text-2xl font-josefin'>My Account</h1>
      <p></p>
    </div>

    
      <Login />
      <Banner />
    </>
  )
}

export default Contact