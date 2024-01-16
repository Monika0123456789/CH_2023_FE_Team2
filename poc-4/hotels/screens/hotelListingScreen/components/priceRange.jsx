import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceSlider = () => {
  const [values, setValues] = useState([200, 1000]);

  useEffect(() => {
    // update the component's state if needed
  }, []); // You might have specific dependencies for your useEffect

  const formatPrice = (value) => `$${value}`;

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Price Range</Text>
      <MultiSlider
        values={values}
        onValuesChange={handleChange}
        min={200}
        max={1000}
        step={1}
        sliderLength={250}
        snapped
        selectedStyle={{ backgroundColor: 'green' }}
      />
      <View>
        <Text>Price Range: {formatPrice(values[0])} to {formatPrice(values[1])}</Text>
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
    fontSize: 18,
  },
});

export default PriceSlider;
