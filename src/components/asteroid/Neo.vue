<template>
    <h2 class="text-center">Near-Earth Objects (NEOs)</h2>
    <p class="neo-explanation text-justify">
        This table shows asteroids that have passed near Earth over the last 72 hours.
        All these objects are closely monitored by NASA to assess their potential risk and better understand their trajectory.
    </p>
    <p>
        Here’s what each column means:
    </p>
    <ul>
        <li>
            <span class="fw-bold">Name:</span>  The official name of the asteroid, assigned by NASA.
        </li>
        <li>
            <span class="fw-bold">Estimated Diameter:</span> The approximate size of the asteroid, measured in meters.
        </li>
        <li>
            <span class="fw-bold">Closest Approach:</span> The exact date and time when the asteroid comes closest to Earth. All times are displayed in French local time.
        </li>
        <li>
            <span class="fw-bold">Miss Distance:</span> The minimum distance between the asteroid and Earth, measured in Lunar Distances (LD). For reference, the Moon is about 1 LD away (384,400 km from Earth).
        </li>
        <li>
            <span class="fw-bold">Orbiting Body:</span> Indicates which celestial body the asteroid is near during its approach. Most NEOs cross Earth's orbit, but some also pass near other planets like Mars, Venus, or even the Moon.
        </li>
        <li>
            <span class="fw-bold">Is Sentry Object:</span> Indicates whether the asteroid is being tracked by NASA's Sentry program. <br />
            If marked "Yes": This asteroid has a very low probability of impacting Earth within the next 100 years. <br />
            If marked "No": It poses no immediate risk.
        </li>
        <li>
            <span class="fw-bold">More:</span> Link to NASA’s database for additional details about the asteroid.
        </li>

    </ul>
    <div class="table-responsive mt-5">
        <table class="table text-center" style="--bs-table-bg: transparent; --bs-table-border-color: transparent;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Estimated Diameter (metters)</th>
                    <th>Closest Approach</th>
                    <th>Miss Distance (LD)</th>
                    <th>Orbiting Body</th>
                    <th>Is sentry object</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody
            v-if="data && Object.keys(data).length"
            v-for="(neos, date) in data" :key="date"
            >
            <tr
                v-for="(neo, globalIndex) in Object.values(data).flat()"
                :key="globalIndex"
                :style="{ backgroundColor: globalIndex % 2 === 0 ? '#fff' : '#E3E4E4' }"
            >
                    <td>{{ neo.name }}</td>
                    <td>
                        min: {{ (neo.estimated_diameter.meters.estimated_diameter_min).toFixed(2) }}<br />
                        max: {{ (neo.estimated_diameter.meters.estimated_diameter_max).toFixed(2) }}                    
                    </td>
                    <td>
                    {{ formatTimestampToFrenchDate(neo.close_approach_data[0].epoch_date_close_approach) }}
                    </td>

                    <td>
                        {{ Math.round(neo.close_approach_data[0].miss_distance.lunar) }}
                    </td>
                    <td>
                        {{ neo.close_approach_data[0].orbiting_body }}
                    </td>
                    <td
                    :class="sentryObjectColor(neo.is_sentry_object)"
                    >
                        {{ 
                        neo.is_sentry_object == true ? 'Yes' : 'No'
                        }}
                    </td>
                    <td>
                        <a :href="neo.nasa_jpl_url" target="_blank">More</a>
                    </td>
                </tr>
            </tbody>
        </table>
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
    sentryObjectColor(isSentryObject) {
        if(isSentryObject == false) {
            return "text-success"
        } else if (isSentryObject == true) {
            return "text-danger"
        } 
      return "";
    },
    formatTimestampToFrenchDate(timestamp) {
        const date = new Date(timestamp);
            return date.toLocaleString("fr-FR", { 
                timeZone: "Europe/Paris", 
                day: "2-digit", 
                month: "2-digit", 
                year: "numeric", 
                hour: "2-digit", 
                minute: "2-digit" 
            });
        }
  },
};
</script>