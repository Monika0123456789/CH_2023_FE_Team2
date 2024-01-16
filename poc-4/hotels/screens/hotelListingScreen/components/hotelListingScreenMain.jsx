
import { Alert, Button, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../hotelListingScreen-styles/hotelListingScreen";

import { ArrowLeftCircle, ArrowRightCircle, Presentation, Settings } from 'lucide-react-native';
import data from "../../../assets/json/hotel-booking.json"
import { useState } from "react";

import HotelListingScreenCard from "./hotelListingScreenCard";
import HotelTypes from './hotelTypes';
import Amenities from './Amenities';
import PopularType from './popularType';
import CustomerRating from './customerRating';
import RatingStar from './ratingStar';
import BottomButton from './bottomButton';
import DoubleRangeSlider from './priceRange';


export default HotelListingMain = () => {
    const [button1Clicked, setButton1Clicked] = useState(true);
    const [button2Clicked, setButton2Clicked] = useState(false);

    const handleButtonClick = () => {
        setButton1Clicked(!button1Clicked);
        setButton2Clicked(!button2Clicked);
    }

    return(
        <>
            <ScrollView>
                {
                    button1Clicked===true && button2Clicked===false  ?
                    data.items.reverse().map((hotelListingObj, index) => (
                        <HotelListingScreenCard key={index} hotelListingObj={hotelListingObj}/>
                    )) : 
                    null
                    ||
                    button1Clicked===false && button2Clicked===true ?
                    data.items.reverse().map((hotelListingObj, index) => (
                        <HotelListingScreenCard key={index} hotelListingObj={hotelListingObj}/>
                    )) :
                    null
                }


                {/* container containing the toggle buttons */}
                <View style={styles.toggle_button_container}>
                    {/* previous button */}
                    <Pressable onPress={handleButtonClick}>
                        <ArrowLeftCircle color="black" size="30" />
                    </Pressable>

                    {/* button 1 */}
                    <Pressable style={{...styles.toggle_buttons, backgroundColor : button1Clicked ? "blue" : "rgb(216, 204, 189)"}} onPress={handleButtonClick}>
                        <Text style={{color : button1Clicked ? "white": "black"}}>1</Text>
                    </Pressable>

                    {/* button 2 */}
                    <Pressable style={{...styles.toggle_buttons, backgroundColor : button2Clicked ? "blue" : "rgb(216, 204, 189)"}} onPress={handleButtonClick}>
                        <Text style={{color : button2Clicked ? "white": "black"}}>2</Text>
                    </Pressable>

                    {/* next button */}
                    <Pressable onPress={handleButtonClick}>
                        <ArrowRightCircle color="black" size="30"/>
                    </Pressable>
                </View>
                <HotelTypes/>
                <DoubleRangeSlider/>
                <CustomerRating/>
                <RatingStar/>
                <PopularType/>
                <Amenities/>
                <BottomButton/>

            </ScrollView>
            
            
        </>
    )
}

