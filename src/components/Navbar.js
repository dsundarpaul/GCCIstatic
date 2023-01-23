import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    // <div className='w-100 bg-[#FFF] h-auto items-center sticky top-0 z-10'>
    //   <div className='flex justify-between items-center mx-10 reponsive__nav '>
    //     <div>
    //       <img src={logo} alt='logo' className='w-[150px]' />
    //     </div>
    //     <div className='text-[35px] navbar__hear__text font-medium'>
    //       THE GREAT COMMISSION CHURCH<br /> INTERNATIONAL
    //     </div>
    //   </div>
    //   <div className='bg-[#C10000] text-white text-xl w-full font-normal border-[1px] !border-black'>
    //     <ul className='navbar__menu__parent h-auto'>
    //       <li className='navbar__menu' onClick={() => navigate('/home')}> 
    //         Home
    //       </li>
    //       <li className='navbar__menu' onClick={() => navigate('/about-us')}>
    //         About Us
    //       </li>
    //       <li className='navbar__menu' onClick={() => navigate('/events')}>
    //         Events
    //       </li>
    //       <li className='navbar__menu' onClick={() => navigate('/offerings')}>
    //         Offerings
    //       </li>
    //       <li className='navbar__menu' onClick={() => navigate('/contact-us')}>
    //         Contact us
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 sticky top-0 z-10">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap">THE GREAT COMMISSION CHURCH<br /> INTERNATIONAL</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent hover:scale-110 md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/about-us" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-grey-200 hover:scale-110 md:border-0 md:hover:text-blue-700 md:p-0">About</a>
        </li>
        <li>
          <a href="/events" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-grey-200 hover:scale-110 md:border-0 md:hover:text-blue-700 md:p-0">Events</a>
        </li>
        <li>
          <a href="/ministries" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-grey-200 hover:scale-110 md:border-0 md:hover:text-blue-700 md:p-0">ministries</a>
        </li>
        <li>
          <a href="/offerings" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-grey-200 hover:scale-110 md:border-0 md:hover:text-blue-700 md:p-0">Offering</a>
        </li>
        <li>
          <a href="/contact-us" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-grey-200 hover:scale-110 md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 

  )
}

export default Navbar