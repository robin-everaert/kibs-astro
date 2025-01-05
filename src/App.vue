<template>
    <div id="app" class="">
      <h1 class="text-center">Welcome to Nasa Feed</h1>
      <Header />
      <router-view />
    </div>
    

  </template>
  
  <script>
  import Header from "./components/Header.vue";
  export default {
    name: 'App',
    components: {
        Header,
    },
    };

  </script>
  

  