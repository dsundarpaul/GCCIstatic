import { Typography } from '@mui/material'
import React from 'react'

const VisionMissionBanner = () => {
  return (
    <div className='banner__pad__marg text-center'>
      <div className='mx-10'>
        <div>
          <Typography variant='h3' className='text-[#C10000] !mb-10'>VISION</Typography>
          <div className='text-fill text-2xl leading-relaxed flex items-center'>
            OUR VISION IS TO CREATE ENVIRONMENTS WHERE PEOPLE ARE ENCOURAGED AND INSPIRED TO DRAW CLOSER TO GOD, TO CONNECT WITH OTHERS IN MEANINGFUL AND LIFE GIVING RELATIONSHIPS, AND TO DISCOVER THEIR GIFTS AND USE THEM FOR THE BETTERMENT OF OTHERS.
          </div>
        </div>
        <div className='banner__pad__marg'>
          <Typography variant='h3' className='text-[#C10000] !mb-10'>OUR MISSION IS TO LEAD PEOPLE INTO A LIFE-TRANSFORMING RELATIONSHIP WITH JESUS CHRIST </Typography>
          <div className='text-fill text-2xl leading-relaxed flex items-center'>
          Whether it be through our Sunday services, small groups, mission trips, youth services, counseling, or growth classes, GCCI believes in giving you the tools you need to have a deeper relationship with God through Lord Jesus Christ.          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionMissionBanner