import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import EmitterHome from '@/views/EmitterHome.vue';
import EmitterTender from '@/views/EmitterTender.vue';

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
    component: EmitterTender,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
