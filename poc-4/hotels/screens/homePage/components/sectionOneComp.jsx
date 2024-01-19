import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {styles} from "./sectionOnestyle"
import { Navigation } from 'lucide-react-native';
const SectionOneComp = ({navigation}) => {
  const handleListing=()=>{
    navigation.navigate('HotelListing');
  }
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../../assets/images/06.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.heading}>Find the top Hotels nearby.</Text>
          <Text style={styles.description}>
            We bring you not only a stay option, but an experience in your budget to enjoy the luxury.
          </Text>
          <TouchableOpacity style={styles.discoverButton} onPress={handleListing}>
            <Text style={styles.buttonText}>Discover Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Image source={require('../../../assets/images/headphone.svg')} alt="" />
        <Text style={styles.supportText}>24/7</Text>
        <Text>Guide Supports</Text>
      </View>
    </ScrollView>
  );
};



export default SectionOneComp;
