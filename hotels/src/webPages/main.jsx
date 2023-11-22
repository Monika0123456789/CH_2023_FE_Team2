
import "./common.css";
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";
import { Footer } from "./footer/components/footer"


export let Main = () => {
  return (
    <div className="container">
    {/* landing page of the application renders here */}
    <HotelLandingPageMain/>

    {/* listing page of the application renders here */}
    <HotelListingPageMain/>
       <Footer/>
    </div>
  );
};


