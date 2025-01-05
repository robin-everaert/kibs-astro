<template>
    <footer id="footer" class="footer bg-dark text-white text-center py-4">
        <div class="container">
        <p class="mb-0">© {{ currentYear }} Everaert Robin. All rights reserved.</p>
        <div class="mt-4">
            <a href="https://www.linkedin.com/in/robin-everaert/" target="_blank" class="text-white mx-2">
            <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/robin-everaert" target="_blank" class="text-white mx-2">
            <i class="fab fa-github"></i>
            </a>
        </div>
        </div>
    </footer>
  </template>
  <script>
  export default {
    name: 'Footer',
    setup() {
        const currentYear = new Date().getFullYear(); 
        return {
        currentYear,
        };
    },
  };
  </script>

<footer class="bg-dark text-white text-center py-4">
    
  </footer>
  