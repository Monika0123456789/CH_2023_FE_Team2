import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/roomOverview";
import { BedDouble, ListStart, MapPin, MoveLeft } from "lucide-react-native";
import { useState } from "react";

export default function RoomOverview() {
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
        <Text style={styles.heading1}>Downtown Delight</Text>
        <Text style={styles.heading3}>Room Number : 2</Text>
        <Text style={styles.parah}>
          <MapPin color="black" />
          5855 W Century Blvd, Los Angeles - 90045
        </Text>
        <Text style={styles.parah}>
          Offering garden views, Downtown Delight is an accommodation situated
          in Bangalore, 3.1 km from Chinnaswamy Stadium and 3.8 km from
          Visvesvaraya Industrial and Technological Museum.
        </Text>

        <View style={styles.iconsContainer}>
          <Text>
            <BedDouble style={styles.icons} />
            Type <Text style={{ fontWeight: "bold" }}>King</Text>
          </Text>
          <Text>
            <MoveLeft style={styles.icons} />
            Side : <Text style={{ fontWeight: "bold" }}>Left Side</Text>
          </Text>
          <Text>
            <ListStart style={styles.icons} />
            Floor :<Text style={{ fontWeight: "bold" }}> 3rd Floor(t5)</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
