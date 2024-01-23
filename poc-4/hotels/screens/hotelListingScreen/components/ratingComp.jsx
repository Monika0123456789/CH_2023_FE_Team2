import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
 
const StarComponent = ({ filled, isHalf }) => {
  const starStyle = {
    color: filled ? (isHalf ? 'gold' : 'gold') : 'grey',
  };
 
  return (
    <Text style={starStyle}>
      {isHalf ? <Icon name="star-half-o" size={20} color="gold" /> : <Icon name="star" size={20} />}
    </Text>
  );
};
 
const RatingComponent = ({ rating }) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating * 2) / 2;
 
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const isHalf = index === roundedRating - 0.5;
    const filled = index < roundedRating || isHalf;
    return { filled, isHalf, index }; 
  });
 
  return (
    <View style={{ flexDirection: 'row' }}>
      {stars.map((star) => (
        <StarComponent key={star.index} filled={star.filled} isHalf={star.isHalf} />
      ))}
    </View>
  );
};
 
export default RatingComponent;
 