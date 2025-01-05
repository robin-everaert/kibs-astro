import { defineStore } from 'pinia'; 
import axios from 'axios'; 

export const useNasaStore = defineStore('nasa', {
    state: () => ({
      data: null,
      isLoading: false,
      error: null,
    }),
    actions: {
      async fetchArticleOfTheDay() {
        this.isLoading = true;
        this.error = null;
  
        try {
          const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`
          );
          console.log('Data fetched:', response.data);
          this.data = response.data; 
        } catch (err) {
          console.error('Error fetching data:', err);
          this.error = 'Failed to fetch data';
        } finally {
          this.isLoading = false;
        }
      },
    },
  });
  