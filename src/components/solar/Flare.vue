<template>
  <h1 class="text-center">Solar Flare (FLR)</h1>
  <p class="text-justify">
    This table shows the latest solar flares from the past 24 hours. The first column displays the intensity of the eruption.
    Each intensity is represented by a letter:
  </p>
  <ul>
    <li>A, B, C indicate weaker flares.</li>
    <li>M represents moderate flares.</li>
    <li>X signifies the most intense flares.</li>
  </ul>
  <p class="text-justify">
     The second column displays the solar region where the eruption occurred, and the third column shows the time of the event in French local time. The duration is provided in minutes.
    In the last column, you can click the link to find more detailed information about each solar data.
  </p>
  <div class="table-responsive mt-5">
    <table class="table text-center" style="--bs-table-bg: transparent; --bs-table-border-color: transparent;">
      <thead>
        <tr>
          <th>Intensity</th>
          <th>Region</th>
          <th>Time</th>
          <th>Duration</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(flare, index) in data"
          :key="index"
          :style="{ backgroundColor: index % 2 === 0 ? '#fff' : '#E3E4E4' }"
        >
          <td :class="flrIntensityColor(flare.classType)">{{ flare.classType }}</td>
          <td>{{ flare.activeRegionNum }}</td>
          <td>{{ new Date(flare.peakTime).toLocaleString('fr-FR') }}</td>
          <td>{{ flrDuration(flare) }} min</td>
          <td><a :href="flare.link" target="_blank">More details</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Flare",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    
    flrIntensityColor(classType) {
        if(classType.startsWith("A") || classType.startsWith("B") || classType.startsWith("C")) {
            return "text-success"
        } else if (classType.startsWith('M')) {
            return "text-warning"
        } else if(classType.startsWith('X')) {
            return "text-danger"
        }
      return "";
    },
    flrDuration(flare) {
      const duration = (new Date(flare.endTime) - new Date(flare.beginTime)) / 1000;
      return Math.floor(duration / 60); 
    },
  },
};
</script>
