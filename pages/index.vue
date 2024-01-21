<script setup lang="ts">

</script>

<template>
  <div class="pixelgames-div">
    <NuxtLink to="/pixelgames">
      <button>PixelGames</button>
    </NuxtLink>
  </div>
</template>

<style scoped>

.pixelgames-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh
}

button {
  background-color: #04AA6D; /* Green */
  border: 2px solid #04AA6D;
  border-radius: 1vw;
  color: white;
  padding: 0.5vw 1vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 3vw;
  transition-duration: 0.4s;
}

button:hover {
  background-color: #ffffff; /* Green */
  color: #04AA6D;
}
</style>