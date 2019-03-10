<template>
  <header>
    <router-link
      to="/" class="back"
      aria-label="Back to home" alt="back to home">
      <ArrowLeft width="30px"/>
    </router-link>
    <h1>
      {{ routerTitle }}
    </h1>
  </header>
</template>

<script>
import ArrowLeft from '../assets/arrow-left-solid.svg';

export default {
  name: 'Header',
  components: {
    ArrowLeft,
  },
  computed: {
    routerTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style scoped>

header {
  box-shadow: 0px -2px 5px black;
  padding: 15px 5px;
  margin-bottom: 10px;
  display: flex;
}

a {
  display: flex;
}

h1 {
  font-size: 1em;
  margin-left: 20px;
}

</style>
