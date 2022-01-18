<template>
  <div id="app">
    <NavBar />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: "Whitney";
  src: local("Whitney"), url("./assets/whitney.otf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Whitney";
  src: local("Whitney"), url("./assets/whitney-medium.otf");
  font-weight: bold;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Whitney";
  background-color: #121212;
  color: white;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter {
  opacity: 0;
  transform: translateX(-30%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(30%);
}

/* General */
h2 {
  font-size: 2rem;
  font-family: "Barlow", "Avenir", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
}
</style>

