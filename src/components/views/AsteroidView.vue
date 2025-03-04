<template>
    <main id="main" class="main main-asteroid">
        <div class="container">
            <div class="row intro mt-5">
                <div class="col-12">
                    <h1 class="text-center">Asteroid</h1>
                    <p class="fst-18  ps-1 pe-1 text-justify">
                        Presentation text
                    </p>
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