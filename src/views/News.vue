<template>
  <div class="news">
    <h1>This is an news page</h1>
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
