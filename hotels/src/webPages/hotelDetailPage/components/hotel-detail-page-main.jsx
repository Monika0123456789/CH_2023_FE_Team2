// import { DemoComp } from "./demo";
import { Footer } from "../../footer/components/footer";

import { DetailSectionOne } from "./section1";
import { DetailSectionTwo } from "./section2";
import { DetailSectionThree } from "./section3";
import HotelDetail from "./section4";

import { DetailSectionFive } from "./section5";
// import { Demo } from "./demo";
import commonStyle from "../../common.module.css"

export let DetailPageMain = () => {
    return (
      <>
        <div className={commonStyle.container}>
          <DetailSectionOne />
          <DetailSectionTwo />
          <DetailSectionThree />
          <HotelDetail />
          <DetailSectionFive />
        </div>
        <Footer />
      </>
    );
  };
  