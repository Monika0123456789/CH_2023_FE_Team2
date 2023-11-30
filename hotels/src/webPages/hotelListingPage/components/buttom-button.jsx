import React from 'react';
import { useFilter } from './fiterContext';

export default function ButtomButton() {
  const { handleClearAll } = useFilter();

  const handleClearAllClick = () => {
    // Call the handleClearAll function from the context to reset the state
    handleClearAll();

    // You may need additional logic to reset the page position to its original state
    // This could involve scrolling to the top or any other desired behavior
    window.scrollTo(0, 0);
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
