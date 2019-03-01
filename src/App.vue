<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

#app {
  width: 100vw;
  min-height: 100vh;
  padding-top: 60px;
  display: flex;
}

html, body {
  min-height: 100vh;
  background-color: #f8f8f8;
}
</style>
