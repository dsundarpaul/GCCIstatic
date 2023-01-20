import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-100 bg-[#FFF] h-auto items-center sticky top-0 z-10'>
      <div className='flex justify-between items-center mx-10 reponsive__nav '>
        <div>
          <img src={logo} alt='logo' className='w-[150px]' />
        </div>
        <div className='text-[35px] navbar__hear__text font-medium'>
          THE GREAT COMMISSION CHURCH<br /> INTERNATIONAL
        </div>
      </div>
      <div className='bg-[#FFE15D] w-full font-normal'>
        <ul className='navbar__menu__parent'>
          <li className='navbar__menu' onClick={() => navigate('/home')}> 
            Home
          </li>
          <li className='navbar__menu' onClick={() => navigate('/about-us')}>
            About Us
          </li>
          <li className='navbar__menu' onClick={() => navigate('/events')}>
            Events
          </li>
          <li className='navbar__menu' onClick={() => navigate('/offerings')}>
            Offerings
          </li>
          <li className='navbar__menu' onClick={() => navigate('/contact-us')}>
            Contact us
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar