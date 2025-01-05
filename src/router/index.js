import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/views/HomeView.vue'
import SolarActivityView from '../components/views/SolarActivityView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/solar', component: SolarActivityView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;