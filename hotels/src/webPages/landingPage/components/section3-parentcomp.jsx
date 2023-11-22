import React from 'react';
import FeaturedHotels from './section3-featuredhotel'; 

const ParentComponent = () => {
  // Hotel data
  const hotels = [
    {
      name: 'Baga Comfort',
      imgSrc: './assets/images/01(2).jpg',
      location: 'New York',
      rate: 455,
      rating: 4.5,
    },
    {
      name: 'New Apollo Hotel',
      imgSrc: './assets/images/02(1).jpg',
      location: 'Califonia',
      rate: 585,
      rating: 4.8,
    },
    {
      name: 'New Age Hotel',
      imgSrc: './assets/images/03(1).jpg',
      location: 'Los Angeles',
      rate: 385,
      rating: 4.6,
    },
    {
      name: 'Helios Beach',
      imgSrc: './assets/images/04(1).jpg',
      location: 'Chicago',
      rate: 665,
      rating: 4.8,
    },
  ];

  return (
    <div>
      <FeaturedHotels hotels={hotels} />
    </div>
  );
};

export default ParentComponent;
