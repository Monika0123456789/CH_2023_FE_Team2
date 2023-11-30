// import { DemoComp } from "./demo";

import { DetailSectionOne } from "./section1";
import { DetailSectionTwo } from "./section2";
import { DetailSectionThree } from "./section3";
import HotelDetail from "./section4";

import { DetailSectionFive } from "./section5";
// import { Demo } from "./demo";

export let DetailPageMain = () => {
    return (
      <div>
        <DetailSectionOne/>
        <DetailSectionTwo/>
        <DetailSectionThree/>
        <HotelDetail/>
        <DetailSectionFive/>
        
      </div>
    );
  };
  