
import "./common.css";
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";
import { Footer } from "./footer/components/footer";
import { HeaderComp } from "./header/components/header";


import { BrowserRouter, Routes, Route } from "react-router-dom";


export let Main = () => {
  return (
    // <div className="container">
      
    // {/* landing page of the application renders here */}
    // <HotelLandingPageMain/>

    // {/* listing page of the application renders here */}
    // <HotelListingPageMain/>

    // {/* footer of the application renders here */}
    // <Footer/>
    // </div>
    <div>
      <HeaderComp/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HotelLandingPageMain/> } />
          <Route path="/hotelListingPage" element={ < HotelListingPageMain /> } />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
};


