<template>
  <div id="app">
    <Header />
    <DigitalTwin />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import DigitalTwin from "./components/DigitalTwin.vue";

export default {
  components: {
    Header,
    DigitalTwin,
  },
};
</script>

<style>
/* Reset for body and html */
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

html {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  animation: backgroundColorChange 10s infinite alternate; /* Background animation */
}


/* Background transition animation */
@keyframes backgroundColorChange {
  0% {
    background-color: #efc1e7dc; /* Starting color */
  }
  100% {
    background-color: #d2deff; /* Ending color */
  }
}

</style>


<style>
#app {
  margin: 1;
  padding: 0.5%;
}
</style>


