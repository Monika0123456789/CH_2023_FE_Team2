import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import style from "../hotel-listing-page-styles/hotelListingPage.module.css";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiMiniCheckBadge } from "react-icons/hi2";
import $ from "jquery";



export let HotelListingPageCard = (props) => {

    let openPopUp = () => {
        $("#popup-hotel-name").text(props.hotelListingObj.name);  
        $("#popup-long-desc").text(props.hotelListingObj.longDesc);

        $("#popup-facilities-list").empty();

        props.hotelListingObj.Facilities.map((value, idx) => (
            $("#popup-facilities-list").append($("<li>").text(value))
        ) )
        
        $("#popup-container").show();
    }

    let closePopUp = () => {
        $("#popup-container").hide();
    }

    return (
      <div>
        <div
          className={style.hotel_list_maincontainer}
          key={props.hotelListingObj.id}
        >
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
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </article>
              <article>
                <div className={style.iconcontainer_main}>
                  <div
                    className={`${style.iconcontainer} ${style.hearticon}`}
                    title="Like"
                  >
                    <FaHeart />
                  </div>
                  <div
                    className={`${style.iconcontainer} ${style.shareicon}`}
                    title="Share"
                  >
                    <FaShareAlt />
                  </div>
                </div>
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

            <p>
              <HiMiniCheckBadge style={{ color: "rgb(3, 185, 3)" }} />
              &nbsp; Free Cancellation till 7 jan 2022
              <br />
              <HiMiniCheckBadge style={{ color: "rgb(3, 185, 3)" }} />
              &nbsp; Free Breakfast
            </p>

            <div className={style.rightcontainer_section3}>
              <p>
                <b className={style.hotel_pricing}>
                  ${props.hotelListingObj.price}
                </b>
                /day &nbsp;<s>$1000</s>
              </p>

              <button className={style.Select_room_button}>
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
}