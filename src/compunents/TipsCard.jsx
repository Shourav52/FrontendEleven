import React from 'react'
import tip1 from '../assets/Tip1.jpeg'
import tip2 from '../assets/tip3.jpeg'
import tip3 from '../assets/tip2.png'

const TipsCard = () => {
    return (
       <div className='ml-10 mr-10 mt-20 space-y-5'>
        <h1 className='text-center text-4xl font-extrabold text-red-500 mb-10'>Tips for Blood Donation</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 '>
        
         <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-full  h-70'
                    src={tip3}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Can I Donate Blood? Check Your Eligibility
                </h2>
                <p>Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more.</p>
                <button className="btn w-full bg-red-500 text-white font-bold rounded-lg">Learn More About</button>
            </div>
        </div>
         <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-full  h-70'
                    src={tip1}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    How to become a blood donor - spunout
                </h2>
                <p>Check eligibility, register at a donation center, complete a quick health screening, and donate safely. Your blood can save lives.🩸</p>
                
                    <button className="btn w-full bg-red-500 text-white font-bold rounded-lg">Learn More About</button>
               
            </div>
        </div>
         <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-full  h-70'
                    src={tip2}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Help Sickle Cell Patients
                </h2>
                <p>Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need. </p>
                <button className="btn w-full bg-red-500 text-white font-bold rounded-lg">Learn More About</button>
            </div>
        </div>
       </div>
       </div>
    )
}

export default TipsCard
