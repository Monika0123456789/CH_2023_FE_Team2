import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import {   Star } from 'lucide-react-native';

const RatingStar = () => {
  const RatingBox = ({ rating }) => (
    <View style={styles.ratingBox}>
      <Text style={styles.ratingText}>{rating}<Ionicons name="star" size={20} color="#fdcc0d" /></Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rating Star</Text>
      <View style={styles.ratingContainer}>
        <RatingBox rating="3" />
        <RatingBox rating="3.5" />
        <RatingBox rating="4" />
        <RatingBox rating="4.5" />
      </View>
    </View>
  );
};

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
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    // backgroundColor: '#ccc',
  },
  ratingText: {
    margin: 0,
    lineHeight: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default RatingStar;
