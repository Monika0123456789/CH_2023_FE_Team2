import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {  MapPin, Star } from 'lucide-react-native';
import { styles } from "../homePage-styles/featuredHotels";

const FeaturedHotels = ({ hotels, navigation }) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      horizontal
    >
      {hotels.map((hotel, index) => (
         // Rendering Each hotel card within the ScrollView
        <TouchableOpacity
          style={styles.card}
          key={index}
          onPress={() => navigation.navigate("HotelListing")}
        >
          {/* Hotel Image */}
          <View style={styles.hotelImg}>
            <Image
              source={hotel.imgSrc}
              style={{ width: 280, height: 250, borderRadius: 20 }}
            />
            {/* Location Button overlay on the image */}
            <View style={styles.locationBtn}>
              <MapPin fill="white" color="black" />
              <Text style={styles.locationText}>{hotel.location}</Text>
            </View>
          </View>
          {/* Hotel Name */}
          <Text style={styles.hotelName}>{hotel.name}</Text>
           {/* Hotel Rate and Rating */}
          <View style={styles.figCaption}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.rate}>${hotel.rate}</Text>
              <Text style={styles.startingAt}>/starting at</Text>
            </View>
            {/* Hotel Rating */}
            <View style={styles.rating}>
              <Text>{hotel.rating}</Text>
              <Star fill="#fdcc0d" size="20" />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FeaturedHotels;
