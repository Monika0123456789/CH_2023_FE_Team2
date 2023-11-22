// main component of this webpage -- here we will render the components of this page

import { Section2 } from "./section2.component";
import  ParentComponent  from "./section3-parentcomp";
import { Section4 } from "./section4";
import { HeaderComp } from "../../header/header";
import { SectionOneComp } from "./section1";

export let HotelLandingPageMain = () => {
  return (
    <div>
      <HeaderComp/>
      <SectionOneComp/>
      <Section2/>
     < ParentComponent />
  <Section4/>

    </div>
  );
};