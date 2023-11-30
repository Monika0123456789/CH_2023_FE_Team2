import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([200, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleClearAll = () => {
    setPriceRange([200, 1000]);
    setSelectedRating(null);
    setSelectedTypes([]);
    setSelectedAmenities([]);
  };

  const contextValue = {
    selectedTypes,
    setSelectedTypes,
    priceRange,
    setPriceRange,
    selectedRating,
    setSelectedRating,
    selectedAmenities,
    setSelectedAmenities,
    handleClearAll,
  };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
