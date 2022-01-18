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
.section_container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 150px, #121212 250px),
    url("./assets/background_vegas.jpg");
  background-size: 100% auto;
  padding: 250px 20px;
}
@media screen and (min-width: 800px) {
  .section_container {
    padding: 350px 100px 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 250px, #121212 350px),
      url("./assets/background_vegas.jpg");
  }
}

h2 {
  font-size: 2.4rem;
  font-family: "Barlow", "Avenir", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
}
.context {
  color: #979de7;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: "Barlow";
  font-weight: 600;
}
</style>

