import React from 'react'
import Carousel from 'react-elastic-carousel'
import Slider from 'react-slick'
import img from '../../assets/b1.png'
import img2 from '../../assets/b2.png'
import img3 from '../../assets/b3.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel = () => {

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1},
  //   { width: 800, itemsToShow: 2 },
  //   { width: 1200, itemsToShow: 3}
  // ]

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
  };

  return (
    <div>
        {/* <Carousel breakPoints={breakPoints} enableAutoPlay showArrows={false} > */}
        <Slider {...settings}>
        <div className='h-[500px]'>
          <img src={img} alt='' />
        </div>
        <div className='h-[500px]'>
          <img src={img2} alt='' />
        </div>
        <div className='h-[500px]'>
          <img src={img3} alt='' />
        </div>
        </Slider>
    </div>
  )
}

export default HeroCarousel