import { defineStore } from 'pinia'; 
import axios from 'axios'; 

export const useAsteroidStore = defineStore('asteroid', {
    state: () => ({
      flrData: null,
      isLoading: false,
      error: null,
    }),
    getters: {},
    actions: {
        getLast7DaysDates() {
            const endDate = new Date().toISOString().split('T')[0]; // Today
            const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0]; 
          
            return { startDate, endDate };
          },          
      async fetchNEO() {
        this.isLoading = true;
        this.error = null;

        const { startDate, endDate } = this.getLast7DaysDates();

        try {
          const response = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/feed`,
            {
              params: {
                start_date: startDate,
                end_date: endDate,
                api_key: import.meta.env.VITE_NASA_API_KEY,
              },
            }
          );
          console.log('NEO Data fetched:', response.data.near_earth_objects);
          this.neoData = response.data.near_earth_objects; 
        } catch (err) {
          console.error('Error fetching data:', err);
          this.error = 'Failed to fetch data';
        } finally {
          this.isLoading = false;
        }
      },
    },
  });