'use client';

import React from 'react'
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoosee from './WhyChoose/WhyChoosee';
import Review from './Reviews/Review';
import News from './News/News';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoosee />
      <Review />
      <News />
      <Newsletter />
    </div>
  )
}

export default Home;