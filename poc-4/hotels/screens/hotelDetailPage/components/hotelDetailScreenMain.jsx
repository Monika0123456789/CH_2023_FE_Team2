

import { ScrollView, Text, View } from "react-native";
import  DetailSectionOne  from "./DetailsectionOne";
import DetailSectionTwo from "./DetailSectionTwo";
import DetailSectionThree from "./DetailSectionThree";

export default DetailScreenMain = ({navigation}) => {
    return (
      <ScrollView>
        <DetailSectionOne navigation={navigation}/>
        <DetailSectionTwo/>
        <DetailSectionThree/>
        {/* <Text>Hello</Text> */}
      </ScrollView>
  );
};
