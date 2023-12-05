// import { DemoComp } from "./demo";
import { Footer } from "../../footer/components/footer";

import { DetailSectionOne } from "./section1";
import { DetailSectionTwo } from "./section2";
import { DetailSectionThree } from "./section3";


import { DetailSectionFive } from "./section5";
import { SectionFour } from "./sectionfour";




// import { Demo } from "./demo";
import commonStyle from "../../common.module.css"
import { HeaderComp } from "../../header/components/header";



export let DetailPageMain = () => {
  const hotelData = {
    items:[
      {
         "desc":"Offering garden views, Downtown Delight is an accommodation situated in Bangalore, 3.1 km from Chinnaswamy Stadium and 3.8 km from Visvesvaraya Industrial and Technological Museum.",
         "id":1,
         "img":"https://cf.bstatic.com/xdata/images/hotel/square600/497300786.webp?k=e63fe5456e8b90dcd87512a25893ddc82f894fc3fa02db632640e4426b8bd491&o=",
         "name":"Downtown Delight",
         "type":"Hotel",
         "price":298,
         "rating":3,
   "location":"5855 W Century Blvd, Los Angeles - 90045",
   "additionInfo":["Free Cancellation till 7 Jan 2023", "Free Breakfast"],
   "rooms": [{
     "roomId": 1,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   },{
     "roomId": 2,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   }],
   "Facilities":["Free Wifi", "Free", "Balcony", "24-hour security", "Air conditioning", "Non-smoking rooms", "24-hour front desk", "Concierge service", "Ironing service", "Family rooms", "Laundry" ],
   "longDesc": "Compact yet beautiful 1bhk 306 is situated in Bangalore, 8.5 km from Forum Mall, Koramangala, 12 km from ISKCON Hare Krishna Temple, as well as 13 km from Bull Temple. This property offers access to a balcony, free private parking and free WiFi.The 1-bedroom apartment features a living room with flat-screen TV, and a fully equipped kitchen.Brigade Road is 13 km from the apartment, while Chinnaswamy Stadium is 14 km from the property. The nearest airport is Kempegowda International Airport, 46 km from Compact yet beautiful 1bhk 306.Distance in property description is calculated using © OpenStreetMap"
      },
      {
         "desc":"Located in Bangalore, 8.8 km from ISKCON Hare Krishna Temple, Covie Bannergatta 185 provides accommodation with a shared lounge, free private parking and a terrace.",
         "id":2,
         "img":"https://cf.bstatic.com/xdata/images/hotel/square600/479879940.webp?k=7b06118e7f5a5e5c7af4b80d330a85cdbfb68a648e5dae60a013c7396b62d4af&o=",
         "name":"Covie Bannergatta 185",
         "type":"Apartment",
         "price":298,
         "rating":3.5,
   "location":"31J W Spark Street, California - 24578",
   "additionInfo":["Non Refundable"],
   "rooms": [{
     "roomId": 3,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   },{
     "roomId": 4,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   }],
   "Facilities":["Free Wifi", "Free", "Balcony", "24-hour security", "Air conditioning", "Non-smoking rooms", "24-hour front desk", "Concierge service", "Ironing service", "Family rooms", "Laundry" ],
   "longDesc": "Compact yet beautiful 1bhk 306 is situated in Bangalore, 8.5 km from Forum Mall, Koramangala, 12 km from ISKCON Hare Krishna Temple, as well as 13 km from Bull Temple. This property offers access to a balcony, free private parking and free WiFi.The 1-bedroom apartment features a living room with flat-screen TV, and a fully equipped kitchen.Brigade Road is 13 km from the apartment, while Chinnaswamy Stadium is 14 km from the property. The nearest airport is Kempegowda International Airport, 46 km from Compact yet beautiful 1bhk 306.Distance in property description is calculated using © OpenStreetMap"
      },
      {
         "desc":"Located in Bangalore, 5.8 km from Forum Mall, Koramangala and 10 km from Brigade Road, BluO 1BHK HSR Layout - Terrace Garden, Balcony provides air-conditioned accommodation with a balcony  etc...",
         "id":3,
         "img":"https://cf.bstatic.com/xdata/images/hotel/square600/463565127.webp?k=6b058c162ff6b7f0681e5f90cc0adda0caf47b90d24ea73e8a2cc1f7e920f345&o=",
         "name":"Farmhouse",
         "type":"Apartment",
         "price":395,
         "rating":4,
   "location":"Manhattan street, London - 24578",
   "additionInfo":["Free Cancellation till 7 Jan 2023"],
   "rooms": [{
     "roomId": 5,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   },{
     "roomId": 6,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   }],
   "Facilities":["Free Wifi", "Free", "Balcony", "24-hour security", "Air conditioning", "Non-smoking rooms", "24-hour front desk", "Concierge service", "Ironing service", "Family rooms", "Laundry" ],
   "longDesc": "Compact yet beautiful 1bhk 306 is situated in Bangalore, 8.5 km from Forum Mall, Koramangala, 12 km from ISKCON Hare Krishna Temple, as well as 13 km from Bull Temple. This property offers access to a balcony, free private parking and free WiFi.The 1-bedroom apartment features a living room with flat-screen TV, and a fully equipped kitchen.Brigade Road is 13 km from the apartment, while Chinnaswamy Stadium is 14 km from the property. The nearest airport is Kempegowda International Airport, 46 km from Compact yet beautiful 1bhk 306"
      },
      {
         "desc":"Set in Bangalore and only 3 km from Bull Temple, Vintage Vihara: The Heritage Bungalow offers accommodation with garden views, free WiFi and free private parking.",
         "id":4,
         "img":"https://cf.bstatic.com/xdata/images/hotel/square600/459880008.webp?k=0a501732908137fcb34b70982b854f1f98b38378f7bb7df752684048ee1b356f&o=",
         "name":"Vintage Vihara: The Heritage Bungalow",
         "type":"Resort",
         "price":570,
         "rating":4.5,
   "location":"5855 W Century Blvd, Los Angeles - 90045",
   "additionInfo":["Free Cancellation till 7 Jan 2023", "Free Breakfast"],
   "rooms": [{
     "roomId": 7,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   },{
     "roomId": 8,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   }],
   "Facilities":["Free Wifi", "Free", "Balcony", "24-hour security", "Air conditioning", "Non-smoking rooms", "24-hour front desk", "Concierge service", "Ironing service", "Family rooms", "Laundry" ],
   "longDesc": "Compact yet beautiful 1bhk 306 is situated in Bangalore, 8.5 km from Forum Mall, Koramangala, 12 km from ISKCON Hare Krishna Temple, as well as 13 km from Bull Temple. This property offers access to a balcony, free private parking and free WiFi.The 1-bedroom apartment features a living room with flat-screen TV, and a fully equipped kitchen.Brigade Road is 13 km from the apartment, while Chinnaswamy Stadium is 14 km from the property. The nearest airport is Kempegowda International Airport, 46 km from Compact yet beautiful 1bhk 306.Distance in property description is calculated using © OpenStreetMap"
      },
      {
         "desc":"Attractively located in the Electronic City district of Bangalore, Olive Electronic City - by Embassy Group is set 18 km from Brigade Road, 20 km from Chinnaswamy Stadium and 20 km from Bull Temple.",
         "id":5,
         "img":"https://cf.bstatic.com/xdata/images/hotel/square600/480115419.webp?k=ae02ccf56ec06fbbbfe0cfc13b8c33779d164a081d08f183d8ba5124c83ca67f&o=",
         "name":"Olive Electronic City - by Embassy Group",
         "price":395,
         "type":"Villa",
         "rating":3,
   "location":"31J W Spark Street, California - 24578",
   "additionInfo":["Non Refundable"],
   "rooms": [{
     "roomId": 9,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   },{
     "roomId": 10,
     "roomFacilities": ["closet", "mirror", "cloth rack", "black out curtains", "child safety socket covers", "TV", "AC" ],
     "images": ["https://via.placeholder.com/980x360", "https://via.placeholder.com/980x360"]
     
   }],
   "Facilities":["Free Wifi", "Free", "Balcony", "24-hour security", "Air conditioning", "Non-smoking rooms", "24-hour front desk", "Concierge service", "Ironing service", "Family rooms", "Laundry" ],
   "longDesc": "Compact yet beautiful 1bhk 306 is situated in Bangalore, 8.5 km from Forum Mall, Koramangala, 12 km from ISKCON Hare Krishna Temple, as well as 13 km from Bull Temple. This property offers access to a balcony, free private parking and free WiFi.The 1-bedroom apartment features a living room with flat-screen TV, and a fully equipped kitchen.Brigade Road is 13 km from the apartment, while Chinnaswamy Stadium is 14 km from the property.Distance in property description is calculated using © OpenStreetMap"
      }
   ]
  
};
    return (

      <>
      <HeaderComp />
        <div className={commonStyle.container}>
          <DetailSectionOne />
          <DetailSectionTwo />
          <DetailSectionThree />
          <SectionFour hotelData={hotelData}/>
          <DetailSectionFive />
        </div>
        <Footer />
      </>


    );
  };
  