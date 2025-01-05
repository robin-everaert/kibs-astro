import { defineStore } from 'pinia';
import axios from 'axios';
const apiKey = import.meta.env.VITE_NASA_API_KEY;

export const useNasaStore = defineStore('nasa', {
  state: () => ({
    articleOfTheDay: {},
    loading: false, 
    error: null, 
  }),
  actions: {
    async fetchArticleOfTheDay() {
        this.loading = true;
        this.error = null;
        try {
          const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
              api_key: apiKey,
            },
          });
          this.articleOfTheDay = response.data;
        } catch (err) {
          this.error = 'Failed to fetch the Photo of the Day.';
        } finally {
          this.loading = false;
        }
    },
  },
});
