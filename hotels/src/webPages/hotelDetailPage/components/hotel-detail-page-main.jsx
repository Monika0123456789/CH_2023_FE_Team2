// import { DemoComp } from "./demo";
import { Footer } from "../../footer/components/footer";
import { DetailSectionOne } from "./section1";
import { DetailSectionTwo } from "./section2";
import { DetailSectionThree } from "./section3";
import { DeatilSectionFour } from "./section4";
import { DetailSectionFive } from "./section5";

export let DetailPageMain = () => {
    return (
      <div>
        <DetailSectionOne/>
        <DetailSectionTwo/>
        <DetailSectionThree/>
        <DeatilSectionFour/>
        <DetailSectionFive/>
        <Footer/>
      </div>
    );
  };
  