

import { ScrollView, Text, View } from "react-native";
import SectionOneComp from './sectionOneComp';
import Section2 from "./section2.jsx";
import { TestimonialMain } from "./testimonialMain";

export default HomeScreen = () => {
    return (
      <ScrollView>
        <SectionOneComp/>
        <Section2/>
        <TestimonialMain/>
      </ScrollView>
  );

};
