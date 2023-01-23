import { Typography } from '@mui/material'
import React from 'react'
import img from '../../assets/img3.png'
const AboutPastor = () => {
  return (
    <div className='w-full banner__pad__marg'>
      <Typography variant='h3' className='text-[#C10000] text-center'>Pastor. Sam Nathan</Typography>
        <div className='my-10 w-full flex '>
            <div className='w-full flex justify-center'>
                <img src={img} alt='img' className='h-[500px] w-[530px]' />
            </div>
            <div className='w-full text-fill text-lg flex items-center border-l-2 border-[#C10000]'>
              <div className='mx-20'>
                <b className='text-3xl'>Sam Nathan</b> is originally from Nathaniel Campus Sakhinetipalli India. Sam’s Grandfather (a Farmer) became a Christian after a Missionary from the United States visited his home three generation ago.  From there a heritage of ministry was born in their family tree. Sam is the third generation in his family to serve the Lord as a Pastor. Sam was called to a position of leadership overseas within the Body of Christ when he moved to Canada in 2003.  He was the founder pastor of the Great Commission Church International in Toronto. He has now ministered in the church for more then 20 years overseas and in Canada.
                <br /><br />
                Sam has recently moved to Kitchener and is passionate about introducing university students and other people to Jesus Christ and seeing their lives transformed. On September 29, 2019 Sam and his wife Melissa planted The Great Commission Church in Kitchener.   They continue to work diligently towards the vision they believe God has put in their hearts. 
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPastor