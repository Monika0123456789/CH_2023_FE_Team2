import React, { useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { useFilter } from './fiterContext';

export default function HotelTypes({ data, onTypesChange }) {
  const { selectedTypes, setSelectedTypes } = useFilter();

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (type === 'All') {
        // If 'All' checkbox is clicked, toggle between selecting all and none
        return prevSelectedTypes.includes('All') ? [] : ['All', ...data.items.map(hotel => hotel.type)];
      } else if (prevSelectedTypes.includes('All')) {
        // If 'All' was previously selected, clear it and only select the current type
        const filteredTypes = prevSelectedTypes.filter(selectedType => selectedType !== 'All');
        return filteredTypes.includes(type) ? filteredTypes.filter(selectedType => selectedType !== type) : [...filteredTypes, type];
      }else {
        // If the type is not selected, add it to the selection
        return [...prevSelectedTypes, type];
      }
    });
    
  };
  
  // Use useEffect to call onTypesChange after the component has been rendered
  useEffect(() => {
    onTypesChange(selectedTypes);
  }, [selectedTypes, onTypesChange]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', width: '300px' }}>
      <h2 style={{ marginTop: 0 }}>Hotel Type</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="All"
            checked={selectedTypes.includes("All")}
            onChange={() => handleCheckboxChange("All")}
          />
          All
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Hotel"
            checked={selectedTypes.includes("Hotel")}
            onChange={() => handleCheckboxChange("Hotel")}
          />
          Hotel
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Apartment"
            checked={selectedTypes.includes("Apartment")}
            onChange={() => handleCheckboxChange("Apartment")}
          />
          Apartment
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Resort"
            checked={selectedTypes.includes("Resort")}
            onChange={() => handleCheckboxChange("Resort")}
          />
          Resort
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Villa"
            checked={selectedTypes.includes("Villa")}
            onChange={() => handleCheckboxChange("Villa")}
          />
          Villa
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>See more</span>&nbsp;<FaAngleDown />
      </div>
    </div>
  );
}
