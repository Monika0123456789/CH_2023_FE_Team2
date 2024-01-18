import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/roomOverview";
import { BedDouble, ListStart, MapPin, MoveLeft } from "lucide-react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  increaseCount,
  decreaseCount,
} from "../redux/actions/roomQuantity.actions";

export default function RoomOverview() {
  const rooms = useSelector((store) => store.roomCount);
  const dispatch = useDispatch();
  // console.log(rooms);

  // paths of images used in this component
  const imagePaths = [
    require("../../../assets/images/room1.jpeg"),
    require("../../../assets/images/room1(2).jpeg"),
    require("../../../assets/images/room1(3).webp"),
    require("../../../assets/images/16.jpg"),
  ];

  // selecting the image clicked i-e selecting the index of image selected
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // handling the press on image
  const handleImagePress = (index) => {
    // Changing the dimensions only for the clicked image
    setSelectedImageIndex(index);
  };

  // handling room count where count cannot be greater than 9 or less than 1

  const handleIncrement = () => {
    if (rooms + 1 > 9) {
      alert("you reached the maximum booking allowed for an individual user");
    } else {
      // setRoomCount((prevCount) => prevCount + 1);
      dispatch(increaseCount());
    }
  };
  const handleDecrement = () => {
    if (rooms - 1 <= 0) {
      alert("you need to select at least one room");
    } else {
      // setRoomCount((prevCount) => prevCount - 1);
      dispatch(decreaseCount());
    }
  };
  // dummy state to store hotel details
  const [hotelDetails, setHotelDetails] = useState({
    hotelName: "Downtown Delight",
    roomNumber: 2,
    location: "5855 W Century Blvd, Los Angeles - 90045",
    shortDescription:
      "Offering garden views, Downtown Delight is an accommodation situated in Bangalore, 3.1 km from Chinnaswamy Stadium and 3.8 km from Visvesvaraya Industrial and Technological Museum.",
    price: "",
  });
  return (
    <View>
      <Text style={styles.heading1}>Booking Details</Text>
      {/* --------------- container of room images ----------- */}
      <View style={styles.roomImageContainer}>
        {/* enlarged image */}
        <Image
          style={styles.enlargedImageStyles}
          source={
            selectedImageIndex !== null ? imagePaths[selectedImageIndex] : null
          }
        />
        {/* smaller room  images */}
        <View style={styles.smallImagesContainer}>
          {imagePaths.map((path, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImagePress(index)}
            >
              <Image style={[styles.smallImageStyles]} source={path} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* hotel details such as name, rom number , location and short description -*/}
      <View>
        <Text style={styles.heading1}>{hotelDetails.hotelName}</Text>
        <Text style={styles.heading3}>
          Room Number : {hotelDetails.roomNumber}
        </Text>
        <Text style={styles.parah}>
          <MapPin color="black" />
          {hotelDetails.location}
        </Text>
        <Text style={styles.parah}>{hotelDetails.shortDescription}</Text>

        {/* icons container */}
        <View style={styles.iconsMainContainer}>
          <View style={styles.iconsContainer}>
            <BedDouble style={styles.icons} />
            <Text>
              Type <Text style={{ fontWeight: "bold" }}>King</Text>
            </Text>
          </View>
          <View style={styles.iconsContainer}>
            <MoveLeft style={styles.icons} />
            <Text>
              Side : <Text style={{ fontWeight: "bold" }}>Left Side</Text>
            </Text>
          </View>
          <View style={styles.iconsContainer}>
            <ListStart style={styles.icons} />
            <Text>
              Floor :<Text style={{ fontWeight: "bold" }}> 3rd Floor(t5)</Text>
            </Text>
          </View>
        </View>
      </View>
      {/* room quantity selector container */}
      <View style={styles.roomQuantitySelectorContainer}>
        <TouchableOpacity
          style={styles.roomSelectorButton}
          onPress={handleIncrement}
        >
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityDisplay}>{rooms}</Text>
        <TouchableOpacity
          style={styles.roomSelectorButton}
          onPress={handleDecrement}
        >
          <Text style={{ color: "white" }}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
