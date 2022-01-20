<template>
  <div class="shop_item">
    <div class="heading">
      <div class="card_title">
        {{ item_data.title }}
      </div>
      <span class="card_subtitle">
        {{ item_data.subtitle }}
      </span>
    </div>
    <ul v-if="item_data.price" class="price">
      <li v-if="item_data.price.eur">
        <span class="label">Paypal:</span> {{ item_data.price.eur }}€
      </li>
      <li v-if="item_data.price.nitro">
        <span class="label">Nitro:</span> {{ item_data.price.nitro }}
      </li>
      <li v-if="item_data.price.invite">
        <span class="label">Invit: </span>{{ item_data.price.invite }}
      </li>
    </ul>
    <div v-else class="free">FREE</div>
    <div class="channel">
      {{ item_data.channel }}
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
  // Add :style="cssVars"
};
</script>

<style scoped>
.shop_item {
  background-color: rgb(43, 43, 46);
  padding: 15px;
  border-radius: 5px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-image: linear-gradient(to bottom, #1f1f1f 30%, transparent 45%),
    linear-gradient(to top, #1f1f1f 20%, transparent 35%), var(--image);
  background-size: cover; */
  position: relative;
  overflow: hidden;
  transition: 0.3s transform ease;
}
.shop_item:hover {
  transform: scale(1.05);
}

.channel {
  position: absolute;
  bottom: 15px;
  right: 15px;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 700;
  color: #979de7;
  transform: translateX(100px);
  opacity: 0;
  transition: transform 0.2s ease, opacity 0.1s ease;
}

.shop_item:hover .channel {
  opacity: 1;
  transform: translateX(0);
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
  text-transform: uppercase;
  font-family: "Barlow";
  font-weight: 700;
  font-size: 1.2rem;
  list-style-type: none;
}

.label {
  color: rgb(105, 104, 112);
}

.free {
  font-size: 2rem;
  font-family: "Barlow";
  font-weight: 500;
  color: transparent;
  background-image: linear-gradient(135deg, rgb(30, 185, 30), rgb(11, 75, 9));
  background-clip: text;
}
</style>