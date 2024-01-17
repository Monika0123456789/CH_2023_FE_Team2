import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// DetailSectionOne component
export const DetailSectionOne = ({ hotelName }) => {
  return (
    <ScrollView>
      <View style={styles.imgSection}>
        <Text>{hotelName}</Text>

        <View style={styles.infoContainer}>
          <TouchableOpacity>
            <Icon name="eye" size={20} color="black" style={styles.eyeIcon} />
            <Text style={styles.viewOnMapText}>View On Map</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageSection}>
          <View style={styles.gridContent}>
            <Image style={styles.image} source={require('../../../assets/images/16.jpg')} />
          </View>
          <View style={styles.gridContent}>
            <Image style={styles.image} source={require('../../../assets/images/13.jpg')} />
          </View>
          <View style={styles.gridContent}>
            <Image style={styles.image} source={require('../../../assets/images/12.jpg')} />
          </View>
          <View style={styles.gridContent}>
            <Image style={styles.image} source={require('../../../assets/images/12(1).jpg')} />
            <TouchableOpacity style={styles.overlayContainer}>
              <Text style={styles.whitetext}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  imgSection: {
    padding: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
  },
  viewOnMapText: {
    marginLeft: 10,
  },
  imageSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridContent: {
    width: '49%', 
    marginBottom: '1%',
  },
  image: {
    width: '100%',
    height: 130, 
    borderRadius: 15,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whitetext: {
    color: 'white',
  },
  eyeIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
};
