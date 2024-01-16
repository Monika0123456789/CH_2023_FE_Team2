import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/userCredentials";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Upload } from "lucide-react-native";
export default function UserCredentials() {
  const [userCredentials, setUserCredentials] = useState({
    idProof: null,
    name: "",
    email: "",
    phone: "",
    nationality: "IND",
    dob: "",
    gender: "",
  });

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

  // const handleDobChange = (text) => {
  //   // Perform date validation as needed
  //   setUserCredentials({ ...userCredentials, dob: text });
  // };

  const handleGenderChange = (value) => {
    setUserCredentials({ ...userCredentials, gender: value });
  };

  const handleUpload = () => {
    alert("Uploading....")
   
  };

  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.formLabel}> Upload your Id</Text>
        <TouchableOpacity onPress={handleUpload}>
          <Text style={styles.idInput}>Upload</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.formLabel}> Full Name</Text>
        <TextInput
          onChangeText={handleNameChange}
          value={userCredentials.name}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.formLabel}> Email Address</Text>
        <TextInput
          onChangeText={handleEmailChange}
          value={userCredentials.email}
          style={styles.textInput}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.formLabel}>Mobile Number</Text>
        <TextInput
          onChangeText={handlePhoneChange}
          value={userCredentials.phone}
          keyboardType="numeric"
          style={styles.textInput}
        ></TextInput>
      </View>
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

      <View>
        <Text style={styles.formLabel}>Date of Birth</Text>
      </View>
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
      <View>
        <Text style={styles.formLabel}>Address</Text>
        <TextInput
          style={[styles.textInput, { height: 100, borderWidth: 1 }]}
        ></TextInput>
      </View>
    </View>
  );
}
