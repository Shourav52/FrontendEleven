import React from 'react'
import img3 from '../assets/emg.jpg'
import MyContainer from './MyContainer'
const FeaturedSection = () => {
  return (
    <div className='w-full h-40 bg-red-500 flex justify-center space-x-4'>
      <img src={img3} alt="" />
      <div className='text-white flex flex-col justify-center justify-items-center'>
        <h2 className='font-extrabold text-2xl'>EMERGENCY NEED Blood!</h2> 
        <p >Winter weather is causing a decline in donations. With more severe weather predicted, type O blood donors are needed to give to prevent a shortage. Patients need your help now.  <a  className="font-extrabold underline" href="">Make your appointment...</a></p>
      </div>
    </div>
  )
}

export default FeaturedSection
