// checkout main content goes here

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import RoomOverview from "./roomOverview";
import { styles } from "../styles/CheckoutMain";
import UserCredentials from "./userCredentials";
import CheckinCheckout from "./checkinChekout";
import TravellerMain from "./travellerMain";

export default function CheckoutMain() {
  const handleSubmit = () => {
    console.log("submit clicked")
  }
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
          <Text>Dummy</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Check-Out</Text>
          <Text>Dummy</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Total Amount</Text>
          <Text style={{color : "green"}}>Dummy</Text>
        </View>
      </View>

      {/* proceed button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleSubmit}>
        <Text style= {{fontWeight: "bold",color : "white"}}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
