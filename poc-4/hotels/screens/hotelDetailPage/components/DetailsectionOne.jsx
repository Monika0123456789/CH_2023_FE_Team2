import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { FontAwesome as FaIcon } from '@expo/vector-icons';

const DetailSectionOne = ({ hotelName }) => {
  return (
    <ScrollView>
      <View style={styles.imgSection}>
        <Text>{hotelName}</Text>

        <View style={styles.locationContainer}>
        
          <Text>
            <FaIcon name="eye" size={20} />
            &nbsp;View On Map
          </Text>
        </View>

        <View style={styles.imageSection}>
          <View style={styles.gridContent}>
            <Image source={require("../../../assets/images/16.jpg")} style={styles.image} />
          </View>
          <View style={styles.gridContent}>
            <Image source={require('../../../assets/images/13.jpg')} style={styles.image} />
          </View>
          <View style={styles.gridContent}>
            <Image source={require('../../../assets/images/12(1).jpg')} style={styles.image} />
          </View>
          <View style={styles.gridContent}>
            <Image source={require('../../../assets/images/01(2).jpg')} style={styles.image} />
            <Text style={styles.overlayContainer}>View all</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  imgSection: {
    padding: 10,
    alignItems: 'center',
  },
  imageSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: "1%",
  },
  gridContent: {
    width: '48%', // Adjust as needed
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120, // Adjust as needed
    borderRadius: 8,
    marginBottom: 5,
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    left: 0,
    top: 0,
    textAlign : "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 60,
    color: 'white',
    borderRadius: 5,
  },
});

export default DetailSectionOne;
