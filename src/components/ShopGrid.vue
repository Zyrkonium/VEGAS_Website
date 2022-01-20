<template>
  <div class="shop_grid">
    <div v-if="itemsList.length < 1">NO RESULTS</div>
    <ShopItem v-for="item in itemsList" :key="item.id" :item_data="item" />
  </div>
</template>

<style scoped>
.shop_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  min-height: 80vh;
  grid-gap: 25px;
}
</style>

<script>
// @ is an alias to /src
import ShopItem from "@/components/ShopItem.vue";
import axios from "axios";

export default {
  name: "ShopGrid",
  props: {
    categ: String,
    nb: Number,
  },
  components: {
    ShopItem,
  },
  data() {
    return {
      itemsList: [],
    };
  },
  methods: {
    parseItems: function () {
      const nb = this.nb || 50;
      axios
        .get(
          `http://localhost:3001/api/shop/get?n=${nb.toString()}&c=${
            this.categ
          }`
        )
        .then((response) => {
          console.log("response: ", response.data);
          this.itemsList = response.data;
        });
    },
  },
  watch: {
    categ: function () {
      this.parseItems();
    },
  },
  mounted() {
    this.parseItems();
  },
};
</script>