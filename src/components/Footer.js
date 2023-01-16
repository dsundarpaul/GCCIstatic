import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='w-100 bg-[#FFE15D] border-4 border-[#E4A23E] h-auto'>
      <div className='mx-10 my-8 flex justify-evenly'>

        {/* FOOTER DIVISON 1 */}
        <div className='w-full'>

          <dib className='text-4xl font-extrabold'>GCCI</dib>
          <div className='mt-8'>
            <div className='text-2xl'>
              THE WORD OF GOD IS OUR <b>AUTHORITY</b>
            </div>
            <div className='mt-4 flex justify-end'>
              II Timothy 3:16 & Proverbs 30:5
            </div>
          </div>
        </div>

        {/* FOOTER DIVISION 2 */}
        <div className='w-full flex justify-center leading-10'>
          <ul>
            <li onClick={() => navigate('/home')} className='hover:cursor-pointer hover:bg-red-300'>Home</li>
            <li onClick={() => navigate('/about-us')} className='hover:cursor-pointer'>About Us</li>
            <li onClick={() => navigate('/events')} className='hover:cursor-pointer'>Events</li>
            <li onClick={() => navigate('/offerings')} className='hover:cursor-pointer'>Offerings</li>
            <li onClick={() => navigate('/contact-us')} className='hover:cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        {/* FOOTER DIVISION 3 */}
        <div className='w-full flex justify-center'>
          <div>
            <div>
              Great Commission Church Int<br />
              Mohawk Road West, <br />
              Toronto
            </div>
            <div className='mt-8'>999-999-9999</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer