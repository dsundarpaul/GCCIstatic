import React from 'react'
import Carousel from 'react-elastic-carousel'
import img from '../../assets/b1.png'

const HeroCarousel = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3}
  ]

  return (
    <div>
        <Carousel breakPoints={breakPoints}>
          <div>
            <img src={img} alt='' width={200} />
          </div>
        </Carousel>
    </div>
  )
}

export default HeroCarousel