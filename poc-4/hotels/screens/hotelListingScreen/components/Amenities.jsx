import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const Amenities = () => {
  const [checkedItems, setCheckedItems] = useState({
    All: false,
    'Air conditioning': false,
    Bar: false,
    Bonfire: false,
    'Business Services': false,
    'Non-smoking rooms': false,
    'Ironing service': false,
    '24-hour front desk': false,
    Caretaker: false,
    'Concierge service': false,
    Laundry: false,
    'Family rooms': false,
    '24-hour security': false,
    Balcony: false,
    'Free Wifi': false,
  });
  const [showMore, setShowMore] = useState(false);
  const amenitiesData = Object.entries(checkedItems);
  const visibleAmenitiesCount = showMore || checkedItems.All ? amenitiesData.length : 5;

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => {
      let updatedCheckedItems;

      if (item === 'All') {
        const allChecked = !prevCheckedItems.All;
        updatedCheckedItems = Object.fromEntries(
          Object.keys(prevCheckedItems).map((key) => [key, allChecked])
        );
      } else {
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every((value) => value);
      }

      return updatedCheckedItems;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Amenities</Text>
      {amenitiesData.slice(0, visibleAmenitiesCount).map(([key, value]) => (
        <View key={key} style={styles.checkboxContainer}>
          <CheckBox title={key} checked={value} onPress={() => handleCheckboxChange(key)} />
        </View>
      ))}
      {amenitiesData.length > 5 && (
        <TouchableOpacity style={styles.seeMoreContainer} onPress={() => setShowMore(!showMore)}>
          <Text>{showMore ? 'See less' : 'See more'}</Text>
          <MaterialIcons
            name={showMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      )}
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
  checkboxContainer: {
    marginTop: 10,
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Amenities;
