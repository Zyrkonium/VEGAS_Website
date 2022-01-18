<template>
  <div class="shop_grid">
    {{ this.$route.params.categ }}
    <ShopItem v-for="item in itemsList" :key="item.id" :item_data="item" />
  </div>
</template>

<style scoped>
.shop_grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 25px;
}
</style>

<script>
// @ is an alias to /src
import ShopItem from "@/components/ShopItem.vue";

export default {
  name: "ShopGrid",
  props: {
    categ: String,
  },
  components: {
    ShopItem,
  },
  data() {
    return {
      itemsList: [
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "FREE Gift card",
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            invite: 10,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
            invite: 5,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
        {
          id: Math.floor(Math.random() * Date.now()),
          title: "Amazon",
          channel: "#shop",
          subtitle: "Gift card",
          price: {
            eur: 5,
            nitro: 2,
          },
        },
      ],
    };
  },
};
</script>