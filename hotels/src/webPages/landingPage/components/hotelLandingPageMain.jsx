import { Section2 } from "./section2.component";

// main component of this webpage -- here we will render the components of this page


import { HeaderComp } from "../../header/header";
import { SectionOneComp } from "./section1";

export let HotelLandingPageMain = () => {
  return (
    <div>

      <HeaderComp/>
      <SectionOneComp/>
      <Section2/>

    </div>
  );
};