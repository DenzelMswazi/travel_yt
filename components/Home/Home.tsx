import React from 'react'
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoosee from './WhyChoose/WhyChoosee';
import Review from './Reviews/Review';

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoosee />
      <Review />
    </div>
  )
}

export default Home;