import React from 'react'

type Props = {
    heading: string;
}

const SectionHeading = ({heading}:Props) => {
  return (
    <div className='w-[80] mx-auto'>
      <h1>{heading}</h1>
      <p>At Trippie, Every destination has a story to tell. From the sun-kissed beaches of Bali to the snow-covered peaks of Swiss Alps.
        We bring the world closer to you - One unforgettable experience at a time.</p>
    </div>
  )
}

export default SectionHeading;