<template>
  <div class="home">
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
.home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 250px, #121212 350px),
    url("../assets/background_vegas.jpg");
  background-size: 100% auto;
  padding: 350px 100px 0;
}

.discord_join {
  float: right;
  background-color: #5865f2;
  margin-right: 35px;
  padding: 5px 20px;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.discord_join img {
  height: 40px;
}
</style>