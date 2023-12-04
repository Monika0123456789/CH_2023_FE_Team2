import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import "./section1.css";


import { useParams } from "react-router";

export const DetailSectionOne = () => {
  const { hotelName } = useParams();
  
  const [isMapVisible, setIsMapVisible] = useState(false);
  

  const handleViewMapClick = () => {
    setIsMapVisible(true);
  };

  const handleCloseMapClick = () => {
    setIsMapVisible(false);
  };
  



  return (
    <div>
      <section className="img-section">
        <h1>{hotelName}</h1>

        <p>
          <FaLocationDot />
          &nbsp;5855 W Century Blvd, Los Angeles - 90045&nbsp;
          <a id="openMap" href="#" onClick={handleViewMapClick}>
            <FaEye />
            &nbsp;View On Map
          </a>
        </p>

        <div className="image-section">
          <div className="grid-content image-01">
            <img src="./assets/images/13.jpg" alt="hotel images" />
          </div>
          <div className="grid-content image-02">
            <img src="./assets/images/13.jpg" alt="hotel images" />
          </div>
          <div className="grid-content image-03">
            <img src="./assets/images/12(1).jpg" alt="hotel images" />
          </div>
          <div className="grid-content image-04">
            <img src="./assets/images/01(2).jpg" alt="hotel images" />
            <a href="#" className="overlay-container">
              View all
            </a>
          </div>
        </div>
      </section>

      {isMapVisible && (
        <div className="modal-overlay">
          <div className="map-card">
            <div className="headingclose">
            <h2>View our Hotel Location</h2>
              <button className="close-button" onClick={handleCloseMapClick}>
              <RxCross1 />
            </button></div>
            <div className="map-container">
            
              <iframe
                title="Hotel Location"
                height="400px"
                width="400px"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701324669926!5m2!1sen!2sin"
              ></iframe>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};