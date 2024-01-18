import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/userCredentials";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as DocumentPicker from "expo-document-picker";

export default function UserCredentials() {
  // local state to store user data
  const [userCredentials, setUserCredentials] = useState({
    idProof: null,
    name: "",
    email: "",
    phone: "",
    nationality: "IND",
    dob: null,
    gender: "",
  });

  // nations array
  const nationArr = [
    { code: "IND", name: "India" },
    { code: "USA", name: "USA" },
    { code: "CAN", name: "Canada" },
    { code: "GBR", name: "UK" },
    { code: "AUS", name: "Australia" },
    { code: "GER", name: "Germany" },
    { code: "FRA", name: "France" },
    { code: "ITA", name: "Italy" },
    { code: "JPN", name: "Japan" },
    { code: "BRA", name: "Brazil" },
    { code: "CHN", name: "China" },
    { code: "RUS", name: "Russia" },
    { code: "ZAF", name: "South Africa" },
    { code: "ARG", name: "Argentina" },
    { code: "MEX", name: "Mexico" },
    { code: "ESP", name: "Spain" },
    { code: "NED", name: "Netherlands" },
    { code: "SWE", name: "Sweden" },
    { code: "NOR", name: "Norway" },
    { code: "NZL", name: "New Zealand" },
    { code: "SGP", name: "Singapore" },
    { code: "KOR", name: "South Korea" },
    { code: "EGY", name: "Egypt" },
    { code: "NGA", name: "Nigeria" },
    { code: "SAU", name: "Saudi Arabia" },
  ];
  //functions to handle changes in textinputs
  const handleNameChange = (text) => {
    setUserCredentials({ ...userCredentials, name: text });
  };

  const handleEmailChange = (text) => {
    setUserCredentials({ ...userCredentials, email: text });
  };

  const handlePhoneChange = (text) => {
    setUserCredentials({ ...userCredentials, phone: text });
  };

  const handleNationalityChange = (value) => {
    setUserCredentials({ ...userCredentials, nationality: value });
  };

  const handleGenderChange = (value) => {
    setUserCredentials({ ...userCredentials, gender: value });
  };

  // allowing user to select document - upload document functionality
  const [selectedDocument, setSelectedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});

      if (result.type === "success") {
        setSelectedDocument(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // displaying uploaded document information to user
  const renderSelectedDocumentInfo = () => {
    if (selectedDocument) {
      return (
        <View>
          <Text>Selected File:</Text>
          <Text>Name: {selectedDocument.name}</Text>
          <Text>Size: {selectedDocument.size} bytes</Text>
        </View>
      );
    } else {
      return <Text>No file selected</Text>;
    }
  };

  // to handle date of birth.
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShow(false);
    const currentDate = new Date();
    const minimumDate = new Date();
    // Subtract 10 years from the current date -- setting minDate 10 years in past
    minimumDate.setFullYear(currentDate.getFullYear() - 10);
    if (selectedDate < minimumDate) {
      setDate(selectedDate);
      setUserCredentials({ ...userCredentials, dob: selectedDate });
    } else {
      Alert.alert("you must be at least 10 years old to register here");
    }
  };
  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.formContainer}>
      {/* id container */}
      <View>
        <Text style={styles.formLabel}> Upload your Id</Text>
        <TouchableOpacity onPress={pickDocument}>
          <Text style={styles.textInput}>
            <Text style={{ fontWeight: "bold" }}> Select File :</Text>
            {renderSelectedDocumentInfo()}
          </Text>
        </TouchableOpacity>
      </View>
      {/* full name */}
      <View>
        <Text style={styles.formLabel}> Full Name</Text>
        <TextInput
          onChangeText={handleNameChange}
          value={userCredentials.name}
          style={styles.textInput}
        ></TextInput>
      </View>
      {/* email Container */}
      <View>
        <Text style={styles.formLabel}> Email Address</Text>
        <TextInput
          onChangeText={handleEmailChange}
          value={userCredentials.email}
          style={styles.textInput}
        ></TextInput>
      </View>
      {/* mobile number Container */}
      <View>
        <Text style={styles.formLabel}>Mobile Number</Text>
        <TextInput
          onChangeText={handlePhoneChange}
          value={userCredentials.phone}
          keyboardType="numeric"
          style={styles.textInput}
        ></TextInput>
      </View>
      {/* nationality container */}
      <View>
        <Text style={styles.formLabel}>Nationality</Text>

        <Picker
          selectedValue={userCredentials.nationality}
          onValueChange={handleNationalityChange}
          mode="dropdown"
        >
          {nationArr.map((nation) => (
            <Picker.Item
              key={nation.code}
              label={nation.name}
              value={nation.code}
            />
          ))}
        </Picker>
      </View>
      {/* date of birth container */}
      <View>
        <Text style={styles.formLabel}>Date of Birth</Text>
        <TouchableOpacity style={styles.textInput} onPress={showDatePicker}>
          {userCredentials.dob ? (
            <Text>{userCredentials.dob.toLocaleDateString()}</Text>
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
      {/* gender container */}
      <View>
        <Text style={styles.formLabel}>Select Gender</Text>
        <Picker
          selectedValue={userCredentials.gender}
          onValueChange={handleGenderChange}
          mode="dropdown"
          style={{ color: "black" }}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      {/* address container */}
      <View>
        <Text style={styles.formLabel}>Address</Text>
        <TextInput
          style={[styles.textInput, { height: 100, borderWidth: 1 }]}
        ></TextInput>
      </View>
    </View>
  );
}
