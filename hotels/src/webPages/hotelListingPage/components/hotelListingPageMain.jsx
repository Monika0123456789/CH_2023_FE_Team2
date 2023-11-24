import data from "../../../json/hotel-booking.json";
import {HotelListingPageCard} from "./hotelListingPageCard";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "../hotel-listing-page-js/hotelListingPage.js";
import style from "../hotel-listing-page-styles/hotelListingPage.module.css";

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
        

        <div className={`${style.toggle_button_container} ${style.toggle_button_container1}`}>
          <button id="toggle-button-<" className={style.toggle_buttons} title="View Previous page"><GrFormPreviousLink /></button>
          <button id="toggle-button1" className={style.toggle_buttons}>1</button>
          <button id="toggle-button2" className={style.toggle_buttons}>2</button>
          <button id="toggle-button->" className={style.toggle_buttons} title="View Next page"><GrFormNextLink /></button>
        </div>
    </div>
  );
};
