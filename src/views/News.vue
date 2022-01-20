<template>
  <div class="news section_container">
    <span class="context">Home > news</span>
    <h2>News</h2>
    <NewsList :nb="50" />
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
