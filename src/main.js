import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard); //전역등록

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
