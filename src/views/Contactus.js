import { Card, TextField, Grid, Button, Typography } from '@mui/material'
import React from 'react'
import Maps from '../components/Maps'

const Contactus = () => {
  return (
    <div>

      <div className='flex justify-center mt-10'>
        <Typography variant='h2' className='text-[#C10000]'>CONTACT US</Typography>
      </div>

      <div className='my-24'>

        <form container spacing={4} className='w-full flex justify-center h-auto'>
          <div>
            <div>
              <TextField label="Name" variant='outlined' className='w-[350px] !my-4' />
            </div>
            <div>
              <TextField label="Email" variant='outlined' type='email' className='w-[350px] !my-4' />
            </div>
            <div>
              <TextField label="Phone No" variant='outlined' className='w-[350px] !my-4' />
            </div>
            <div>
              <TextField 
                label="Message" 
                variant='outlined' 
                multiline
                rows={4} 
                className='w-[350px] !my-4'
              />
            </div>
            <div className='w-full flex justify-center mt-4'>
              <Button 
                variant="outlined"
                size="large"
                className='!text-2xl w-full'
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>


      <Maps />
    </div>
  )
}

export default Contactus