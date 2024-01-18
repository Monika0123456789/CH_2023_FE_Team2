import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome as FaIcon } from '@expo/vector-icons';

const DetailSectionOne = ({ hotelName, navigation }) => {
  const handlepress = () => {
    navigation.navigate("Checkout");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlepress}>
        <Text>Navigate to checkout</Text>
      </TouchableOpacity>
      <View>
        <View style={styles.imgSection}>
          <Text>{hotelName}</Text>

          <View style={styles.locationContainer}>
            <FaIcon name="location-dot" size={20} />
            <Text>
              <FaIcon name="eye" size={20} />
              &nbsp;View On Map
            </Text>
          </View>

          <View style={styles.imageSection}>
            <View style={styles.gridContent}>
              <Image
                source={require("../../../assets/images/16.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.gridContent}>
              <Image
                source={require("../../../assets/images/13.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.gridContent}>
              <Image
                source={require("../../../assets/images/12(1).jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.gridContent}>
              <Image
                source={require("../../../assets/images/01(2).jpg")}
                style={styles.image}
              />
              <Text style={styles.overlayContainer}>View all</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Add your styles here
const styles = {
  imgSection: {
    // Add your styles for the img-section container
  },
  locationContainer: {
    // Add your styles for the location container
  },
  imageSection: {
    // Add your styles for the image section container
  },
  gridContent: {
    // Add your styles for the grid content container
  },
  image: {
    // Add your styles for the image
  },
  overlayContainer: {
    // Add your styles for the overlay container
  },
};

export default DetailSectionOne;
