import React from 'react'
import event1 from '../assets/events.jpg'

const Events = () => {
  return (
    <div className='  display:flex ml-[250px] mr-[250px] mt-[100px]'>
    <div className='  display:flex '>

      <h1 className='  text-[#B6231F] font-bold text-5xl' >EVENTS</h1>
      <h2 className=' flex text-[#B6231F]  text-xl mt-[30px]' >Event1</h2>
      <div className='flex justify-center'>
      <img  src={ event1 } className='w-[800px] mt-[50px]' ></img>
      </div>
      <h2 className='flex align-end ' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
      <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
</div>

<div className='  display:flex '>

      <h2 className=' flex text-[#B6231F]  text-xl mt-[30px]' >Event2</h2>
      <div className='flex justify-center'>
      <img  src={ event1 } className='w-[800px] mt-[50px]' ></img>
      </div>
      <h2 className='flex align-end ' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
      <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
</div>

<div className='  display:flex '>

      <h2 className=' flex text-[#B6231F]  text-xl mt-[30px]' >Event3</h2>
      <div className='flex justify-center'>
      <img  src={ event1 } className='w-[800px] mt-[50px]' ></img>
      </div>
      <h2 className='flex align-end ' > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>
      <hr className=' display:flex mt-[10px] h-[1.5px] bg-black'></hr>
</div>



</div>



      
  )
}

export default Events