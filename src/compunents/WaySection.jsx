import React from 'react'
import w1 from '../assets/w1.avif'
import w2 from '../assets/w3.jpeg'
import w3 from '../assets/w2.jpg'
const WaySection = () => {
    return (
        <div className='ml-10 mr-10 mt-20 space-y-5 mb-10'>
            <h1 className='text-4xl text-center font-bold' >More Ways You Can Make a Difference</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-5'>
                <div className="card bg-base-100 w-96 shadow-sm  space-y-3.5 pb-5">
                    <figure>
                        <img className='w-full h-55'
                            src={w1}
                            alt="Shoes" />
                    </figure>
                    <div className='pl-4 space-y-2'>
                        <h1 className='text-2xl font-bold'>Host a Blood Drive</h1>
                        <h1><a className='text-blue-500' href="">Apply to Become a Host...</a></h1>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm space-y-3.5 pb-5">
                    <figure>
                        <img className='object-cover w-full h-55'
                            src={w2}
                            alt="Shoes" />
                    </figure>
                    <div className='pl-4 space-y-2'>
                        <h1 className='text-2xl font-bold'>Make a Financial Donation</h1>
                        <h1><a className='text-blue-500' href="">Donate Now...</a></h1>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm space-y-3.5 pb-5">
                    <figure>
                        <img className='w-full h-55'
                            src={w3}
                            alt="Shoes" />
                    </figure>
                    <div className='pl-4 space-y-2'>
                        <h1 className='text-2xl font-bold'>Become a Volunteer</h1>
                        <h1><a className='text-blue-500' href="">Learn More...</a></h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WaySection
