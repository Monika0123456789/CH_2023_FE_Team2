import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from "./webpages/homePage/components/home.vue";
import CheckoutComp from "./webpages/checkoutPage/components/checkoutMain.vue";

const routes = [
  {
    path: '/',
    component: HomeComp,
  },
  {
    path : '/checkoutPage',
    component : CheckoutComp
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
