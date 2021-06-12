import { createApp } from 'vue';
import Axios from 'axios';

import App from './App.vue';
import router from './router';

import './assets/styles/index.pcss';
// import 'bootstrap/dist/css/bootstrap.min.css';
Axios.defaults.baseURL = 'https://tenderino.herokuapp.com';

createApp(App).use(router).mount('#app');
