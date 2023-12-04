import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';
import '../hotel-listing-page-styles/price.css';
import { useFilter } from './fiterContext';

const PriceSlider = ({ onPriceChange }) => {
  const { priceRange, setPriceRange } = useFilter();
  const [values, setValues] = useState(priceRange);

  useEffect(() => {
    // update the component's state
    if (onPriceChange) {
      setValues(priceRange);
    }
  }, [priceRange, onPriceChange]);
  
  
  const formatPrice = (value) => {
    return `$${value}`;
  };

  const handleChange = (newValues) => {
    onPriceChange(newValues); // Call onPriceChange with the new values
    setPriceRange(newValues); // Update priceRange in the context using setPriceRange
  };
  

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)', width: '300px' }}>
      <h2 style={{ marginTop: 0 }}>Price Range</h2>

      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={200}
        max={1000}
      />
      <div>
        <p>Price Range: {formatPrice(values[0])} to {formatPrice(values[1])}</p>
      </div>
    </div>
  );
};

export default PriceSlider;