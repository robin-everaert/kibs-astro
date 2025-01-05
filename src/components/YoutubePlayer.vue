<template>
    <div class="youtube-player">
      <iframe
        :src="videoUrl"
        :title="videoTitle"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
</template>
  
<script>
  export default {
    name: "YoutubePlayer",
    props: {
      videoUrl: {
        type: String,
        required: true,
      },
    },
  };
  </script>

<style scoped>
.youtube-player {
  position: relative;
  width: 100%;
  max-width: 1280px; 
  height: 0;
  padding-bottom: 56.25%; 
}

.youtube-player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

  