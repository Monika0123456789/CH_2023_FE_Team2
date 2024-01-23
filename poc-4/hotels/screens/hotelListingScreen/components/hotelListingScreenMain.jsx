
  import { Alert, Button, Pressable, ScrollView, Text, View , Modal, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from "react-native";
  import { styles } from "../hotelListingScreen-styles/hotelListingScreen";

  import { ArrowLeftCircle, ArrowRightCircle, Presentation, Settings } from 'lucide-react-native';
  import data from "../../../assets/json/hotel-booking.json";
  import Icon from 'react-native-vector-icons/FontAwesome';

  import HotelListingScreenCard from "./hotelListingScreenCard";
  import Footer from "../../footer/components/footer.jsx";
  import HotelTypes from './hotelTypes';
  import Amenities from './Amenities';
  import PopularType from './popularType';
  import CustomerRating from './customerRating';
  import RatingStar from './ratingStar';
  import DoubleRangeSlider from './priceRange';
  import { useHotelContext } from '../components/hotelcontext'; 
  import { useState, useMemo } from "react";



  export default HotelListingMain = ({navigation}) => {
      const [button1Clicked, setButton1Clicked] = useState(true);
      const [button2Clicked, setButton2Clicked] = useState(false);
      const [modalVisible, setModalVisible] = useState(null);
    const [selectedHotelTypes, setSelectedHotelTypes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const { setHotelTypesCheckedItems,setDoubleRangeSliderState, setSelectedAmenitiesState,setSelectedRatingState} = useHotelContext(); 

      const handleButtonClick = () => {
          setButton1Clicked(!button1Clicked);
          setButton2Clicked(!button2Clicked);
      }

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
          setHotelTypesCheckedItems({
            All: false,
            Hotel: false,
            Apartment: false,
            Resort: false,
            Villa: false 
          });
          setDoubleRangeSliderState([0, 10000]); 
          setSelectedAmenitiesState({
            'All': false,
            'Air conditioning': false,
            'Business Services': false,
            'Non-smoking rooms': false,
            'Ironing service': false,
            '24-hour front desk': false,
            'Caretaker': false,
            'Concierge service': false,
            'Laundry': false,
            'Family rooms': false,
            '24-hour security': false,
            'Balcony': false,
            'Free Wifi': false,
            'Bar':false
          }),
          setSelectedRatingState(null)
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
              return  <HotelTypes onChange={handleHotelTypesChange} />;
        case 'Amenities':
        return <Amenities onAmenitiesChange={handleAmenitiesChange} />;
      case 'PopularType':
        return <PopularType />;
      case 'CustomerRating':
        return <CustomerRating onRatingChange={handleRatingChange} />;
      case 'RatingStar':
        return <RatingStar />;
      case 'DoubleRangeSlider':
        return <DoubleRangeSlider onPriceChange={handlePriceRangeChange} />;
      default:
        return null;
    }
  };

      return(
          <>
          <View style={styles.container}>
    <ScrollView horizontal>
      {textItems.map((item) => (
        <TouchableOpacity key={item.key} onPress={() => handleTextClick(item.key)}>
          <View>
            <Text style={styles.textContainer}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    <Icon name="sliders" size={24} color="#000" />
  </View>

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
        <ScrollView>
      {filterData.length > 0 ? (
          (button1Clicked && !button2Clicked ? filterData : button2Clicked && !button1Clicked ? filterData.reverse() : []).map((hotelListingObj, index) => (
              <HotelListingScreenCard key={index} hotelListingObj={hotelListingObj} navigation={navigation}/>
          ))
      ) : (
          <Text style={{padding:'5%',fontSize:20}}>No data available for your search</Text>
      )}

      {/* container containing the toggle buttons */}
      <View style={styles.toggle_button_container}>
          {/* previous button */}
          <Pressable onPress={() => handleButtonClick('previous')}>
              <ArrowLeftCircle color="black" size="30" />
          </Pressable>

          {/* button 1 */}
          <Pressable style={{...styles.toggle_buttons, backgroundColor : button1Clicked ? "blue" : "rgb(216, 204, 189)"}} onPress={() => handleButtonClick('button1')}>
              <Text style={{color : button1Clicked ? "white": "black"}}>1</Text>
          </Pressable>

          {/* button 2 */}
          <Pressable style={{...styles.toggle_buttons, backgroundColor : button2Clicked ? "blue" : "rgb(216, 204, 189)"}} onPress={() => handleButtonClick('button2')}>
              <Text style={{color : button2Clicked ? "white": "black"}}>2</Text>
          </Pressable>

          {/* next button */}
          <Pressable onPress={() => handleButtonClick('next')}>
              <ArrowRightCircle color="black" size="30"/>
          </Pressable>
      </View>
  </ScrollView>

              
              <Footer navigation={navigation}/>
          </>
      )
  }




