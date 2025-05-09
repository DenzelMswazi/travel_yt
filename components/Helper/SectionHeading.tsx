import React from 'react'

type Props = {
    heading: string;
}

const SectionHeading = ({heading}: Props) => {
  return (
    <div className='w-[80] mx-auto'>
      <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
      <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>At Trippie, Every destination has a story to tell. From the sun-kissed beaches of Bali to the snow-covered peaks of Swiss Alps.
        We bring the world closer to you - One unforgettable experience at a time.</p>
    </div>
  )
}

export default SectionHeading;