import React from 'react'
import Slider from '../compunents/Slider'
import FeaturedSection from '../compunents/FeaturedSection'
import TipsCard from '../compunents/TipsCard'
import WaySection from '../compunents/WaySection'
import ConectSection from '../compunents/ConectSection'
import EmargencyBloodRequest from '../compunents/EmargencyBloodRequest'
import OurImpact from '../compunents/OurImpact'
import HomeWorks from '../compunents/HomeWorks'
import EligibilitySafety from '../compunents/EligibilitySafety'
import DonorStories from '../compunents/DonorStories'
import Newsletter from '../compunents/Newsletter'
import FAQ from '../compunents/FAQ'

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedSection></FeaturedSection>
      <TipsCard></TipsCard>
      <WaySection></WaySection>
      <EmargencyBloodRequest></EmargencyBloodRequest>
      <OurImpact></OurImpact>
      <HomeWorks></HomeWorks>
      <EligibilitySafety></EligibilitySafety>
      <DonorStories></DonorStories>
      <ConectSection></ConectSection>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
      
    </div>
  )
}

export default Home
