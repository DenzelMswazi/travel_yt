import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'

const News = () => {
  return (
    <div className='pt-16 pb-16'>
     <SectionHeading heading="Travel News for You" />   
     <div className='w-[80%] mx-auto grid grid-cols-1'></div>
    </div>
  )
}

export default News;