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
    path: "/checkoutPage/:hotelId",
    name : "checkout",
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
    beforeEnter: (to, from, next) => {
      // Check the loggedIn status before allowing navigation
      const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
      if (loggedIn) {
        // If logged in, allow navigation to the admin dashboard
        next();
      } else {
        // If not logged in, redirect to the login page
        next("/adminLogin"); 
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
