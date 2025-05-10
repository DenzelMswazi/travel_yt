import React from 'react'

type Props = {
  heading: string;
}

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="px-4 sm:px-8 max-w-3xl">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold text-left">{heading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium text-left">
        At Trippie, every destination has a story to tell. From the sun-kissed beaches of Bali to the snow-covered peaks of the Swiss Alps.
        We bring the world closer to you — one unforgettable experience at a time.
      </p>
    </div>
  )
}

export default SectionHeading;
