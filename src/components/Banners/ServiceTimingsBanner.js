import { Typography } from '@mui/material'
import React from 'react'
import './ServiceTimingsBannerStyles.css'

const ServiceTimingsBanner = () => {

  return (
    <div className='banner__pad__marg overflow w-full h-[500px] bg-[#F5F5DC] flex justify-center items-center'>

        {/* <div className='ring-container-right reponsive__banneer_serviceTimings'>
            <div className='gold-ring flex justify-center items-center'>
                <div className='inner-white'></div>
            </div>
        </div> */}
        <div className='main-content'>
            <Typography className='header'>Service Timings</Typography>
            <Typography className='content !lg:text-5xl !md:text-4xl'>Sunday 9:00-11:00am</Typography>
            <Typography className='content-link'>Online Serive: www.gcci/live.com</Typography>
        </div>
        {/* <div className='ring-container-left reponsive__banneer_serviceTimings'>
            <div className='gold-ring flex justify-center items-center'>
                <div className='inner-white'></div>
            </div>
        </div> */}
    </div>
  )
}

export default ServiceTimingsBanner