import data from "../../../json/hotel-booking.json";
import {HotelListingPageCard} from "./hotelListingPageCard";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
// import "../hotel-listing-page-js/hotelListingPage.js";
import style from "../hotel-listing-page-styles/hotelListingPage.module.css";
import HotelTypes from "./hotel-type";
import PriceSlider from "./price-range";
import PopularType from "./popular-type";
import CustomerRating from "./customer-rating";
import RatingStar from "./rating-star";
import Amenities from "./amenities";

import ButtomButton from "./bottom-button";
import React, { useEffect, useState } from "react";
import { FilterProvider } from "./fiterContext";

import { Footer } from "../../footer/components/footer.jsx";
import { IoFilterSharp } from "react-icons/io5";

import $ from "jquery";

import commonStyle from "../../common.module.css";
import { HeaderComp } from "../../header/components/header.jsx";


// main component of this webpage -- here we will render the components of this page
export let HotelListingPageMain = () => {

  useEffect(() => {
    $("#page2-container").hide();

    $("#toggle-button1").css({"background-color":"blue","color":"white"});

    // invoke function changePagetoTwo upon clicking toggle button 2
    $("#toggle-button2").on("click",changePageToTwo);

    // invoke function changePagetoOne upon clicking toggle button 1
    $("#toggle-button1").on("click",changePageToOne);
  }, [])

  // function to switch to page2
  function changePageToTwo(){
    // hide page1 and show page2 as well as change the color of button2 to active
    $("#page1-container").hide();
    $("#page2-container").show();

    $("#toggle-button1").css({"background-color":"rgb(216, 204, 189)", "color":"black"});
    $("#toggle-button2").css({"background-color":"blue", "color":"white"});
  }

  // function to switch to page1
  function changePageToOne(){
    // hide page2 and show page1 as well as change the color of button1 to active
    $("#page2-container").hide();
    $("#page1-container").show();

    $("#toggle-button2").css({"background-color":"rgb(216, 204, 189)", "color":"black"});
    $("#toggle-button1").css({"background-color":"blue", "color":"white"});
  }

  const [priceRange, setPriceRange] = useState([200, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const handleToggleMobileFilter = () => {
    setIsMobileFilterVisible(!isMobileFilterVisible);
   
  };

  const handleTypesChange = (types) => {
    setSelectedTypes(types);
  };
  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues);
  };
  
  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };
  
  const handleAmenitiesChange = (amenities) => {
    setSelectedAmenities(amenities);
  };
  
  
  const handleClearAll = () => {
    // Reset all filters
    setPriceRange([200, 1000]);
    setSelectedRating(null);
    setSelectedTypes([]);  
    setSelectedAmenities([]);
  };
   
  const filterData = () => {
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
   <>
      <HeaderComp />
     <div className={commonStyle.container}>
       <div className={style.filter_button} onClick={handleToggleMobileFilter}>
         <button>
           <IoFilterSharp />
         </button>
       </div>
       <div style={{ display: "flex" }} className="mainone">
         <div className={style.FitlerHotels}>
           <HotelTypes data={data} onTypesChange={handleTypesChange} />
           <PriceSlider onPriceChange={handlePriceRangeChange} />
           <PopularType />
           <CustomerRating onRatingChange={handleRatingChange} />
           <RatingStar />
           <Amenities onAmenitiesChange={handleAmenitiesChange} />
           <ButtomButton onClearAllClick={handleClearAll} />
         </div>

         {/* Use isMobileFilterVisible to conditionally render the filter */}
         {isMobileFilterVisible && (
           <div className={style.IconFilter}>
             <div className={style.filter_popup}>
               <p className={style.filter_text}>Advanced Filters</p>
               <p className={style.closebtn} onClick={handleToggleMobileFilter}>
                 &times;
               </p>
             </div>

             <HotelTypes data={data} onTypesChange={handleTypesChange} />
             <PriceSlider onPriceChange={handlePriceRangeChange} />
             <PopularType />
             <CustomerRating onRatingChange={handleRatingChange} />
             <RatingStar />
             <Amenities
               selectedAmenities={selectedAmenities}
               onAmenitiesChange={handleAmenitiesChange}
             />
             <ButtomButton onClearAllClick={handleClearAll} />
           </div>
         )}
         <div className={style.hotelpages}>
           <div>
             {/* Display filtered data or "No data available" message for page 1 */}
             <div id="page1-container">
               {filterData().length > 0 ? (
                 filterData().map((hotelListingObj, index) => (
                   <HotelListingPageCard
                     key={index}
                     hotelListingObj={hotelListingObj}
                   />
                 ))
               ) : (
                 <p>No data available for your search</p>
               )}
             </div>
             {/* Display filtered data or "No data available" message for page 2*/}
             <div id="page2-container">
               {filterData().length > 0 ? (
                 filterData()
                   .reverse()
                   .map((hotelListingObj, index) => (
                     <HotelListingPageCard
                       key={index}
                       hotelListingObj={hotelListingObj}
                     />
                   ))
               ) : (
                 <p>No data available for your search</p>
               )}
             </div>

             <div
               className={`${style.toggle_button_container} ${style.toggle_button_container1}`}
             >
               <button
                 id="toggle-button-<"
                 className={style.toggle_buttons}
                 title="View Previous page"
               >
                 <GrFormPreviousLink />
               </button>
               <button id="toggle-button1" className={style.toggle_buttons}>
                 1
               </button>
               <button id="toggle-button2" className={style.toggle_buttons}>
                 2
               </button>
               <button
                 id="toggle-button->"
                 className={style.toggle_buttons}
                 title="View Next page"
               >
                 <GrFormNextLink />
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
     <Footer />
   </>
 );
};