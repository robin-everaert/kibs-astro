<template>
    <main id="main" class="main-home">
        <div class="container">
            <section class="row intro mt-5">
                <div class="col-12">
                    <h1 class="text-center">Welcome to my Application Nasa Feed</h1>
                    <p class="fst-18  ps-1 pe-1 text-justify">
                        <span class="d-block fst-italic">Hi everyone!</span> 
                        On a rainy Sunday, while feeling a bit bored, I stumbled upon NASA's API.
                        I've been passionate about astronomy and development since I was young, so it felt natural to make the most of this discovery.
                    </p>
                    <p>
                        This application, built with Vue.js 3, showcases the most relevant information from NASA's offerings, as seen through my eyes.
                    </p>
                    <p class="fw-bold">Enjoy exploring!</p>
                </div>
            </section>
            <hr class="hr" />
            <section class="row article-of-the-day-container mt-5">
                <div class="col12">
                    <h2 class="text-center">Article Of The Day</h2>
                    <h4>{{ data.title }}</h4>
                    <span class="fst-italic">On {{ data.date }}</span>
                    <!-- Code image -->
                    <div
                    class="media-container d-flex justify-content-center align-items-center mt-5"
                    v-if="data.media_type === 'image'"
                    >
                        <img :src="data.url" :alt="data.title" class="img img-fluid" />
                    </div>
                    <div
                    class="media-container d-flex justify-content-center align-items-center mt-3"
                    v-else
                    >
                        <YoutubePlayer :videoUrl="data.url" :videoTitle="data.title" />
                    </div>       
                    <p class="text-justify mt-3 mt-md-4 ps-1 pe-1">{{ data.explanation }}</p>
                </div>
            </section>
        </div>
    </main>
  </template>
  
  <script>
    import { useNasaStore } from '../../stores/nasaStore';
    import YoutubePlayer from '../YoutubePlayer.vue';

export default {
  name: "HomeView",
  components: { 
    YoutubePlayer 
  },
  setup() {
    const nasaStore = useNasaStore();

    return {
      data: nasaStore.data,
      isLoading: nasaStore.isLoading,
      error: nasaStore.error,
    };
  },
};
  </script>
  
  <style scoped>
  </style>
  