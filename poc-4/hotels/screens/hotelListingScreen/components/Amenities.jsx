import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useHotelContext } from '../components/hotelcontext';

const Amenities = ({ onAmenitiesChange }) => {
  const { selectedAmenities, setSelectedAmenitiesState } = useHotelContext();

  const [showMore, setShowMore] = useState(false);

  const prevCheckedItemsRef = useRef(); 

  useEffect(() => {
    prevCheckedItemsRef.current = selectedAmenities;
  }, [selectedAmenities]);

  const prevCheckedItems = prevCheckedItemsRef.current || {};

  useEffect(() => {
    if (selectedAmenities) {
      const selectedAmenitiesKeys = Object.keys(selectedAmenities).filter((key) => selectedAmenities[key]);
      const prevSelectedAmenities = Object.keys(prevCheckedItems).filter((key) => prevCheckedItems[key]);

      if (JSON.stringify(selectedAmenitiesKeys) !== JSON.stringify(prevSelectedAmenities)) {
        onAmenitiesChange(selectedAmenitiesKeys);
      }
    }
  }, [selectedAmenities, onAmenitiesChange]);

  const handleCheckboxChange = (item) => {
    console.log('Checkbox changed:', item);
    setSelectedAmenitiesState((prevCheckedItems) => {
      let updatedCheckedItems;

      if (item === 'All') {
        updatedCheckedItems = Object.fromEntries(
          Object.entries(prevCheckedItems).map(([key, value]) => [key, !prevCheckedItems.All])
        );
      } else {
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every(
          (value) => value && value !== updatedCheckedItems.All
        );
      }
      return updatedCheckedItems;
    });
  };

  const handleClearAll = () => {
    console.log('Clear All clicked');
    setSelectedAmenitiesState((prevCheckedItems) => {
      const clearedItems = { ...prevCheckedItems };
      Object.keys(clearedItems).forEach((key) => {
        clearedItems[key] = false;
      });
      setSelectedAmenitiesState(clearedItems);
      return clearedItems;
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Amenities</Text>
        {Object.entries(selectedAmenities).map(([key, value]) => (
          <View key={key} style={styles.checkboxContainer}>
            <CheckBox title={key} checked={selectedAmenities[key]} onPress={() => handleCheckboxChange(key)} />
          </View>
        ))}
        {Object.keys(selectedAmenities).length > 5 && (
          <TouchableOpacity style={styles.seeMoreContainer} onPress={() => setShowMore(!showMore)}>
            <Text>{showMore ? 'See less' : 'See more'}</Text>
            <MaterialIcons name={showMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
          </TouchableOpacity>
        )}
        <Button title="Clear All" onPress={handleClearAll} style={styles.buttonContainer} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: '100%',
    marginTop: 25,
  },
  heading: {
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkboxContainer: {
    marginTop: 10,
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Amenities;
