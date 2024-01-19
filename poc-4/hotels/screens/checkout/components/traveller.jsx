import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/traveller";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function Traveller({ id, removeTraveller }) {
  const [travellerDetails, setTravellerDetails] = useState({
    fullname: "",
    dob: null,
  });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      setTravellerDetails({ ...travellerDetails, dob: selectedDate });
    }
  };
  const showDatePicker = () => {
    setShow(true);
  };
  const handleRemove = () => {
    removeTraveller(id);
  };

  return (
    <View style={styles.travellerContainer}>
      <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
        <Text style={{ color: "rgba(43,39,241,0.777)" }}>Remove</Text>
      </TouchableOpacity>
      <Text style={styles.formLabel}>Full Name</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.formLabel}>Date of Birth</Text>
      <TouchableOpacity style={styles.textInput} onPress={showDatePicker}>
        {travellerDetails.dob ? (
          <Text>{travellerDetails.dob.toLocaleDateString()}</Text>
        ) : (
          <Text>Choose Date</Text>
        )}
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}
