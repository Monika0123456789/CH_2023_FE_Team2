import "./common.css";
import { DetailPageMain } from "./hotelDetailPage/components/hotel-detail-page-main";
// import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain";
// import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain";

export let Main = () => {
  return (
    <div className="container">
      {/* <HotelLandingPageMain /> */}
       {/* <HotelListingPageMain/> */}
       <DetailPageMain/>
    </div>
  );
};

