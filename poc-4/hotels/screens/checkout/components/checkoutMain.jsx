// checkout main content goes here

import {ScrollView, View } from "react-native";
import RoomOverview from "./roomOverview";
import {styles} from "../styles/CheckoutMain"
import UserCredentials from "./userCredentials";

export default function CheckoutMain() {
  return (
    <ScrollView style={styles.checkoutContainer}>
      <RoomOverview/>
      <UserCredentials/>
    </ScrollView>
  )
}