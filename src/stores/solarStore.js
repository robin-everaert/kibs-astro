import { defineStore } from 'pinia'; 
import axios from 'axios'; 

export const useSolarStore = defineStore('solar', {
    state: () => ({
      flrData: null,
      isLoading: false,
      error: null,
    }),
    getters: {},
    actions: {
      getLast24HoursDates() {
        const endDate = new Date().toISOString().split('T')[0]; // Today
        const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000)
          .toISOString()
          .split('T')[0];  // -24h

        return { startDate, endDate };
      },
      async fetchFLR() {
        this.isLoading = true;
        this.error = null;

        const { startDate, endDate } = this.getLast24HoursDates();

        try {
          const response = await axios.get(
            `https://api.nasa.gov/DONKI/FLR`,
            {
              params: {
                startDate,
                endDate,
                api_key: import.meta.env.VITE_NASA_API_KEY,
              },
            }
          );
          console.log('Solar Data fetched:', response.data);
          this.flrData = response.data; 
        } catch (err) {
          console.error('Error fetching data:', err);
          this.error = 'Failed to fetch data';
        } finally {
          this.isLoading = false;
        }
      },
    },
  });
