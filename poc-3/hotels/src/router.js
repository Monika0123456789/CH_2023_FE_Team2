import { createRouter, createWebHistory } from 'vue-router';

import HomeComp from "./webpages/homePage/components/home.vue";
import CheckoutComp from "./webpages/checkoutPage/components/checkoutMain.vue";
import  HotelDetails from './webpages/hotelDetailPage/components/hotelDetailMain.vue';
import HotelListing from './webpages/hotelListingPage/components/hotelListMain.vue'
import Admin from './webpages/admin/components/adminLogin.vue'
import AdminDashboard from "./webpages/admin/components/adminDashboard.vue";

const routes = [
  {
    path: "/",
    component: HomeComp,
  },
  {
    path: "/checkoutPage",
    component: CheckoutComp,
  },
  {
    path: "/hoteldetails",
    component: HotelDetails,
  },
  {
    path: "/hotellisting",
    component: HotelListing,
  },
  {
    path: "/hoteldetails/:hotelId",
    name: "hoteldetails",
    component: HotelDetails,
    props: true,
  },
  {
    path: "/adminLogin",
    component: Admin,
  },
  {
    path: "/adminDashboard",
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
