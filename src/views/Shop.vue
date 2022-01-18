<template>
  <div class="shop">
    <span class="context">Home > shop</span>
    <h2>Buy accounts/softwares</h2>
    <ul class="categ_select">
      <router-link :to="{ name: 'ShopCateg', params: { categ: 'accounts' } }">
        <li>Accounts</li>
      </router-link>
      <router-link :to="{ name: 'ShopCateg', params: { categ: 'softwares' } }">
        <li>Softwares</li>
      </router-link>
      <router-link
        :to="{ name: 'ShopCateg', params: { categ: 'free_softwares' } }"
      >
        <li>Free softwares</li>
      </router-link>
      <router-link :to="{ name: 'ShopCateg', params: { categ: 'misc' } }">
        <li>Misc</li>
      </router-link>
    </ul>
    <ShopGrid :categ="this.$route.params.categ || 'recents'" />
  </div>
</template>

<script>
import ShopGrid from "@/components/ShopGrid.vue";

export default {
  name: "Shop",
  components: { ShopGrid },
};
</script>

<style scoped>
.shop {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 250px, #121212 350px),
    url("../assets/background_vegas.jpg");
  background-size: 100% auto;
  padding: 350px 100px 0;
}
h2 {
  margin-bottom: 30px;
}
.categ_select {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 60px;
  border-radius: 5px;
  background-color: rgb(43, 43, 46);
  list-style-type: none;
  margin-bottom: 30px;
  padding: 10px;
}
.categ_select > a {
  background-color: rgb(60, 60, 63);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.2s background-color ease;
}
.categ_select > a:hover {
  background-color: rgb(69, 69, 75);
}
.categ_select > a:not(:last-of-type) {
  margin-right: 10px;
}
a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-family: "Barlow";
  font-weight: 600;
}
.categ_select > a.router-link-exact-active {
  text-decoration: underline;
  font-weight: 700;
  background-color: rgb(92, 92, 99);
}
</style>