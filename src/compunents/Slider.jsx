import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import { Link } from 'react-router';


const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="relative">
          <img className='w-full h-[400px] object-cover' src={img1} alt="" />
          <div className="absolute inset-0 bg-black/40"></div>
          <Link to={'/login'} className='absolute inset-0 flex items-center justify-center text-center px-4 text-3xl md:text-5xl font-bold text-white'>
            Join As A Donor
          </Link>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img className='w-full h-[400px] object-cover' src={img2} alt="Adoptions" />
          <div className="absolute inset-0 bg-black/30"></div>
          <Link to={'/search'} className='absolute inset-0 flex items-center justify-center text-center px-4 text-3xl md:text-5xl font-bold text-white'>
            Search Donors
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
