import React, { useState } from "react";
import "../hotel-detail-page-styles/roomoption.css";
import { IoMdClose } from "react-icons/io";

import { useNavigate, useParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";



export let SectionFour = ({ hotelData }) => {
  const { hotelName } = useParams();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  const closePopup = () => {
    setSelectedRoom(null);
  };


  let navigate = useNavigate();

  
  const selectedHotel = hotelData.items.find(
    (hotel) => hotel.name === hotelName 
  );
{
  // console.log(selectedHotel);
}
  if (!selectedHotel) {
    return <div>Hotel not found</div>;
  }

  const selectRoom = () => {
     navigate(`/checkout`, { state: { selectedHotel} });
  }
  return (
    <div>
      <h1>Room options</h1>
      <hr />
      <div>
        {selectedHotel.rooms.map((room) => (
          <div
            key={room.roomId}
            className="mainroomoptioncontainer"
            
          >
            <div className="roomoptionimageconatiner">
              {/* Map over room images and render them */}
              {room.images.slice(0, 1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room ${room.roomId} Image ${index + 1}`}
                />
              ))}
            </div>
            <div className="roomoptiontextconatiner">

              <h2>Room {room.roomId}</h2>
              

              <div className="detailroomfacilities">
              <ul>
                {room.roomFacilities.slice(0, 4).map((facility, index) => (
                <li key={index}>{facility}</li>
               ))}
               <li><span className="detailmorelink" onClick={() => handleRoomSelection(room)}>more</span></li>
              </ul>
              </div>
  
              <div className="price">
              <h3>{`Price: $${selectedHotel.price}`}</h3>
              </div>

              <button className="roomoptionselectroombutton" onClick={selectRoom}>

                Select Room
              </button>

            </div>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="hoteldetail-popup-container">
        <div>
          <div className="hoteldetail-popup-content">
          <div className="popupheadingpart">
            <h2>Room {selectedRoom.roomId}</h2>
          <button onClick={closePopup} className="detailpopupclose"><IoMdClose /></button>
          </div>
          <hr />
          <img
            src={selectedRoom.images[0]}
            alt={`Room ${selectedRoom.roomId} Image 1`}
            
          />
          <div className="staticdata">
            <p>
            Experience luxury in our spacious deluxe rooms. </p>
          </div>
          <div className="facilities">
          <h3>Facilities</h3>
          <ul>
            {selectedRoom.roomFacilities.map((facility, index) => (
              
              <li key={index}> <FaCheckCircle />{facility}</li>
            ))}
          </ul>
          </div>
          
        </div>
        </div>
      </div>
      
      )}
    </div>
  );
};
