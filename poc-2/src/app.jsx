import { FilterProvider } from "./webPages/hotelListingPage/components/fiterContext";
import { Main } from "./webPages/main";

export  let App = () =>{
  return <div>
   <FilterProvider>
      <Main/>
    </FilterProvider>
  </div>
}