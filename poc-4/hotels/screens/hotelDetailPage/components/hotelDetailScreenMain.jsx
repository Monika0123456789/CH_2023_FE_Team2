
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import  DetailSectionOne  from "./detailSectionOne";

export default DetailScreenMain = ({ navigation }) => {
  return (
    <ScrollView>
      <DetailSectionOne navigation={navigation} />
      {/* <Text>Hello</Text> */}
    </ScrollView>
  );
};
