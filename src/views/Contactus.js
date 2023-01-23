import { Card, TextField, Grid, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Maps from '../components/Maps'
import PayerRequest from '../components/PayerRequest/PayerRequest'

const Contactus = () => {
  
  const [contactData, setContactData] = useState({
    name: '', email: '', phone: '', message: ''
  })

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);  

    clear();
  }

  const clear = () => {
    setContactData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>

      <div className='flex justify-center mt-10'>
        <Typography variant='h2' className='text-[#C10000]'>CONTACT US</Typography>
      </div>

      <div className='mb-20 mt-10'>

        <form container spacing={4} className='w-full flex justify-center h-auto' onSubmit={handleContactSubmit}>
          <div>
            <div>
              <TextField 
                name="name" 
                label="Name" 
                variant='outlined' 
                className='w-[350px] !my-4'
                required
                value={contactData.name}
                onChange={(e) => setContactData({ ...contactData, name: e.target.value })} 
              />
            </div>
            <div>
              <TextField 
                name="email" 
                label="Email" 
                variant='outlined' 
                type='email' 
                className='w-[350px] !my-4'
                required
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}  
              />
            </div>
            <div>
              <TextField 
                name="phone" 
                label="Phone No" 
                variant='outlined' 
                className='w-[350px] !my-4'
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}  
              />
            </div>
            <div>
              <TextField 
                label="Message" 
                variant='outlined' 
                multiline
                rows={4} 
                required
                className='w-[350px] !my-4 scroll-w-4'
                value={contactData.message}
                onChange={(e) => setContactData({ ...contactData, message: e.target.value })} 
              />
            </div>
            <div className='w-full flex justify-center mt-4'>
              <Button 
                variant="contained"
                size="large"
                className='!text-2xl w-full !bg-[#FF4949]'
                type="sumbit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>

      <PayerRequest />  

      <Maps />
    </div>
  )
}

export default Contactus