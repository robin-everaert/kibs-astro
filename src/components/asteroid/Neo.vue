<template>
    <h2 class="text-center">Near-Earth Object (NEO)</h2>
    <p class="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolore neque ad fugit rem obcaecati vero, quasi doloremque omnis facilis molestiae natus in rerum commodi enim vel distinctio suscipit consequuntur.</p>

    <div v-if="data && Object.keys(data).length">
    <!-- Boucle sur les dates -->
    <div v-for="(neos, date) in data" :key="date">
      <h3>{{ date }}</h3>
      <ul>
        <!-- Boucle sur les astéroïdes de chaque date -->
        <li v-for="neo in neos" :key="neo.id">
            <ul>
                <li>{{ neo }}</li>
            </ul>
          <!-- <strong>{{ asteroid.name }}</strong> - 
          Taille : {{ Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max) }} m -
          Distance : {{ Math.round(asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString() }} km -
          <span :class="{'text-danger': asteroid.is_potentially_hazardous_asteroid, 'text-success': !asteroid.is_potentially_hazardous_asteroid}">
            {{ asteroid.is_potentially_hazardous_asteroid ? "⚠️ Dangereux" : "✅ Sûr" }}
          </span> -->
        </li>
      </ul>
    </div>
  </div>

</template>


<script>
export default {
  name: "Neo",
  props: {
    data: {
      type:  Object,
      required: true,
    },
  },
  methods: {
    
    // flrIntensityColor(classType) {
    //     if(classType.startsWith("A") || classType.startsWith("B") || classType.startsWith("C")) {
    //         return "text-success"
    //     } else if (classType.startsWith('M')) {
    //         return "text-warning"
    //     } else if(classType.startsWith('X')) {
    //         return "text-danger"
    //     }
    //   return "";
    // },
    // flrDuration(flare) {
    //   const duration = (new Date(flare.endTime) - new Date(flare.beginTime)) / 1000;
    //   return Math.floor(duration / 60); 
    // },
  },
};
</script>