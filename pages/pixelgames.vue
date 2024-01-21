<script setup lang="ts">

</script>

<template>
  <div class="title-container">
    <h1>PixelGames</h1>
  </div>
  <div class="game-container">
    <div class="gametitle-container">
      <h1>Fruitdrop</h1>
    </div>
    <div class="iframe-container">
      <iframe src="static/fruit_drop.html" width="800" height="600" frameborder="0" allowfullscreen="true"></iframe>
    </div>
  </div>
  <div class="game-container">
    <div class="gametitle-container">
      <h1>Breakout</h1>
    </div>
    <div class="iframe-container">
      <iframe src="static/breakout.html" width="800" height="600" frameborder="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<style scoped>

.game-container {
  margin: 1.5vw;
  padding: 0.5vw;
  background-color: #fff;
  border-radius: 1vw;
  box-shadow: 0 0 1vw rgba(0, 0, 0, 0.3);
}

.title-container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin: 2vw;
  font-size: 1.2vw;
  color: #363636;
}

.gametitle-container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin: 1vw;
  font-size: 0.8vw;
  color: #555;
}

.iframe-container {
  text-align: center;
  background-color: #fff;
  margin: 1.5vw;
  padding: 0.5vw;
}

</style>