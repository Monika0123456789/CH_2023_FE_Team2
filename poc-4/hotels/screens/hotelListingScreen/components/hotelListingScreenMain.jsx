// hotel listing main content goes here
import React from 'react';
import { ScrollView} from 'react-native';
// import PriceSlider from './priceRange';
import HotelTypes from './hotelTypes';
import Amenities from './Amenities';
import PopularType from './popularType';
import CustomerRating from './customerRating';
import RatingStar from './ratingStar';
import BottomButton from './bottomButton';
import DoubleRangeSlider from './priceRange';

const HotelListingComp = () => {
  return (
    <ScrollView>
      <HotelTypes/>
      <DoubleRangeSlider/>
      <CustomerRating/>
      <RatingStar/>
      <PopularType/>
      <Amenities/>
      <BottomButton/>
      {/* <PriceSlider/> */}
    </ScrollView>
  );
};

export default HotelListingComp;
