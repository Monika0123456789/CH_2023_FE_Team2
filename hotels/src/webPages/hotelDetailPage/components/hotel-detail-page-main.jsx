// import { DemoComp } from "./demo";
import { Footer } from "../../footer/components/footer";

import { DetailSectionOne } from "./section1";
import { DetailSectionTwo } from "./section2";
import { DetailSectionThree } from "./section3";
import hotelData from '../../json/hotel-booking.json';

import { DetailSectionFive } from "./section5";
import { SectionFour } from "./sectionfour";




export let DetailPageMain = () => {

    return (
      <div>
        <DetailSectionOne />
        <DetailSectionTwo/>
        <DetailSectionThree/>
        
        <SectionFour hotelData={hotelData} />
        <DetailSectionFive/>
        <Footer/>
      </div>
    );
  };
  