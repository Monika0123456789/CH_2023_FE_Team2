import React from "react";
import { useNavigate, useParams } from "react-router";
import "./roomoption.css"

export let SectionFour = ({ hotelData }) => {
  const { hotelName } = useParams();

  let navigate = useNavigate();

  
  const selectedHotel = hotelData.items.find(
    (hotel) => hotel.name === hotelName
  );

  if (!selectedHotel) {
    
    return <div>Hotel not found</div>;
  }

  const selectRoom = () => {
    navigate(`/checkout`)
  }
  return (
    <div>
      <h1>Room options</h1>
      <hr />
      <div>
        
        {selectedHotel.rooms.map((room) => (
          <div key={room.roomId} className="mainroomoptioncontainer">
            
            <div className="roomoptionimageconatiner">
              {/* Map over room images and render them */}
              {room.images.slice(0,1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room ${room.roomId} Image ${index + 1}`}
       
                />
              ))}
              
            </div>
            <div className="roomoptiontextconatiner">
            <h2>Room {room.roomId}</h2>
            <p>{room.roomFacilities.join(", ")}</p>
            
            <button className="roomoptionselectroombutton" onClick={selectRoom}>Select Room</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
