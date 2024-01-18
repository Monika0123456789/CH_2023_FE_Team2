import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import RoomOverview from "./roomOverview";
import { styles } from "../styles/CheckoutMain";
import UserCredentials from "./userCredentials";
import CheckinCheckout from "./checkinChekout";
import TravellerMain from "./travellerMain";
import { useSelector } from "react-redux";
import dataStore from "../store/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function CheckoutMain() {
  const checkin = useSelector((store) => store.checkin);
  const checkout = useSelector((store) => store.checkout);
  const price = useSelector((store) => store.price);

  // useEffect(() => {
  //   // checking data stored
  //   clearData();
  // }, []);

  // // Retrieve data from AsyncStorage
  // const retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("bookingDetails");
  //     if (value !== null) {
  //       console.log("Retrieved data:", value);
  //     } else {
  //       console.log("No data found");
  //     }
  //   } catch (error) {
  //     console.error("Error retrieving data:", error);
  //   }
  // };

// clear data in storage
  // const clearData = async () => {
  //   try {
  //     // Remove the item with the specified key
  //     await AsyncStorage.removeItem("bookingDetails");
  //     console.log("Data cleared successfully");
  //   } catch (error) {
  //     console.error("Error clearing data:", error);
  //   }
  // };


  // generating random id
  const generateId = () => {
    const length = 6;
    let id = "";
    for (i = 0; i < length; i++) {
      const randomID = Math.floor(Math.random() * 10);
      id += randomID.toString();
    }
    // console.log("id is" + id);
    return id;
  };

  // save data to storage
  const handleSubmit = async () => {
    try {
      const id = generateId();
      const bookingDetails = {
        id,
        ...dataStore.getState(),
      };
      // Retrieve existing data from AsyncStorage
      const existingData = await AsyncStorage.getItem("bookingDetails");
      console.log(existingData);
      let currentData = existingData ? JSON.parse(existingData) : [];
      if (!Array.isArray(currentData)) {
        currentData = [];
      }

      // Append the new booking details to the existing data
      currentData.push(bookingDetails);

      await AsyncStorage.setItem("bookingDetails", JSON.stringify(currentData));
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  return (
    <ScrollView style={styles.checkoutContainer}>
      <RoomOverview />
      <UserCredentials />
      <CheckinCheckout />
      <TravellerMain />
      {/* booking summary component */}
      <View style={styles.summaryContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Check-In</Text>
          {checkout ? (
            <Text>{checkin.toLocaleDateString()}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Check-Out</Text>
          {checkout ? (
            <Text>{checkout.toLocaleDateString()}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Total Amount</Text>
          <Text style={{ color: "green" }}>$ {price}</Text>
        </View>
      </View>

      {/* proceed button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleSubmit}>
        <Text style={{ fontWeight: "bold", color: "white" }}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
