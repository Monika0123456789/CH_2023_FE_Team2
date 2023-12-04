import React from 'react';
import { useFilter } from './fiterContext';

export default function ButtomButton({ onClearAllClick }) {
  const { handleClearAll } = useFilter();

  const handleClearAllClick = () => {
    // Call the handleClearAll function from the context to reset the state
    handleClearAll();
    
   // Trigger the onClearAllClick prop to re-render hotel listings
    onClearAllClick();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p onClick={handleClearAllClick} style={{ cursor: 'pointer' }}>
        Clear all
      </p>
      <button style={{ padding: '10px', lineHeight: '10px', borderRadius: '5px' }}>Filter Result</button>
    </div>
  );
}
