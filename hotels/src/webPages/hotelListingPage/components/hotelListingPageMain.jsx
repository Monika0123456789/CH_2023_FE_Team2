import data from "../../../json/hotel-booking.json";
import {HotelListingPageCard} from "./hotelListingPageCard";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "../hotel-listing-page-js/hotelListingPage.js";

// main component of this webpage -- here we will render the components of this page
export let HotelListingPageMain = () => {
  return (
    <div>
      <div id="page1-container">
        { data.items.map( (hotelListingObj, index) => (
            <HotelListingPageCard key={index} hotelListingObj = {hotelListingObj} />
          ) )}
      </div>

      <div id="page2-container">
        { data.items.slice(0).reverse().map( (hotelListingObj, index) => (
            <HotelListingPageCard key={index} hotelListingObj = {hotelListingObj} />
          ) )}
      </div>
        

        <div class="toggle-button-container toggle-button-container1">
          <button id="toggle-button-<" class="toggle-buttons" title="View Previous page"><GrFormPreviousLink /></button>
          <button id="toggle-button1" class="toggle-buttons">1</button>
          <button id="toggle-button2" class="toggle-buttons">2</button>
          <button id="toggle-button->" class="toggle-buttons" title="View Next page"><GrFormNextLink /></button>
        </div>
    </div>
  );
};
