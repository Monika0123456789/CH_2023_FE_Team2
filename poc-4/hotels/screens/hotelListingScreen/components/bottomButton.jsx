import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BottomButton = () => {
  const handleClearAllClick = () => {
   
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClearAllClick}>
        <Text style={styles.clearAllText}>Clear all</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filter Result</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 5,
    width: 300,
    justifyContent: 'space-between',
    alignSelf: 'center',
    
  },
  clearAllText: {
    marginTop:'20%'
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
  },
  filterButtonText: {
    color: 'white',
  },
});

export default BottomButton;
