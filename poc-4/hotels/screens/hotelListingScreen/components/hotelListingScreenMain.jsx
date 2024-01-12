import { ScrollView, Text } from "react-native"
import HotelListingScreenCard from "./hotelListingScreenCard";
import data from "../../../assets/json/hotel-booking.json"

export default HotelListingMain = () => {
    return(
        <>
            <ScrollView>
                {data.items.map((hotelListingObj, index) => (
                    <HotelListingScreenCard key={index} hotelListingObj={hotelListingObj}/>
                ))}
            </ScrollView>
            
            
        </>
    )
}