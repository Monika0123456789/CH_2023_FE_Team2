import React from 'react';
import { View,Text} from 'react-native';
import FeaturedHotels from './featuredHotels'; 

const ParentComponent = () => {
  // Hotel data
  const hotels = [
    {
      name: 'Baga Comfort',
      imgSrc: require('../../../assets/images/01(2).jpg'), 
      location: 'New York',
      rate: 455,
      rating: 4.5,
    },
    {
      name: 'New Apollo Hotel',
      imgSrc: require('../../../assets/images/02(1).jpg'),
      location: 'California',
      rate: 585,
      rating: 4.8,
    },
    {
      name: 'New Age Hotel',
      imgSrc: require('../../../assets/images/03(1).jpg'),
      location: 'Los Angeles',
      rate: 385,
      rating: 4.6,
    },
    {
      name: 'Helios Beach',
      imgSrc: require('../../../assets/images/04(1).jpg'),
      location: 'Chicago',
      rate: 665,
      rating: 4.8,
    },
  ];

  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center'}}>Featured Hotels</Text>
      <FeaturedHotels hotels={hotels} />
    </View>
  );
};

export default ParentComponent;
