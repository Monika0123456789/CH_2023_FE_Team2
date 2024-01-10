import React from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaStar, FaStarHalfAlt, FaHeart, FaShareAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCheck } from "react-icons/hi"; // Correct import for HiOutlineCheck
import { useNavigate } from 'react-router-dom';
import $ from "jquery";
import StarComponent from "./star-rating";

import style from "../hotel-listing-page-styles/hotelListingPage.module.css";

export let HotelListingPageCard = (props) => {


  const navigate = useNavigate();

  // function to open pop up
  let openPopUp = () => {

    // setting hotel name and long description
    $("#popup-hotel-name").text(props.hotelListingObj.name);
    $("#popup-long-desc").text(props.hotelListingObj.longDesc);

    $("#popup-facilities-list").empty();

    // loop through the Facilities array to dispaly the facilities
    props.hotelListingObj.Facilities.forEach((value, idx) => {
      $("#popup-facilities-list").append($("<li>").text(value));
    });

    $("#popup-container").show();
  };

  // function to close the popup
  let closePopUp = () => {
    $("#popup-container").hide();
  };

  const handleButtonClick = () => {
    
    navigate(`/detailPage/${props.hotelListingObj.name}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* main container of the card */}
      <div className={style.hotel_list_maincontainer} key={props.hotelListingObj.id}>

        {/* left container of the card */}
        <div className={style.hotel_list_leftcontainer}>
          <img className={style.container_image} src={props.hotelListingObj.img} alt="roomimage" />
        </div>

        {/* right container of the card */}
        <div className={style.hotel_list_rightcontainer}>
          <div className={style.rightcontainer_section1}>

            {/* user ratings */}
            <article className={style.rating_star}>
              <StarComponent rating={props.hotelListingObj.rating} />
          </article>
             
          </div>
          
          {/* hotel name and location */}
          <div className={style.rightcontainer_section2}>
            <h3>{props.hotelListingObj.name}</h3>
            <IoLocationOutline className={style.location_icon} />
            &nbsp;&nbsp;{props.hotelListingObj.location}
          </div>

          {/* displaying the first facility of the hotel */}
          <div className={style.hotel_facilities_div}>
            <li className={style.first_list_item}>
              {props.hotelListingObj.Facilities[0]}
            </li>

            {/* displaying the second and third facility of the hotel */}
            {props.hotelListingObj.Facilities.slice(1, 3).map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}

            {/* upon clicking more it invokes openPopUp method */}
            <li><a onClick={openPopUp} style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "blue",
                }}
              >More+</a></li>
          </div>

          
          {/* displaying the additional information of the hotel dynamically from json */}
          {props.hotelListingObj.additionalInfo.length==2 ? <p>
            <HiMiniCheckBadge style={{ color: "rgb(3, 185, 3)" }} />
            &nbsp; {props.hotelListingObj.additionalInfo[0]}
            <br />
            <HiMiniCheckBadge style={{ color: "rgb(3, 185, 3)" }} />
            &nbsp; {props.hotelListingObj.additionalInfo[1]}
          </p> : 
          <p>
          <HiMiniCheckBadge style={{ color: "rgb(248, 33, 33)" }} />
          &nbsp; {props.hotelListingObj.additionalInfo[0]}
        </p>}

          {/* hotel price */}
          <div className={style.rightcontainer_section3}>
            <p>
              <b className={style.hotel_pricing}>
                ${props.hotelListingObj.price}
              </b>
              /day &nbsp;<s>$1000</s>
            </p>

            <button className={style.Select_room_button} onClick={handleButtonClick}>
              Select Room
            </button>
          </div>
        </div>
      </div>
      
      {/* container containing the pop up content */}
      <div id="popup-container" className={style.popup}>
        <div className={style.popup_content}>
          <span className={style.close} onClick={closePopUp}>
            &times;
          </span>
          <h2 id="popup-hotel-name"></h2>
          <hr />
          <p id="popup-long-desc"></p>
          <ul id="popup-facilities-list"></ul>
        </div>
      </div>
    </div>
  );
};

export default HotelListingPageCard;
