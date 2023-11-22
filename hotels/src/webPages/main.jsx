import { Footer } from "./footer/components/footer"
import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain"
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain"

export let Main = () =>{
  return <div>
    {/* landing page of the application renders here */}
    <HotelLandingPageMain/>

    {/* listing page of the application renders here */}
    <HotelListingPageMain/>

    <Footer/>
  </div>
}