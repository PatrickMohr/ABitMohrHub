<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'PixelGames',
          description: 'Collection of some games I made in PICO-8, a fantasy console for creating tiny games.',
          url: '/pixelgames'
        },
        {
          name: 'CookingCompanion',
          description: 'A cooking app to create and share recipes with anyone.',
          url: '/cookingcompanion'
        },
      ]
    };
  },
  methods: {
    goToProject(url) {
      this.$router.push(url);
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="main-title">
      <h1>ABitMohrHub</h1>
    </div>
    <div class="projects">
      <div v-for="(project, index) in projects" :key="index" class="project-card" @click="goToProject(project.url)">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>

  .container {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    color: #363636;
  }

  .main-title {
    text-align: center;
    margin: 2vw;
    font-size: 1.2vw;
    color: #363636;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .project-card {
    width: 20vh;
    height: 16vh;
    padding: 1vh;
    margin: 3vh;
    border: 1px solid #ccc;
    border-radius: 1vh;
    cursor: pointer;
    text-align: center;
  }

  .project-card:hover {
    background-color: #f0f0f0;
  }

</style>
