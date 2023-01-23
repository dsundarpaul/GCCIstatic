import { TextField, Button, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'

const PayerRequest = () => {

  const [payerReq, setPayerReq] = useState({
    name: '', message: ''
  })

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(payerReq);  

    clear();
  }

  const clear = () => {
    setPayerReq({ name: '', message: '' })
  }
  
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <Typography variant='h4' className='text-[#C10000]'>PAYER REQUEST</Typography>
      </div>
      <div className='mb-20 mt-10 mx-24'>
        <form container spacing={4} className='w-full flex justify-center h-auto' onSubmit={handleContactSubmit}>
          <div className='w-full'>
            <Grid container>
              <Grid item sx={12} md={6}>
                <TextField 
                  name="name" 
                  label="Name" 
                  variant='outlined' 
                  className='w-full !my-4 !mr-2'
                  required
                  value={payerReq.name}
                  onChange={(e) => setPayerReq({ ...payerReq, name: e.target.value })} 
                />
              </Grid>
              <Grid item sx={12} md={6}>
                <TextField 
                  name="phone" 
                  label="Phone Number" 
                  variant='outlined' 
                  className='w-full !my-4 !ml-2'
                  required
                  value={payerReq.name}
                  onChange={(e) => setPayerReq({ ...payerReq, name: e.target.value })} 
                />
              </Grid>
            </Grid>
            <div>
              <TextField 
                label="Payer Request" 
                variant='outlined' 
                multiline
                rows={4} 
                required
                className='w-full !my-4 scroll-w-4'
                value={payerReq.message}
                onChange={(e) => setPayerReq({ ...payerReq, message: e.target.value })} 
              />
            </div>
            <div className='w-full flex justify-center mt-4 h-10'>
              <Button 
                variant="contained"
                size="large"
                className='!text-2xl !bg-[#FF4949]'
                type="sumbit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PayerRequest