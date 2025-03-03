<template>
    <main id="main" class="main main-asteroid">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Asteroid View</h1>
                </div>
            </div>

            <hr class="hr" />
            <section class="row solar-flare-container mt-5">
                <div class="col-12">
                    <Neo :data="asteroidStore.neoData"/>
                </div>
            </section>

        </div>
    </main>
</template>

<script>

import { useAsteroidStore } from '@/stores/asteroidStore.js';
import { onMounted } from 'vue';
import Neo from '../asteroid/Neo.vue';

export default {
  name: "asteroidActivityView",
  components: { 
    Neo
  },
  setup() {
    const asteroidStore = useAsteroidStore();

    onMounted(() => {
      asteroidStore.fetchNEO();
    });

    return { asteroidStore };
  },

};

  </script>