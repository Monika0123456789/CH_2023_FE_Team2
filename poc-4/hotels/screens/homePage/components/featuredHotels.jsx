import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {  MapPin, Star } from 'lucide-react-native';

const FeaturedHotels = ({ hotels }) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      horizontal
    >
      {hotels.map((hotel, index) => (
        <View style={styles.card} key={index}>
          <TouchableOpacity style={styles.hotelImg}>
          <Image
              source={hotel.imgSrc} style={{ width: 350, height: 500,borderRadius: 10}}/>
           <View style={styles.locationBtn}>
              <MapPin fill="white" color="black"/>
              <Text style={styles.locationText}>{hotel.location}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.figCaption}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.rate}>${hotel.rate}</Text>
            <Text style={styles.startingAt}>/starting at</Text>
            </View>
            <View style={styles.rating}>
            <Text>{hotel.rating}</Text>
            <Star fill="#fdcc0d" size="20"/>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop:'5%'
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8
  },
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '23%',
    marginRight:25
  },
  hotelImg: {
    position: 'relative',
  },
  locationBtn: {
    position: 'absolute',
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'black',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    
  },

  locationText: {
    color: 'white', 
    fontSize: 16,
    marginLeft:3
  },

  hotelName: {
    marginTop : 3,
    color: 'black',
  },
  figCaption: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rate: {
    color: 'rgb(5, 156, 156)',
  },
  startingAt: {
    marginRight: 8,
  },
  rating: {
    color: 'black',
    marginRight: 8,
    flexDirection: 'row'
  }
});

export default FeaturedHotels;
