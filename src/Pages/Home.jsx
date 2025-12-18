import React from 'react'
import Slider from '../compunents/Slider'
import FeaturedSection from '../compunents/FeaturedSection'
import TipsCard from '../compunents/TipsCard'
import WaySection from '../compunents/WaySection'
import ConectSection from '../compunents/ConectSection'

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedSection></FeaturedSection>
      <TipsCard></TipsCard>
      <WaySection></WaySection>
      <ConectSection></ConectSection>
    </div>
  )
}

export default Home
