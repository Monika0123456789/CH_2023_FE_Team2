
import "./common.css";
import { DetailPageMain } from "./hotelDetailPage/components/hotel-detail-page-main";
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";
import { Footer } from "./footer/components/footer";
import { HeaderComp } from "./header/components/header";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckoutMain } from "./checkoutPage/components/checkoutMain";


export let Main = () => {
  return (
    <>
      <HeaderComp />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HotelLandingPageMain />} />
            <Route
              path="/hotelListingPage"
              element={<HotelListingPageMain />}
            />
            <Route path="/detailPage" element={<DetailPageMain />} />
            <Route path="/checkout" element={<CheckoutMain />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};


