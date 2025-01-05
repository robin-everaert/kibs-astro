<template>
    <!-- <pre>{{ articleOfTheDay }}</pre> -->
    <h1>{{articleOfTheDay.date}}</h1>
  </template>
  
  <script>
  import { useNasaStore } from "@/stores/nasaStore";
  export default {
    name: "HomeView",
    setup() {
        const nasaStore = useNasaStore();

        // Charger les données nécessaires pour la page d'accueil
        nasaStore.fetchArticleOfTheDay();

        return {
        ...nasaStore,
        };
    },
  };
  </script>
  
  <style scoped>
  </style>
  