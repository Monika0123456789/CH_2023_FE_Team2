import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarComponent = ({ rating }) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating * 2) / 2; //half star rating

  return (
    <div className="rating-container">
      {Array.from({ length: maxStars }, (_,index) => {
        const isHalf = index === roundedRating - 0.5;
        const filled = index < roundedRating || isHalf;

        return (
          <span key={index} className={filled ? "filled-star" : "empty-star"}>
            {isHalf ? <FaStarHalfAlt style={{ color: filled ? "gold" : "grey" }} /> : <FaStar style={{ color: filled ? "gold" : "grey" }} />}
          </span>
        );
      })}
    </div>
  );
};

export default StarComponent;
