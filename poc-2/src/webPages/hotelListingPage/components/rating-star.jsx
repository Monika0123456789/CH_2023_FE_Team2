import React from 'react';
import { IoStar } from "react-icons/io5";
export default function RatingStar() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '2px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',width:'300px' }}>
      <h2 style={{marginTop:0}}>Rating Star</h2>
      <div style={{ display: 'flex' }}>
        <RatingBox rating="3"  />
        <RatingBox rating="3.5" />
        <RatingBox rating="4" />
        <RatingBox rating="4.5" />
      </div>
    </div>
  );
}

const RatingBox = ({ rating }) => (
  <div style={{ textAlign: 'center', margin: '5px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'boarder-box',backgroundColor:'#ccc'}}>
    <p style={{ margin: 0, lineHeight: '20px', fontSize: '16px',color: 'black' }}>{rating}<IoStar /></p>
  </div>
);
