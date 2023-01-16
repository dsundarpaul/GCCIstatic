import React from 'react'
import header_img from '../assets/events.jpg' 
import AboutPastor from '../components/AboutPastor/AboutPastor'
import ServiceTimingsBanner from '../components/Banners/ServiceTimingsBanner'
import Maps from '../components/Maps'
import VisionMissionBanner from '../components/VisionMissionBanner/VisionMissionBanner'
// import ServiceTimingsBanner from '../assets/banners/ServiceTImingsBanner.png'

const Home = () => {
  return (
    <div className='w-full h-auto'>

      <div id='hero-header'>
        <img src={header_img} alt='' className='w-full' />
      </div>

      <VisionMissionBanner />

      <div className='w-full flex justify-center my-10'>
        <ServiceTimingsBanner />
      </div>

      <div className="map_main w-full">
        <div class="map-responsive">
          {/* <iframe
            className='w-full' 
            // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" 
            src="https://goo.gl/maps/QHdBrppnJtS8wfcE9" 
            width="600" 
            height="400" 
            frameborder="0" 
            // style="border:0; width: 100%;" 
            allowfullscreen="" 
            title='e'
          /> */}
          
          <Maps />

        </div>
      </div>
    </div>
  )
}

export default Home