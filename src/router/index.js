import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TendersHome from '@/views/TendersHome.vue';
import Tender from '@/views/Tender.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/emitter',
    component: TendersHome,
  },
  {
    path: '/emitter/tender/:id',
    component: Tender,
  },
  {
    path: '/validator',
    component: TendersHome,
  },
  {
    path: '/validator/tender/:id',
    component: Tender,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
