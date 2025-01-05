<template>
    <main id="main" class="main main-solar-activity">
        <div class="container">
            <section class="row intro mt-5">
                <div class="col-12">
                    <h1 class="text-center">Solar Activity</h1>
                    <p class="fst-18  ps-1 pe-1 text-justify">
                        Presentation text
                    </p>
                </div>
            </section>
            <hr class="hr" />
            <section class="row solar-flare-container mt-5">
                <div class="col12">
                    <Flare :data="solarStore.flrData"/>
                </div>
            </section>
        </div>
    </main>
  </template>
  
<script>

import { useSolarStore } from '@/stores/solarStore.js';
import { onMounted } from 'vue';
import Flare from '../solar/Flare.vue';

export default {
  name: "SolarActivityView",
  components: { 
    Flare
  },
  setup() {
    const solarStore = useSolarStore();

    onMounted(() => {
      solarStore.fetchFLR();
    });

    return { solarStore };
  },

};


  </script>
  
  <style scoped>
    .--bs-table-bg {
        background: transparent !important;
    }
  </style>
  