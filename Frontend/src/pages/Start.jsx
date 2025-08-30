import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full' style={{ backgroundImage: "url('/images/Start-page.jpg')" }}>
        <img className="w-16 ml-8" src="/images/main-logo.png" alt="start" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started with Bin2Win</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start




// https://freelogopng.com/images/all_img/1659768779uber-logo-white.png
