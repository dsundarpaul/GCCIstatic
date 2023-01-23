import React from 'react'
import header_img from '../assets/events.jpg' 
import AboutPastor from '../components/AboutPastor/AboutPastor'
import ServiceTimingsBanner from '../components/Banners/ServiceTimingsBanner'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Maps from '../components/Maps'
import MinistriesBanner from '../components/MinistriesBanner/MinistriesBanner'
import PayerRequest from '../components/PayerRequest/PayerRequest'
import VisionMissionBanner from '../components/VisionMissionBanner/VisionMissionBanner'
// import ServiceTimingsBanner from '../assets/banners/ServiceTImingsBanner.png'

const Home = () => {
  return (
    <div className='w-full h-auto'>

      <div id='hero-header'>
        <img src={header_img} alt='' className='w-full' />
      </div>
      <VisionMissionBanner />
      <HeroCarousel />

      <div className='w-full flex justify-center my-10'>
        <ServiceTimingsBanner />
      </div>
      <MinistriesBanner />
      <PayerRequest />

      <div className="map_main w-full">
        <div className="map-responsive">          
          <Maps />

        </div>
      </div>
    </div>
  )
}

export default Home