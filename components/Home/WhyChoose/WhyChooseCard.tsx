import Image from 'next/image';
import React from 'react'

type Props = {
  image: string;
  title: string;
}

const WhyChooseCard = ({ image, title}: Props) => {
  return (
    <div>
      <Image src={image} width={70} height={70} alt='image' className='mx-auto'/>
      <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
      <p>Description text will be added here, For more information check contact details</p>
    </div>
  )
}

export default WhyChooseCard;