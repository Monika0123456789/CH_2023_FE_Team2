import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useHotelContext } from '../components/hotelcontext'; 

const HotelTypes = ({ onChange }) => {
  const { hotelTypesCheckedItems, setHotelTypesCheckedItems } = useHotelContext();

  useEffect(() => {
    const updatedSelectedTypes = Object.keys(hotelTypesCheckedItems).filter((key) => hotelTypesCheckedItems[key]);
    onChange(updatedSelectedTypes);
  }, [hotelTypesCheckedItems]);

  const handleCheckboxChange = (item) => {
    setHotelTypesCheckedItems((prevCheckedItems) => {
      let updatedCheckedItems;

      if (item === 'All') {
        updatedCheckedItems = Object.keys(prevCheckedItems).reduce((acc, key) => {
          acc[key] = !prevCheckedItems.All;
          return acc;
        }, {});
      } else {
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every((value) => value);
      }

      return updatedCheckedItems;
    });
  };

  const handleClearAll = () => {
    const updatedCheckedItems = { ...hotelTypesCheckedItems };

    Object.keys(updatedCheckedItems).forEach((key) => {
      updatedCheckedItems[key] = false;
    });

    setHotelTypesCheckedItems(updatedCheckedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hotel Type</Text>
      {Object.keys(hotelTypesCheckedItems).map((item) => (
        <View key={item} style={styles.checkboxContainer}>
          <CheckBox
            title={item}
            checked={hotelTypesCheckedItems[item]}
            onPress={() => handleCheckboxChange(item)}
            containerStyle={styles.checkboxStyle}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Clear All" onPress={handleClearAll} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: '100%',
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
  checkboxStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default HotelTypes;
