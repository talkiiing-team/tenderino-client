import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import EmitterHome from '@/views/EmitterHome.vue';
import Tender from '@/views/Tender.vue';
import ValidatorHome from '@/views/ValidatorHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/emitter',
    component: EmitterHome,
  },
  {
    path: '/emitter/tender/:id',
    component: Tender,
  },
  {
    path: '/validator',
    component: ValidatorHome,
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
