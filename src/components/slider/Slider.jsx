import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useContext } from 'react';
import { Context } from '../../Context';
import SliderItem from '../SliderItem/SliderItem';

const Slider = () => {
    const {categories} = useContext(Context)

    const slideItem = categories.map(item =>{
        return(
            <SwiperSlide key={item.id}>
                <SliderItem img={item.image}/>
            </SwiperSlide>
        )
    })

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded"
      >
        {slideItem}
      </Swiper>
    </>
  );
}


export default Slider