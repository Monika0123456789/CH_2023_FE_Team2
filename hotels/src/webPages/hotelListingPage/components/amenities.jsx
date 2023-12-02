import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { useFilter } from './fiterContext';

const Amenities = ({ onAmenitiesChange }) => {
  const { selectedAmenities, setSelectedAmenities } = useFilter();
  const [showAll, setShowAll] = useState(false);

  const handleCheckboxChange = (type) => {
    if (type === 'all') {
      // If 'All' checkbox is clicked, toggle between selecting all and none
      const newSelected = selectedAmenities.length === amenitiesData.length ? [] : amenitiesData.map((amenity) => amenity.value);
      setSelectedAmenities(newSelected);
      onAmenitiesChange(newSelected);
    } else {
      // Toggle the selected amenity
      const newSelected = selectedAmenities.includes(type)
        ? selectedAmenities.filter((selectedType) => selectedType !== type)
        : [...selectedAmenities, type];
      setSelectedAmenities(newSelected);
      onAmenitiesChange(newSelected);
    }
  };
  const amenitiesData = [
    { value: 'all', label: 'All' },
    { value: 'Air conditioning', label: 'Air conditioning' },
    { value: 'Bar', label: 'Bar' },
    { value: 'Bonfire', label: 'Bonfire' },
    { value: 'Business Services', label: 'Business Services' },
    { value: 'Non-smoking rooms', label: 'Non-smoking rooms' },
    { value: 'Ironing service', label: 'Ironing service' },
    { value: '24-hour front desk', label: '24-hour front desk' },
    { value: 'Caretaker', label: 'Caretaker' },
    { value: 'Concierge service', label: 'Concierge service' },
    { value: 'Laundry', label: 'Laundry' },
    { value: 'Family rooms', label: 'Family rooms' },
    { value: '24-hour security', label: '24-hour security' },
    { value: 'Balcony', label: 'Balcony' },
    { value: 'Free Wifi', label: 'Free Wifi' },
  ];

  const visibleAmenities = showAll ? amenitiesData : amenitiesData.slice(0, 5);

  // useEffect(() => {
  //   // Update the component's state when selectedAmenities are changed externally
  //   setShowAll(selectedAmenities.length === amenitiesData.length);
  // }, [selectedAmenities]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)', width: '300px' }}>
      <h2 style={{ marginTop: 0 }}>Amenities</h2>
      {visibleAmenities.map((amenity) => (
        <div key={amenity.value}>
          <label>
            <input
              type="checkbox"
              checked={selectedAmenities.includes(amenity.value)}
              onChange={() => handleCheckboxChange(amenity.value)}
            />
            {amenity.label}
          </label>
        </div>
      ))}
      {amenitiesData.length > 5 && (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setShowAll(!showAll)}>
          <span>{showAll ? 'See less' : 'See more'}</span>&nbsp;<FaAngleDown />
        </div>
      )}

    </div>
  );
};

export default Amenities;
