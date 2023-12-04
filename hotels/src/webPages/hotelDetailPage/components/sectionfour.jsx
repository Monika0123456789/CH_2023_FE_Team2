
import React, { useState } from "react";
import "../hotel-detail-page-styles/roomoption.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router";


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
              <p>{room.roomFacilities.slice(0,4).join(", ")} <span className="detailmorelink" onClick={() => handleRoomSelection(room)}>more</span></p>
              
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
            Experience luxury in our spacious deluxe rooms, tastefully furnished for your comfort. Enjoy breathtaking views from your private balcony, unwind in a plush king-size bed, and indulge in modern amenities. Immerse yourself in tranquility and sophistication for an unforgettable stay
            </p>
          </div>
          <div className="facilities">
          <h3>Facilities</h3>
          <ul>
            {selectedRoom.roomFacilities.map((facility, index) => (
              <li key={index}>{facility}</li>
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
