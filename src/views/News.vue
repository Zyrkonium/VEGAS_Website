<template>
  <div class="news">
    <span class="context">Home > news</span>
    <h2>News</h2>
    <NewsList :nb="15" />
  </div>
</template>

<script>
import NewsList from "@/components/NewsList.vue";

export default {
  name: "News",
  components: {
    NewsList,
  },
};
</script>

<style scoped>
.news {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 250px, #121212 350px),
    url("../assets/background_vegas.jpg");
  background-size: 100% auto;
  padding: 350px 100px 0;
}
</style>