import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const Amenities = ({ onAmenitiesChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    'All': false,
    'Air conditioning': false,
    'Business Services': false,
    'Non-smoking rooms': false,
    'Ironing service': false,
    '24-hour front desk': false,
    'Caretaker': false,
    'Concierge service': false,
    'Laundry': false,
    'Family rooms': false,
    '24-hour security': false,
    'Balcony': false,
    'Free Wifi': false,
  });
  const [showMore, setShowMore] = useState(false);

  const prevCheckedItemsRef = useRef();

  useEffect(() => {
    prevCheckedItemsRef.current = checkedItems;
  }, [checkedItems]);

  const prevCheckedItems = prevCheckedItemsRef.current || {};

  useEffect(() => {
    const selectedAmenities = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    const prevSelectedAmenities = Object.keys(prevCheckedItems).filter((key) => prevCheckedItems[key]);

    // Check if the selected amenities have changed before calling onAmenitiesChange
    if (JSON.stringify(selectedAmenities) !== JSON.stringify(prevSelectedAmenities)) {
      onAmenitiesChange(selectedAmenities);
    }
  }, [checkedItems, onAmenitiesChange]);

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => {
      let updatedCheckedItems;

      if (item === 'All') {
        updatedCheckedItems = { ...prevCheckedItems, All: !prevCheckedItems.All };
        Object.keys(updatedCheckedItems).forEach((key) => {
          updatedCheckedItems[key] = updatedCheckedItems.All;
        });
      } else {
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every((value) => value);
      }

      return updatedCheckedItems;
    });
  };

  const handleClearAll = () => {
    setCheckedItems((prevCheckedItems) => {
      const clearedItems = { ...prevCheckedItems };
      Object.keys(clearedItems).forEach((key) => {
        clearedItems[key] = false;
      });
      return clearedItems;
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Amenities</Text>
        {Object.entries(checkedItems).map(([key, value]) => (
          <View key={key} style={styles.checkboxContainer}>
            <CheckBox title={key} checked={value} onPress={() => handleCheckboxChange(key)} />
          </View>
        ))}
        {Object.keys(checkedItems).length > 5 && (
          <TouchableOpacity style={styles.seeMoreContainer} onPress={() => setShowMore(!showMore)}>
            <Text>{showMore ? 'See less' : 'See more'}</Text>
            <MaterialIcons
              name={showMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={24}
              color="black"
            />
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
