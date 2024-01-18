import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomerRating = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    // Toggle the rating if clicked again
    const newRating = selectedRating === rating ? null : rating;

    // Update the state
    setSelectedRating(newRating);

    // Notify the parent component about the selected rating if onRatingChange is provided
    onRatingChange && onRatingChange(newRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Rating</Text>
      <View style={styles.ratingContainer}>
        {[3, 3.5, 4, 4.5].map((rating) => (
          <RatingBox
            key={rating}
            value={rating}
            onClick={() => handleRatingClick(rating)}
            isSelected={selectedRating === rating}
          />
        ))}
      </View>
    </View>
  );
};

const RatingBox = ({ value, onClick, isSelected }) => (
  <TouchableOpacity onPress={onClick} style={[styles.ratingBox, isSelected && styles.selectedBox]}>
    <Text style={styles.ratingText}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 5,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heading: {
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  ratingBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  selectedBox: {
    backgroundColor: '#ccc',
  },
  ratingText: {
    margin: 0,
    lineHeight: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default CustomerRating;
