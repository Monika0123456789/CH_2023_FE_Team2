import data from "../../../json/hotel-booking.json";
import { HotelListingCard } from "./hotelListingCard";
// main component of this webpage -- here we will render the components of this page
export let HotelListingPageMain = () => {
  return (
    <div>
      <h1>hello from ho</h1>
      
        <HotelListingCard hotelDetailsObj = { data.items[0] } />
        <HotelListingCard hotelDetailsObj = { data.items[1] } />
      
    </div>
  );
};
