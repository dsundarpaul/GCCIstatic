import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import cardimg from '../../assets/s1.png'

const MinistriesBanner = () => {

  const navigate = useNavigate()
  return (
    <div>
      <Grid container className='w-full flex justify-center'>
        <Grid item className='!mx-2'>
          <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/about-us')} className='hover:scale-105'>
            <CardMedia
              component="img"
              height="194"
              image={cardimg}
              alt="Paella dish"
            />
            <CardContent className='text-center'>
              <Typography variant='h5'>
                Woman’s Ministry
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item className='!mx-2'>
          <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/about-us')} className='hover:scale-105'>
            <CardMedia
              component="img"
              height="194"
              image={cardimg}
              alt="Paella dish"
            />
            <CardContent className='text-center'>
              <Typography variant='h5'>
                Children’s Ministry
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item className='!mx-2'>
          <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/about-us')} className='hover:scale-105'>
            <CardMedia
              component="img"
              height="194"
              image={cardimg}
              alt="Paella dish"
            />
            <CardContent className='text-center'>
              <Typography variant='h5'>
                Couples’s Ministry
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item className='!mx-2'>
          <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/about-us')} className='hover:scale-105'>
            <CardMedia
              component="img"
              height="194"
              image={cardimg}
              alt="Paella dish"
            />
            <CardContent className='text-center'>
              <Typography variant='h5'>
                Family’s Ministry
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default MinistriesBanner