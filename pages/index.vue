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
  <div class="container">
    <div class="main-title">
      <h1>Projects</h1>
    </div>
    <div class="projects">
      <div v-for="(project, index) in projects" :key="index" class="project-card" @click="goToProject(project.url)">
        <Icon :name=project.icon color="#5F9EA0" class="icon" />
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>

  .container {
    max-width: 80vh;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    color: #505050;
  }

  .main-title {
    text-align: center;
    margin: 2vw;
    font-size: 1.2vw;
    color: #5F9EA0;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .project-card {
    width: 20vh;
    height: 20vh;
    padding: 1vh;
    margin: 3vh;
    //border: 1px solid #042b69;
    border-radius: 1vh;
    box-shadow: 0 0 1vw rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-align: center;
    font-size: 0.7vw;
  }

  .icon {
    font-size: 3vh;
    margin-top: 0.8vh;
    margin-bottom: -0.8vh;
  }

  .project-card h2 {
    font-size: 2vh;
  }

  .project-card:hover {
    background-color: #f0f0f0;
  }

</style>
