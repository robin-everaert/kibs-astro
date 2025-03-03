import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/views/HomeView.vue'
import SolarActivityView from '../components/views/SolarActivityView.vue';
import AsteroidView from '../components/views/AsteroidView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/solar', component: SolarActivityView },
  { path: '/asteroid', component: AsteroidView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;