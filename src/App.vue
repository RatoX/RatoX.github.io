<template>
  <div id="app">
    <h1 v-show="!isHome">
      <router-link to="/" class="back">←</router-link>
    </h1>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isHome() {
      const name = this.$route.name;
      return name === 'Main';
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  -moz-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;
  letter-spacing: .03em;
  margin: 0;
}

a {
  color: #999;
  text-transform: uppercase;
  text-decoration: none;
  align-self: center;
}

.back {
  color: #000;
  font-size: 2em;
  margin-left: 10px;
}

#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app > main {
  width: 100%;
  display: flex;
  flex-grow: 1;
}

html, body {
  min-height: 100vh;
  background-color: #f8f8f8;
}
</style>
