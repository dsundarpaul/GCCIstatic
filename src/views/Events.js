import React, { useState } from 'react'
import { Typography, ImageList, ImageListItem, CardActionArea, Modal, Box } from '@mui/material'
import event1 from '../assets/events.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  // height: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];


const Events = () => {

  const [modalVisibility, setModalVisibility] = useState(false)
  const [currentImg, setCurrentImg] = useState('')

  const handleImageClick = (e) => {
    console.log(e.target.src)
    setCurrentImg(e.target.src)
    setModalVisibility(true)
  }

  const handleModalClose = () => setModalVisibility(false) 

  return (
    // <div className='display:flex ml-[250px] mr-[250px] mt-[100px]'>
    //   <div className='  display:flex '>
    //     <h1 className='  text-[#B6231F] font-bold text-5xl flex justify-center text-[52px]' >EVENTS</h1>
    //     <h2 className=' flex text-[#B6231F]  font-serif font-bold text-xl text-[18px] mt-[30px]' >Event1</h2>
    //     <div className='flex justify-center'>
    //       <img  src={ event1 } className='rounded-lg shadow-md shadow-black/50 w-[800px] mt-[50px]' alt="img"></img>
    //     </div>
    //     <h2 className='flex align-end mt-[25px] font-serif text-[18px]' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
    //     <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
    //   </div>

    //   <div className='  display:flex '>
    //     <h2 className=' flex text-[#B6231F]  font-serif font-bold text-xl text-[18px] mt-[30px]' >Event1</h2>
    //     <div className='flex justify-center'>
    //       <img  src={ event1 } className='  rounded-lg shadow-md shadow-black/50 w-[800px] mt-[50px]' alt='img'></img>
    //     </div>
    //     <h2 className='flex align-end mt-[25px] font-serif text-[18px]' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
    //     <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
    //   </div>

    //   <div className='  display:flex '>
    //     <h2 className=' flex text-[#B6231F]  font-serif font-bold text-xl text-[18px] mt-[30px]' >Event1</h2>
    //     <div className='flex justify-center'>
    //       <img  src={ event1 } className='  rounded-lg shadow-md shadow-black/50 w-[800px] mt-[50px]' alt='img'></img>
    //     </div>
    //     <h2 className='flex align-end mt-[25px] font-serif text-[18px]' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
    //     <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
    //   </div>

    //   <div className='  display:flex '>
    //     <h2 className=' flex text-[#B6231F]  font-serif font-bold text-xl text-[18px] mt-[30px]' >Event1</h2>
    //     <div className='flex justify-center'>
    //       <img  src={ event1 } className='  rounded-lg shadow-md shadow-black/50 w-[800px] mt-[50px]' alt='img'></img>
    //     </div>
    //     <h2 className='flex align-end mt-[25px] font-serif text-[18px]' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
    //     <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
    //   </div>
    // </div>


    <div>   

      <div className='flex justify-center mt-10'>
        <Typography variant='h2' className='text-[#C10000]'>GALLERY</Typography>
      </div>

      <div className='w-full flex justify-center'>
        <ImageList md={{ width: 100, height: 'auto' }} sx={{ width: 700, height: 1000, overflow: 'auto !important' }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <CardActionArea onClick={(e) => handleImageClick(e)}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className='w-full'
              /> 
            </CardActionArea>
          </ImageListItem>
        ))}
      </ImageList>
      </div>

      <Modal 
        open={modalVisibility}
        onClose={handleModalClose}
      >
        <Box sx={style}>
          <img src={currentImg} alt='' className='w-full' />
        </Box>
      </Modal>

    </div>
  )
}

export default Events