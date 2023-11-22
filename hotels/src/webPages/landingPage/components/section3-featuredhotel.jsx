import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import "../landing-page-styles/section3.css";

const FeaturedHotels = ({ hotels }) => {
  return (
    <section className="section-3">
    <h2>Featured Hotels</h2>
    <div className="section3-container">
      {hotels.map((hotel, index) => (
        <figure className="card" key={index}>
          <div className="hotel-img">
            <img
              src={hotel.imgSrc}
              onClick={() => window.location.href='hotel-listing-page.html'}
              alt=""
            />
            <button className="location-btn">
            <IoLocationOutline />
           &nbsp;{hotel.location}
            </button>
          </div>
          <h3>{hotel.name}</h3>
          <div className="fig-caption">
            <h4>
              <span className="rate">${hotel.rate}</span>/starting at
            </h4>
            <h4 className="rating">
              {hotel.rating}&nbsp;
              <FaStar className='star'/>
            </h4>
          </div>
        </figure>
      ))}
    </div>
  </section>
  );
};

export default FeaturedHotels;
