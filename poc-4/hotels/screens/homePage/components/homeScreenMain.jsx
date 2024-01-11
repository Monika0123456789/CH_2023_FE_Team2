
// home screen main content goes here

import { Text, View } from "react-native";
import SectionOneComp from './sectionOneComp';
import Section2 from "./section2.jsx";

export default function HomeScreen() {
    return (
    <View>
      
      <SectionOneComp/>
      <Section2/>
     
    </View>
  );

};
