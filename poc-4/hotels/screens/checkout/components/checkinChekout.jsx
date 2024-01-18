import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "../styles/checkinCheckout";
import { useDispatch } from "react-redux";
import { addBookingDetails } from "../redux/actions/roomQuantity.actions";


export default function CheckinCheckout() {
  const dispatch = useDispatch();
  // local state to store checkin and checkout -- that are displayed as value in date input
  const [bookingDates, setBookingDates] = useState({
    checkin: null,
    checkout: null,
  });

  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());

  // states to manage the show and hide of calander
  const [showCheckinPicker, setShowCheckinPicker] = useState(false);
  const [showCheckoutPicker, setShowCheckoutPicker] = useState(false);

  const currentDate = new Date();
  currentDate.setUTCHours(23, 59, 59, 999);
  // funtion to handle checkin date
  const onCheckinDate = (event, selectedCheckinDate) => {
    setShowCheckinPicker(false);
    if (selectedCheckinDate < currentDate) {
      Alert.alert("checkin date cannot be in past");
      // console.log("checkin" + selectedCheckinDate);
    } else {
      setCheckinDate(selectedCheckinDate);
      setBookingDates({ ...bookingDates, checkin: selectedCheckinDate });
    }
  };
  // function to handle checkout date
  const onCheckoutDate = (event, selectedCheckoutDate) => {
    setShowCheckoutPicker(false);
    if (selectedCheckoutDate <= currentDate) {
      Alert.alert("checkout date cannot be same as checkin date or in past");
    } else {
      setCheckoutDate(selectedCheckoutDate);
      // console.log("date"+checkoutDate)
      setBookingDates({ ...bookingDates, checkout: selectedCheckoutDate });
      // console.log("checkout" + bookingDates.checkout);
    }
  };
  // show checkin calander
  const showCheckinDatePicker = () => {
    setShowCheckinPicker(true);
  };
  // show checkout calander
  const showCheckoutDatePicker = () => {
    setShowCheckoutPicker(true);
  };
  // storing data to store
  dispatch(addBookingDetails(bookingDates));
  return (
    <View style={styles.checkinCheckoutContainer}>
      {/* checkin container */}
      <View style={{ width: "50%" }}>
        <Text style={styles.formLabel}>Check-in Date</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={showCheckinDatePicker}
        >
          {bookingDates.checkin ? (
            <Text>{bookingDates.checkin.toLocaleDateString()}</Text>
          ) : (
            <Text>Choose Date</Text>
          )}
        </TouchableOpacity>
        {showCheckinPicker && (
          <DateTimePicker
            value={checkinDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onCheckinDate}
          />
        )}
      </View>

      {/* checkout container */}
      <View style={{ width: "50%" }}>
        <Text style={styles.formLabel}>Check-out Date</Text>
        <TouchableOpacity
          style={styles.textInput}
          onPress={showCheckoutDatePicker}
        >
          {bookingDates.checkout ? (
            <Text>{bookingDates.checkout.toLocaleDateString()}</Text>
          ) : (
            <Text>Choose Date</Text>
          )}
        </TouchableOpacity>
        {showCheckoutPicker && (
          <DateTimePicker
            value={checkoutDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onCheckoutDate}
          />
        )}
      </View>
    </View>
  );
}
