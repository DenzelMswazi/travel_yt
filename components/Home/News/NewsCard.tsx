import { title } from 'process'
import React from 'react'

type Props = {
    image: string;
    date: string;
    title: string;
}

const NewsCard = ({ date, image, title }:Props ) => {
  return (
    <div>NewsCard</div>
  )
}

export default NewsCard;