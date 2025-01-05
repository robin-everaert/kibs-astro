import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useNasaStore } from './stores/nasaStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/index.scss';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

(async () => {
  const nasaStore = useNasaStore();
  if (!nasaStore.data) {
    await nasaStore.fetchArticleOfTheDay(); 
  }
  
  app.use(router); 
  app.mount('#app'); 
})();
