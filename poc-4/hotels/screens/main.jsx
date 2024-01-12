

import {  ScrollView} from "react-native";
// import { FooterComp } from "./footer/components/footer";
import { HeaderComp } from "./header/components/headerMain";
import  HomeScreenMain  from "./homePage/components/homeScreenMain"

export let Main = () => {
    return (
        <>
        <HeaderComp/>
      <ScrollView style={{marginBottom:130}}>
      <HomeScreenMain />
        {/* <FooterComp/> */}
      
      </ScrollView>
      </>

      
    );
}

