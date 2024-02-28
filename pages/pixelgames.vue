<script>
export default {
  data() {
    return {
      // get icon from here: "https://icones.js.org/"
      games: [
        {
          name: 'Fruitdrop',
          source: 'static/fruit_drop.html',
          description: 'Fruitdrop was one of my first Pico-8 games.The goal is to collect the falling fruit by moving the character using the left and right arrow keys.',
        },
        {
          name: 'Breakout',
          source: 'static/breakout.html',
          description: 'This is my version of the classic game Breakout. Try to destroy all blocks by hitting them with the ball. You can move the paddle using the left and right arrow keys and launch the ball by pressing X. Collect power-ups to cause even more destruction!',
        }
      ]
    };
  }
};
</script>

<template>
  <div class="title-container">
    <h1>PixelGames</h1>
  </div>
  <div class="games">
    <div v-for="(game, index) in games" :key="index" class="game-container">
      <div class="gametitle-container">
        <h1>{{ game.name }}</h1>
      </div>
      <div class="gametext-container">
        <p>{{ game.description }}</p>
      </div>
      <div class="iframe-container">
        <iframe :src=game.source width="800" height="600" frameborder="0" allowfullscreen="true"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>

.games {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  color: #555;
}

.game-container {
  width: 100vh;
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
  color: #5F9EA0;
}

.gametitle-container {
  text-align: center;
  margin: 1vw;
  font-size: 0.8vw;
}

.gametext-container {
  text-align: center;
  margin: 1vw;
  font-size: 0.9vw;
}

.iframe-container {
  text-align: center;
  background-color: #fff;
  margin: 1.5vw;
  padding: 0.5vw;
}

</style>