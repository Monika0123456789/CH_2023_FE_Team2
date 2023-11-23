
import  ParentComponent  from "./section3-parentcomp";
import { Section2 } from "./section2.component";



import { SectionOneComp } from "./section1";


export let HotelLandingPageMain = () => {
  return (
    <div>

      <SectionOneComp/>
      <Section2/>
     < ParentComponent />
    </div>
  );
};