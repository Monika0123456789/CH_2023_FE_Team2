// import { DemoComp } from "./demo";
import { Footer } from "../../footer/components/footer";

import { DetailSectionOne } from "./section1";
import { DetailSectionTwo } from "./section2";
import { DetailSectionThree } from "./section3";
import hotelData from '../../../json/hotel-booking.json';
import commonStyle from "../../common.module.css"
import { DetailSectionFive } from "./section5";
import { SectionFour } from "./sectionfour";
import { HeaderComp } from "../../header/components/header";

export let DetailPageMain = () => {
    return (
      <>
      <HeaderComp />
        <div className={commonStyle.container}>
          <DetailSectionOne />
          <DetailSectionTwo />
          <DetailSectionThree />

          <SectionFour hotelData={hotelData}/>

          <DetailSectionFive />
        </div>
          <Footer />
      </>
    );
  };
  