import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';


const HotelTypes = ({ onChange }) => {
  const [checkedItems, setCheckedItems] = useState({
    All: false,
    Hotel: false,
    Apartment: false,
    Resort: false,
    Villa: false,
  });

  useEffect(() => {
    const updatedSelectedTypes = Object.keys(checkedItems).filter((key) => checkedItems[key]);
  
    onChange(updatedSelectedTypes);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItems]);
  
  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => {
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
    setCheckedItems({
      All: false,
      Hotel: false,
      Apartment: false,
      Resort: false,
      Villa: false,
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hotel Type</Text>
      {Object.keys(checkedItems).map((item) => (
        <View key={item} style={styles.checkboxContainer}>
          <CheckBox
            title={item}
            checked={checkedItems[item]}
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

