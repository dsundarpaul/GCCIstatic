import React from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material'

const Offerings = () => {
  return (
    <div>
      
      <div className='flex justify-center mt-10'>
        <Typography variant='h2' className='text-[#C10000]'>TITHES AND OFFERINS</Typography>
      </div>

      <form container spacing={4} className='w-full flex justify-center h-auto my-12'>
          <div className='w-[400px]'>
            <Grid container>
              <Grid item sx={12} md={6}>
                <TextField label="First Name" variant='outlined' className='w-full !mr-2 !my-4' />
              </Grid>
              <Grid item sx={12} md={6}>
                <TextField label="Last Name" variant='outlined' className='w-full !ml-2 !my-4' />
              </Grid>
            </Grid>
            <div>
              <TextField label="Email" variant='outlined' type='email' className='w-full !my-4' />
            </div>
            <div>
              <TextField label="Phone No" variant='outlined' className='w-full !my-4' />
            </div>
            <div>
              <TextField 
                label="Message" 
                variant='outlined' 
                multiline
                rows={4} 
                className='w-full !my-4'
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
  )
}

export default Offerings