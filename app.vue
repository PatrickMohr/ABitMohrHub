<script>
export default {
  data() {
    return {
      // get icon from here: "https://icones.js.org/"
      projects: [
        {
          name: 'PixelGames',
          icon: 'pixelarticons:device-laptop',
          description: 'Collection of some games I made in PICO-8, a fantasy console for creating tiny games.',
          url: '/pixelgames'
        },
        {
          name: 'CookingCompanion',
          icon: 'icon-park-outline:cook',
          description: 'A cooking app to create and share recipes with anyone.',
          url: '/cookingcompanion'
        },
        {
          name: 'Chroma Assault',
          icon: 'fluent:airplane-20-regular',
          description: 'A Shoot \'Em Up game developed as part of the Interactive Game Development course at the University of Hamburg.',
          url: 'https://chroma-assault.de/'
        },
      ]
    };
  },
  methods: {
    goToProject(url) {
      if (url.startsWith("http") || url.startsWith("www")) {
        window.location.href= "https://chroma-assault.de/";
      } else {
        this.$router.push(url);
      }
    }
  }
};
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div @click="goToProject('/')" class="title">
      <h2>ABitMohrHub</h2>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

.title {
  font-family: 'Arial', sans-serif;
  font-size: 1.2vw;
  width: 26vh;
  margin: 2vw;
  color: #5F9EA0;
  border: 1px solid #5F9EA0;
  border-radius: 1vh;
  cursor: pointer;
}

.title h2 {
  margin: 0.5vw;
}

</style>