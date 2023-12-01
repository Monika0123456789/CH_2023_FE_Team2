import React, { useEffect } from 'react';
import { useFilter } from './fiterContext';

const CustomerRating = ({ onRatingChange }) => {
  const { selectedRating, setSelectedRating } = useFilter();

  const handleRatingClick = (rating) => {
    // Toggle the rating if clicked again
    const newRating = selectedRating === rating ? null : rating;

    // Update the state using the context
    setSelectedRating(newRating);

    // Notify the parent component about the selected rating
    onRatingChange && onRatingChange(newRating);
  };
  
  // // Notify the parent component about the selected rating
  //  if (onRatingChange) {
  //   onRatingChange(selectedRating);
  // }

  

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)', width: '300px' }}>
      <h2 style={{ marginTop: 0 }}>Customer Rating</h2>
      <div style={{ display: 'flex' }}>
        {[3, 3.5, 4, 4.5].map((rating) => (
          <RatingBox key={rating} value={rating} onClick={() => handleRatingClick(rating)} isSelected={selectedRating === rating} />
        ))}
      </div>
    </div>
  );
};

const RatingBox = ({ value, onClick, isSelected }) => (
  <div
    onClick={onClick}
    style={{
      textAlign: 'center',
      margin: '5px',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'content-box',
      backgroundColor: isSelected ? '#ccc' : 'white',
      cursor: 'pointer',
    }}
  >
    <p style={{ margin: 0, lineHeight: '20px', fontSize: '16px', color: 'black' }}>{value}</p>
  </div>
);

export default CustomerRating;
