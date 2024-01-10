import { DetailPageMain } from "./hotelDetailPage/components/hotel-detail-page-main";
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";
// import { Footer } from "./footer/components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLogin } from "./admin/components/adminLogin";

import { App } from "./checkoutPage/app";
import { AdminLanding } from "./admin/components/adminLanding";


export let Main = () => {
  return (
    <>
      
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HotelLandingPageMain />} />

            <Route
              exact
              path="/hotelListingPage"
              element={<HotelListingPageMain />}
            />
            <Route exact path="/detailPage/:hotelName/" element={<DetailPageMain />}   />
            <Route exact path="/adminlogin" element={<AdminLogin />} />
            <Route path="/checkout" element={<App/>} />
            <Route path="/adminLanding" element={<AdminLanding/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};


