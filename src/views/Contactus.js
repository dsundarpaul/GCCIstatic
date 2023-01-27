import { Card, TextField, Grid, Button, Typography, CardMedia, CardContent } from '@mui/material'
import React, { useState } from 'react'
import Maps from '../components/Maps'
import PayerRequest from '../components/PayerRequest/PayerRequest'
import iconPhone from '../assets/i7.png'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

      <div className='w-full flex justify-center'>
        <Grid container>

          <Grid item md={6} sm={12}>

            <Grid container>
              <Grid item md={6} sm={12} className='flex justify-center'>
                <Card className='contactCard hover:scale-110'>
                  <div className='flex justify-center'>
                    <div className='border-4 border-black rounded-[50%] w-28 h-28 flex justify-center items-center'>
                      {/* <img src='' alt='k' /> */}
                      <PhoneAndroidIcon fontSize='large' />
                      
                    </div>
                  </div>
                  <CardContent className='text-center'>
                    <Typography variant='body' color='textSecondary'>
                      Phone :
                    </Typography>
                    <br />
                    <Typography variant='body' color='primary'>
                      999-999-9999
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

            
            <Grid item md={6} sm={12} className='flex justify-center'>
              <Card className='contactCard hover:scale-110'>
                <div className='flex justify-center'>
                  <div className='border-4 border-black rounded-[50%] w-28 h-28 flex justify-center items-center'>
                    {/* <img src='' alt='k' /> */}
                    <EmailIcon fontSize='large' />
                    
                  </div>
                </div>
                <CardContent className='text-center'>
                  <Typography variant='body' color='textSecondary'>
                    Email :
                  </Typography>
                  <br />
                  <Typography variant='body' color='primary'>
                    example@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>


            <Grid item md={12} sm={12} className='flex justify-center'>
              <Card className='contactCard hover:scale-110'>
                <div className='flex justify-center'>
                  <div className='border-4 border-black rounded-[50%] w-28 h-28 flex justify-center items-center'>
                    {/* <img src='' alt='k' /> */}
                    <LocationOnIcon fontSize='large' />
                    
                  </div>
                </div>
                <CardContent className='text-center'>
                  <Typography variant='body' color='textSecondary'>
                    Phone :
                  </Typography>
                  <br />
                  <Typography variant='body' color='primary'>
                    999-999-9999
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            </Grid>
          </Grid>

          {/* CONTACT FORM */}
          <Grid item md={6} sm={12}>
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
        </Grid>
        
        </Grid>
      </div>

      <PayerRequest />  

      <Maps />
    </div>
  )
}

export default Contactus