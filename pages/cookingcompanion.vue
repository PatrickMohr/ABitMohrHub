<script setup lang="ts">

</script>

<template>
  <div class="title-container">
    <h1>CookingCompanion</h1>
  </div>
  <div class="container">
    <div class="comingsoon-container">
      <h1>Coming soon</h1>
      <Icon name="svg-spinners:3-dots-bounce" class="icon" />
    </div>
  </div>
</template>

<style scoped>

.title-container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin: 2vw;
  font-size: 1.2vw;
  color: #5F9EA0
}

.container {
  margin-left: 75vh;
}

.comingsoon-container {
  font-family: 'Arial', sans-serif;
  margin: 2vw;
  font-size: 1vw;
  overflow: hidden;
  width: 35vh;
}

.comingsoon-container h1 {
  float:left;
}

.icon {
  margin-top: 4.7vh;
  margin-left: 0.5vh;
}

</style>