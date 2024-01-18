
import { ScrollView, Text, View } from "react-native";
import  DetailSectionOne  from "./DetailsectionOne";
import DetailSectionTwo from "./DetailSectionTwo";
import DetailSectionThree from "./DetailSectionThree";

export default DetailScreenMain = () => {
    return (
      <ScrollView>
        <DetailSectionOne/>
        <DetailSectionTwo/>
        <DetailSectionThree/>
        {/* <Text>Hello</Text> */}
      </ScrollView>
  );

};
