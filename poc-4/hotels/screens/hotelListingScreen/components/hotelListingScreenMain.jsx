import React, { useState, useMemo } from "react";
import { ScrollView, Text, Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import HotelListingScreenCard from "./hotelListingScreenCard";
import data from "../../../assets/json/hotel-booking.json";
import HotelTypes from './hotelTypes';
import Amenities from './Amenities';
import PopularType from './popularType';
import CustomerRating from './customerRating';
import RatingStar from './ratingStar';
import DoubleRangeSlider from './priceRange';

const HotelListingMain = () => {
  const [modalVisible, setModalVisible] = useState(null);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleTextClick = (modalName) => {
    if (modalName === 'ClearAll') {
      handleClearAll(); 
    } else {
      setModalVisible(modalName);
    }
  };

  const handleHotelTypesChange = (selectedTypes) => {
    setSelectedHotelTypes(selectedTypes);
  };

  const closeModal = () => {
    setModalVisible(null);
  };

  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleAmenitiesChange = (amenities) => {
    setSelectedAmenities(amenities);
  };

  const handleClearAll = () => {
    setPriceRange([0, 10000]); 
    setSelectedRating(null);
    setSelectedHotelTypes([]);
    setSelectedAmenities([]);
    setModalVisible(null); 
  };

  
  const filterData = useMemo(() => {
    const filteredData = data.items.filter((hotel) => {
      const typeCondition = selectedHotelTypes.length === 0 || selectedHotelTypes.includes(hotel.type);
      const priceRangeCondition = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const ratingCondition = !selectedRating || hotel.rating === selectedRating;
  
      const amenitiesCondition =
        selectedAmenities.length === 0 ||
        (selectedAmenities.includes('all')
          ? true
          : selectedAmenities.every((selectedAmenity) => hotel.Facilities.includes(selectedAmenity)));
  
      return typeCondition && priceRangeCondition && ratingCondition && amenitiesCondition;
    });
  
    return filteredData;
  }, [selectedHotelTypes, priceRange, selectedRating, selectedAmenities]);
  
  
  const textItems = [
    { key: 'HotelTypes', text: 'Hotel Types' },
    { key: 'DoubleRangeSlider', text: 'Price Range' },
    { key: 'CustomerRating', text: 'Custom Rating' },
    { key: 'RatingStar', text: 'Rating Star' },
    { key: 'PopularType', text: 'Popular Types' },
    { key: 'Amenities', text: 'Amenities' },
    { key: 'ClearAll', text: 'Clear All' },
  ];

  const renderPopup = () => {
    switch (modalVisible) {
      case 'HotelTypes':
        return <HotelTypes onChange={handleHotelTypesChange} />;
      case 'Amenities':
          return <Amenities onAmenitiesChange={handleAmenitiesChange} />;
      case 'PopularType':
        return <PopularType />;
      case 'CustomerRating':
        return <CustomerRating onRatingChange={handleRatingChange}  resetOnClose={modalVisible === 'ClearAll'}/>;
      case 'RatingStar':
        return <RatingStar />;
      case 'DoubleRangeSlider':
        return <DoubleRangeSlider onPriceChange={handlePriceRangeChange} resetOnClose={modalVisible === 'ClearAll'} />;
      default:
        return null;
    }
  };

  return (
    <>
      <ScrollView horizontal>
        {textItems.map((item) => (
          <TouchableOpacity key={item.key} onPress={() => handleTextClick(item.key)}>
            <View style={styles.textContainer}>
              <Text style={{ borderRadius: 45, backgroundColor:'grey',padding:10, color:'white'}}>
                {item.text} 
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView>
        {filterData.length > 0 ? (
          filterData.map((hotelListingObj, index) => (
            <HotelListingScreenCard key={index} hotelListingObj={hotelListingObj} />
          ))
        ) : (
          <Text>No data available for your search</Text>
        )}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible !== null}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              {renderPopup()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'end',
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default HotelListingMain;
