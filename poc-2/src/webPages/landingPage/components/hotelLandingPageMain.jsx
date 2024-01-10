import { Section2 } from "./section2.component";
import  ParentComponent  from "./section3-parentcomp";
import { Section4 } from "./section4";

import { SectionOneComp } from "./section1";
import { Footer } from "../../footer/components/footer";
import commonStyle from "../../common.module.css"
import { HeaderComp } from "../../header/components/header";


export let HotelLandingPageMain = () => {
  return (
    <>
      <HeaderComp />
      <div className={commonStyle.container}>
        <SectionOneComp />
        <Section2 />
        <ParentComponent />
        <Section4 />
      </div>
      <Footer />
    </>
  );
};