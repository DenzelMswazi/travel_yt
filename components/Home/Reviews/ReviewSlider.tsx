'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const ReviewSlider = () => {
  return (
    <div>
      <Swiper 
      effect={'cards'} 
      grabCursor={true} 
      modules={[EffectCards]} 
      className="md:w-[450px] md:h-[350px] w-[90px] h-[300px]">

      </Swiper>
      </div>
  )
}

export default ReviewSlider;