import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/styles/index.pcss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// Axios.defaults.baseURL = 'https://tenderino.herokuapp.com';
// Axios.defaults.baseURL = 'http://10.129.0.252:3030';

createApp(App).use(router).mount('#app');
