import { createRouter, createWebHistory } from 'vue-router';
import HeaderMain from './webpages/header/components/headerMain.vue';

const routes = [
  {
    path: '/',
    component: HeaderMain,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
