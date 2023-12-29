import { createRouter, createWebHistory } from 'vue-router';
import  HomeComp from './webpages/homePage/components/home.vue';
import  HotelDetails from './webpages/hotelDetailPage/components/hotelDetailMain.vue';
import HotelListing from './webpages/hotelListingPage/components/hotelListMain.vue'
const routes = [
  {
    path: '/',
    component: HomeComp,
  },
  {
    path: '/hoteldetails',
    component: HotelDetails,
  },
  {
    path: '/hotellisting',
    component:HotelListing
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
