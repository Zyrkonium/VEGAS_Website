<template>
  <div class="shop_item" :style="cssVars">
    <div class="card_title">
      {{ item_data.title }}
    </div>
    <span class="card_subtitle">
      {{ item_data.subtitle }}
    </span>
    <div class="price">
      {{ item_data.price.eur }}€ ou Nitro x{{ item_data.price.nitro }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    item_data: {
      type: Object,
      required: true,
    },
  },
  //   computed: {
  //     cssVars() {
  //       return {
  //         "--image": `url(${this.item_data.image_url})`,
  //       };
  //     },
  //   },
};
</script>

<style scoped>
.shop_item {
  background-color: rgb(43, 43, 46);
  padding: 15px;
  border-radius: 5px;
  /* background-image: linear-gradient(to bottom, #1f1f1f 30%, transparent 45%),
    linear-gradient(to top, #1f1f1f 20%, transparent 35%), var(--image);
  background-size: cover; */
}
.card_title {
  font-family: "Barlow";
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
}
.card_subtitle {
  color: transparent;
  text-transform: uppercase;
  font-family: "Barlow";
  font-weight: 700;
  font-size: 1.4rem;
  background-image: linear-gradient(135deg, #979de7, #e155dc);
  background-clip: text;
}

.price {
  margin-top: 150px;
  text-transform: uppercase;
  font-family: "Barlow";
  font-weight: 700;
  font-size: 1.4rem;
}
</style>