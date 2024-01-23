

import { ScrollView, Text, View } from "react-native";
import SectionOneComp from './sectionOneComp';
import Section2 from "./section2.jsx";
import { TestimonialMain } from "./testimonialMain";
import ParentComponent from "./section3ParentComp";
import Footer from "../../footer/components/footer.jsx";

export default HomeScreen = ({navigation}) => {
    return (
      <>
        <ScrollView>
          <SectionOneComp navigation={navigation}/>
          <Section2/>
          <ParentComponent navigation={navigation}/>
          <TestimonialMain/>
        </ScrollView>
        <Footer navigation={navigation}/>
      </>
  );

};
