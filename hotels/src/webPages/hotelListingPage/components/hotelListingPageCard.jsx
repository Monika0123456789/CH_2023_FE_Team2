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
  const { hotelListingObj, selectedTypes = [] } = props;

  const navigate = useNavigate(); // useNavigate replaces useHistory

  // Add your filtering logic here based on selectedTypes
  const shouldRender = selectedTypes.length === 0 || selectedTypes.includes(hotelListingObj.type);

  if (!shouldRender) {
    // If the hotel type does not match the selected types, return null or an empty component
    return null;
  }


  let openPopUp = () => {
    $("#popup-hotel-name").text(props.hotelListingObj.name);
    $("#popup-long-desc").text(props.hotelListingObj.longDesc);

    $("#popup-facilities-list").empty();

    props.hotelListingObj.Facilities.forEach((value, idx) => {
      $("#popup-facilities-list").append($("<li>").text(value));
    });

    $("#popup-container").show();
  };

  let closePopUp = () => {
    $("#popup-container").hide();
  };

  const handleButtonClick = () => {
    
    navigate(`/detailPage/${props.hotelListingObj.name}`)
  };

  return (
    <div>
      <div className={style.hotel_list_maincontainer} key={props.hotelListingObj.id}>
        <div className={style.hotel_list_leftcontainer}>
          <img
            className={style.container_image}
            src={props.hotelListingObj.img}
            alt="roomimage"
          />
        </div>

        <div className={style.hotel_list_rightcontainer}>
          <div className={style.rightcontainer_section1}>
            <article className={style.rating_star}>
              <StarComponent rating={props.hotelListingObj.rating} />
            </article>
          </div>
          
          <div className={style.rightcontainer_section2}>
            <h3>{props.hotelListingObj.name}</h3>
            <IoLocationOutline className={style.location_icon} />
            &nbsp;&nbsp;{props.hotelListingObj.location}
          </div>

          <div className={style.hotel_facilities_div}>
            <li className={style.first_list_item}>
              {props.hotelListingObj.Facilities[0]}
            </li>

            {props.hotelListingObj.Facilities.slice(1, 3).map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}

            <li>
              <a
                onClick={openPopUp}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "blue",
                }}
              >
                More+
              </a>
            </li>
          </div>

          

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
