
import { ScrollView, Text } from "react-native"
import HotelListingScreenCard from "./hotelListingScreenCard";
import data from "../../../assets/json/hotel-booking.json";
import HotelTypes from './hotelTypes';
import Amenities from './Amenities';
import PopularType from './popularType';
import CustomerRating from './customerRating';
import RatingStar from './ratingStar';
import BottomButton from './bottomButton';
import DoubleRangeSlider from './priceRange';

export default HotelListingMain = () => {
    return(
        <>
            <ScrollView>
                <HotelTypes/>
                <DoubleRangeSlider/>
                <CustomerRating/>
                <RatingStar/>
                <PopularType/>
                <Amenities/>
                <BottomButton/>
                {data.items.map((hotelListingObj, index) => (
                    <HotelListingScreenCard key={index} hotelListingObj={hotelListingObj}/>
                ))}
            </ScrollView>
            
            
        </>
    )
}

