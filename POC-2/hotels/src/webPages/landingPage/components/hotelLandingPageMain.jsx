import { HeaderComp } from "./header";
import { SectionOneComp } from "./section1";

// main component of this webpage -- here we will render the components of this page
export let HotelLandingPageMain = () => {
  return (
    <div>
      <HeaderComp/>
      <SectionOneComp/>
      
    </div>
  );
};