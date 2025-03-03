<template>
    <main id="main" class="main main-asteroid">
        <div class="container">
            <div class="rwo">
                <div class="col-12">
                    <h1>Asteroid View</h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

import { useAsteroidStore } from '@/stores/asteroidStore.js';
import { onMounted } from 'vue';
// import Flare from '../asteroid/Flare.vue';

export default {
  name: "asteroidActivityView",
//   components: { 
//     Flare
//   },
  setup() {
    const asteroidStore = useAsteroidStore();

    onMounted(() => {
      asteroidStore.fetchFLR();
    });

    return { asteroidStore };
  },

};

  </script>