import React from 'react'

type Props = {
    hotel: {
        id: number;
        name: string;
        image: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    };
};

const HotelCard = ({hotel}: Props) => {
  return (
    <div>HotelCard</div>
  )
}

export default HotelCard;