import React, { useEffect, useState } from 'react';
import hotelBookingData from "../../json/hotel-booking.json";
import "./section4.css"

const HotelDetail = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setJsonData(hotelBookingData);
    };

    fetchData();
  }, []);

  const dynamicJSONData = (item) => (

    item.rooms.map(room => (
      <div className="room" key={room.roomId}>
        <div className="container-image images">
          <img src={room.images[0]} alt={`Room ${room.roomId}`} />
        </div>
        <div className="hotel-detail-rightcontainer">
          <div className="rightcontainer-section1">
            <h2>{item.name}</h2>
            <h3>Room {room.roomId}</h3>
            <p>Price: ${item.price}</p>
            <ul>
              {room.roomFacilities.map(facility => (
                <li key={facility}>{facility}</li>
              ))}
            </ul>
          </div>
          <button className="Select-room-button">Select Room</button>
        </div>
      </div>
    ))
  );

  return (
    <div className="hotel-detail-maincontainer">
       <h1>Room Options</h1>
       <hr />
       <br />
      {jsonData && jsonData.items.map(item => (
        <div key={item.id}>
          {dynamicJSONData(item)}
          
        </div>
      ))}
    </div>
  );
};

export default HotelDetail;
