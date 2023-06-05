import React, { useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Avatar, Box, Paper} from '@mui/material'
interface SwiperSliderProps {
  items: string[];
}

const SwiperSlider = ({ items }:SwiperSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
    <Box 
    sx={{
        width: '100%',
        height:'100%',
        bottom:0,
       
        position:'absolute',
        // border:'1px solid red',
        p:2
    }}
    >
     <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) =>{}}
      onSlideChange={() => {}}
    >
      
   {
     [1,2,3,4,5].map((slide,index)=>{
      return(
        <SwiperSlide key={index}>
          <Paper elevation={2}
          sx={{
          width:'100%',
          height:'80%',
           borderRadius:'10px',
          // position:'relative',
         
          }}
          >
       <Avatar src='https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=2000'
        style={{
          width:'100%',
          height:'100%',
       
        }}
       variant='rounded'
       />
          </Paper>
        </SwiperSlide>
      )
     })
   }
      
    </Swiper>
    </Box>
    </>
  );
};

export default SwiperSlider;
