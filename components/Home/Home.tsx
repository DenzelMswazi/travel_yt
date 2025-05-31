import React from 'react'
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoosee from './WhyChoose/WhyChoosee';
import Review from './Reviews/Review';
import News from './News/News';

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoosee />
      <Review />
      <News />
    </div>
  )
}

export default Home;