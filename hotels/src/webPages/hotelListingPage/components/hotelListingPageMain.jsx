import data from "../../../json/hotel-booking.json";
import {HotelListingPageCard} from "./hotelListingPageCard";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "../hotel-listing-page-js/hotelListingPage.js";
import style from "../hotel-listing-page-styles/hotelListingPage.module.css";
import HotelTypes from "./hotel-type";
import PriceSlider from "./price-range";
import PopularType from "./popular-type";
import CustomerRating from "./customer-rating";
import RatingStar from "./rating-star";
import Amenities from "./amenities";
import ButtomButton from "./buttom-button";
import React, { useState } from "react";
import { FilterProvider } from "./fiterContext";
import { Footer } from "../../footer/components/footer.jsx";

// main component of this webpage -- here we will render the components of this page
export let HotelListingPageMain = () => {
  const [priceRange, setPriceRange] = useState([200, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleTypesChange = (types) => {
    setSelectedTypes(types);
  };
  const handlePriceRangeChange = (newValues) => {
    console.log('New Price Range:', newValues);
    setPriceRange(newValues);
  };
  
  const handleRatingChange = (rating) => {
    console.log('Selected Rating:', rating);
    setSelectedRating(rating);
  };
  
  const handleAmenitiesChange = (amenities) => {
    setSelectedAmenities(amenities);
  };

  const handleClearAll = () => {
    // Reset all filters
    setPriceRange([200, 1000]);
    setSelectedRating(null);
    setSelectedTypes([]);  // Reset selectedTypes to an empty array
    setSelectedAmenities([]);
  };
   
  const filterData = () => {
    console.log('Filtering Data: at filter data', priceRange, selectedRating, selectedTypes, selectedAmenities);
  
    // Filter hotels based on other criteria
    const filteredHotels = data.items.filter(
      (hotel) =>
        hotel.price >= priceRange[0] &&
        hotel.price <= priceRange[1] &&
        (!selectedRating || hotel.rating === selectedRating) &&
        (selectedTypes.length === 0 || selectedTypes.includes(hotel.type)) &&
        (selectedAmenities.length === 0 ||
          (selectedAmenities.includes('all')
            ? true // Return true when 'All' amenities are selected
            : hotel.Facilities.some((facility) => selectedAmenities.includes(facility)))
        )
    );

    // Check if there are selected amenities that do not match any hotel
    const unmatchedAmenities = selectedAmenities.filter(
      (amenity) => amenity !== 'all' && !filteredHotels.some((hotel) => hotel.Facilities.includes(amenity))
    );

    // If there are unmatched amenities, return an empty array
    if (unmatchedAmenities.length > 0) {
      return [];
    }

    return filteredHotels;
  };
 
  
 return (
 
    <div style={{display:'flex'}}>
    <div className="Fitler Hotels">
    {/* <HotelListingPage data={data}/> */}
    <HotelTypes data={data} onTypesChange={handleTypesChange} />
    <PriceSlider onPriceChange={handlePriceRangeChange} />
     <PopularType />
     <CustomerRating onRatingChange={handleRatingChange} />
    <RatingStar />
    <Amenities selectedAmenities={selectedAmenities} onAmenitiesChange={handleAmenitiesChange} />
    <ButtomButton onClearAllClick={handleClearAll} />
    </div>
    <div> 
    <FilterProvider>
   {/* Display filtered data or "No data available" message */}
  <div id="page1-container">
  {filterData().length > 0 ? (
    filterData().map((hotelListingObj, index) => (
      <HotelListingPageCard key={index} hotelListingObj={hotelListingObj} />
    ))
  ) : (
    <p>No data available for your search</p>
  )}
  </div>
  {/* Similar logic for the second page */}
   <div id="page2-container">
  {filterData().length > 0 ? (
    filterData()
      .reverse()
      .map((hotelListingObj, index) => (
        <HotelListingPageCard key={index} hotelListingObj={hotelListingObj} />
      ))
  ) : (
    <p>No data available for your search</p>
  )}
  </div>
  </FilterProvider>
   <div className={`${style.toggle_button_container} ${style.toggle_button_container1}`}>
          <button id="toggle-button-<" className={style.toggle_buttons} title="View Previous page"><GrFormPreviousLink /></button>
          <button id="toggle-button1" className={style.toggle_buttons}>1</button>
          <button id="toggle-button2" className={style.toggle_buttons}>2</button>
          <button id="toggle-button->" className={style.toggle_buttons} title="View Next page"><GrFormNextLink /></button>
        </div>

        <Footer/>
    </div>
    
    </div>
  );
};