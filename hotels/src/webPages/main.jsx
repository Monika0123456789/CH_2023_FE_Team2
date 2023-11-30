
import "./common.css";
import { DetailPageMain } from "./hotelDetailPage/components/hotel-detail-page-main";
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";
// import { Footer } from "./footer/components/footer";
import { HeaderComp } from "./header/components/header";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLogin } from "./admin/components/adminLogin";
import { Footer } from "./footer/components/footer";
import { CheckoutMain } from "./checkoutPage/components/checkoutMain";


export let Main = () => {
  return (
    <>
      <HeaderComp />

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HotelLandingPageMain />} />
            <Route exact path="/hotelListingPage" element={<HotelListingPageMain />} />
            <Route exact path="/detailPage" element={<DetailPageMain />} />
            <Route exact path="/adminlogin" element={<AdminLogin/> } />
            <Route exact path="/footer" element={<Footer/> } />
            <Route path="/checkout" element={<CheckoutMain />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};


