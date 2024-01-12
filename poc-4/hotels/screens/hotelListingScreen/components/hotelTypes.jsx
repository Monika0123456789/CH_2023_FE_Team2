import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const HotelTypes = () => {
  const [checkedItems, setCheckedItems] = useState({
    All: false,
    Hotel: false,
    Apartment: false,
    Resort: false,
    Villa: false,
  });

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => {
      let updatedCheckedItems;
  
      if (item === 'All') {
        const allChecked = !prevCheckedItems.All;
        updatedCheckedItems = {
          All: allChecked,
          Hotel: allChecked,
          Apartment: allChecked,
          Resort: allChecked,
          Villa: allChecked,
        };
      } else {
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every((value) => value);
      }
  
      return updatedCheckedItems;
    });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hotel Type</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="All"
          checked={checkedItems.All}
          onPress={() => handleCheckboxChange('All')}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Hotel"
          checked={checkedItems.Hotel}
          onPress={() => handleCheckboxChange('Hotel')}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Apartment"
          checked={checkedItems.Apartment}
          onPress={() => handleCheckboxChange('Apartment')}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Resort"
          checked={checkedItems.Resort}
          onPress={() => handleCheckboxChange('Resort')}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Villa"
          checked={checkedItems.Villa}
          onPress={() => handleCheckboxChange('Villa')}
        />
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
    justifyContent:'center',
    alignSelf:'center'
},
  heading: {
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkboxContainer: {
    marginTop: 10
  },
});

export default HotelTypes;
