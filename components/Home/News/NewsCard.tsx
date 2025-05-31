import Image from 'next/image';
import { title } from 'process'
import React from 'react'

type Props = {
    image: string;
    date: string;
    title: string;
}

const NewsCard = ({ date, image, title }:Props ) => {
  return (
    <div>
      <div className='h-[300px]'>
        <Image src={image} alt={title} width={300} height={300} className='w-full h-full object-cover rounded-lg'/>
        </div>  
    </div>
  )
}

export default NewsCard;