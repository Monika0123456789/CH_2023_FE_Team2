// DeatilSectionFour.jsx
import React from 'react';
import hotelsData from '../../json/hotel-booking.json';
import "./section4.css"

export const DeatilSectionFour = () => {
    if (!hotelsData.items) {
        return <div>No hotel data available.</div>;
      }

  return (
    <div className="parentcontainer">
      <div className="room-options-heading-div">
        <h1>Room Options</h1>
        <hr />
      </div>

      {hotelsData.items.slice(0,2).map((hotel) => (
        <div key={hotel.id} className="hotel-detail-maincontainer">
          <div className="hotel-detail-leftcontainer">
            <img className="container-image" src={hotel.img} alt={hotel.name} />
            <div className="offer-div">30%off</div>
          </div>

          <div className="hotel-detail-rightcontainer">
            <div className="rightcontainer-section1">
              <h3>{hotel.name}</h3>
              <ul>
                
              </ul>
              <p>Free Cancellation till 7 jan 2022</p>
            </div>

            <div className="rightcontainer-section2">
              <p>
                <b className="hotel-price">${hotel.price}</b>/day &nbsp;
                <s>$1000</s>
              </p>
              <button className="Select-room-button">Select Room</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
