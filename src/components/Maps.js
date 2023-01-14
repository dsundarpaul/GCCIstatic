import React from 'react'

const Maps = () => {
  return (
    <div>
        <iframe 
            className='w-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372437.55983200984!2d-80.37177545745051!3d43.17448349635604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b2039696a93%3A0xf9b471f52bdecd4!2sMOHAWK%20opposite%20WEST%2016TH!5e0!3m2!1sen!2sin!4v1673721605705!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            // style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title='maps'
          />
    </div>
  )
}

export default Maps