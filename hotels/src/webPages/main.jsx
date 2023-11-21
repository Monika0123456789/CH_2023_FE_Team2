import { HotelListingPageMain } from "./hotelListingPage/components/hotelListingPageMain"
import { LandingPageMain } from "./landingPage/components/landingPageMain"

export let Main = () => {
  return <>
  <h1>hello from main component that contains all main components of every webpage</h1>
  <LandingPageMain/>
  <HotelListingPageMain/>
  </>
}