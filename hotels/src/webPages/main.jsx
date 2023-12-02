
import "./common.css";
import { DetailPageMain } from "./hotelDetailPage/components/hotel-detail-page-main";
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";
// import { Footer } from "./footer/components/footer";
import { HeaderComp } from "./header/components/header";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLogin } from "./admin/components/adminLogin";
import { Footer } from "./footer/components/footer";
import { App } from "./checkoutPage/app";
import { CheckoutMain } from "./checkoutPage/components/checkoutMain";
import { AdminLanding } from "./admin/components/adminLanding";


export let Main = () => {
  return (
    <>
      <HeaderComp />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HotelLandingPageMain />} />
            <Route
              exact
              path="/hotelListingPage"
              element={<HotelListingPageMain />}
            />
            <Route exact path="/detailPage" element={<DetailPageMain />} />
            <Route exact path="/adminlogin" element={<AdminLogin />} />
            <Route exact path="/footer" element={<Footer />} />
            <Route path="/checkout" element={<App/>} />
            <Route path="/adminLanding" element={<AdminLanding/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};


