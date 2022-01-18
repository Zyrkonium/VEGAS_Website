<template>
  <div class="home section_container">
    <a class="discord_join" href="https://discord.gg/vegasofficial">
      <img src="@/assets/discord_mark.svg" alt="Discord" />
    </a>
    <h2>Recent news</h2>
    <NewsList :nb="3" />
  </div>
</template>

<script>
// @ is an alias to /src
import NewsList from "@/components/NewsList.vue";

export default {
  name: "Home",
  components: {
    NewsList,
  },
};
</script>

<style scoped>
.discord_join {
  background-color: #5865f2;
  padding: 5px 20px;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.discord_join img {
  width: min(100%, 150px);
}

@media screen and (min-width: 700px) {
  .discord_join {
    float: right;
    margin-right: 35px;
    margin-bottom: 0;
  }
}
</style>