

import  ParentComponent  from "./section3-parentcomp";
import { Section2 } from "./section2.component";

import { Section2 } from "./section2.component";
import  ParentComponent  from "./section3-parentcomp";
import { Section4 } from "./section4";

import { SectionOneComp } from "./section1";


export let HotelLandingPageMain = () => {
  return (
    <div>
      <SectionOneComp/>
      <Section2/>
     < ParentComponent />
  <Section4/>

    </div>
  );
};