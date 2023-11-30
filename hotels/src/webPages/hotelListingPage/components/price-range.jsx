import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';
import '../hotel-listing-page-styles/price.css';
import { useFilter } from './fiterContext';

const PriceSlider = ({ onPriceChange }) => {
  const { priceRange, setPriceRange } = useFilter();
  const [values, setValues] = useState(priceRange);

  useEffect(() => {
    setValues(priceRange);
  }, [priceRange]);

  const formatPrice = (value) => {
    return `$${value}`;
  };

  const handleChange = (newValues) => {
    const sortedValues = newValues.sort((a, b) => a - b);
    setValues(sortedValues);
    onPriceChange && onPriceChange(sortedValues);
    setPriceRange(sortedValues);
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
