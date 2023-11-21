import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain"
import { HotelLandingPageMain } from "./landingPage/components/hotelLandingPageMain"

export let Main = () =>{
  return <div>
    <h1>hello from Main App</h1>
    <HotelLandingPageMain/>
    <HotelListingPageMain/>
  </div>
}