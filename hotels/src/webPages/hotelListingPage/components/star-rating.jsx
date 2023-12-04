import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const StarComponent = ({ rating, filledColor = "gold", emptyColor = "grey" }) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="rating-container">
      {Array.from({ length: maxStars }, (_, index) => {
        const isHalf = index === roundedRating - 0.5;
        const filled = index < roundedRating || isHalf;

        return (
          <span key={index} className={filled ? "filled-star" : "empty-star"}>
            {isHalf ? <FaStarHalfAlt style={{ color: filled ? filledColor : emptyColor }} /> : <FaStar style={{ color: filled ? filledColor : emptyColor }} />}
          </span>
        );
      })}
    </div>
  );
};

export default StarComponent;
