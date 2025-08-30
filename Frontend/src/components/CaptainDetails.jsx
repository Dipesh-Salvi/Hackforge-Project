import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src='public/images/defult.jpg' alt="" />
          <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
        </div>
      </div>
      <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className='text-lg font-medium'>12</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        
      </div>
    </div>
  )
}

export default CaptainDetails
