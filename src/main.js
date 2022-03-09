import { createApp } from 'vue';
import Particles from 'particles.vue3';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(Particles).mount('#app');
