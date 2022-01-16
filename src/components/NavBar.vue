<template>
  <nav id="navbar">
    <router-link to="/" class="left">
      <img class="avatar" src="@/assets/avatar.gif" />
      <h1 class="name">{{ site_title }}</h1>
    </router-link>
    <ul class="right">
      <li v-for="link in links_list" :key="link.name">
        <router-link :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
      <li><a href="https://discord.gg/vegasofficial">Discord</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      site_title: "VEGAS OFFICIAL",
      links_list: [
        {
          name: "News",
          path: "/news",
        },
        {
          name: "Shop",
          path: "/shop",
        },
        {
          name: "About",
          path: "/about",
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 100px 15px 15px;
  background-color: rgb(34, 31, 31);
}

nav,
a,
span {
  color: white;
}

.right {
  display: flex;
  align-items: center;
  list-style-type: none;
}

a {
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
}

ul.right > li:not(:last-of-type) {
  margin-right: 5rem;
}

a:not(.left).router-link-exact-active {
  /* text-shadow: 0 0 0.01px white, 0 0 0.01px white; */
  text-decoration: underline;
}

.left {
  display: flex;
  align-items: center;
}
.avatar {
  height: 3.5rem;
  width: 3.5rem;

  border-radius: 50%;
  margin-right: 20px;
}
.name {
  font-size: 2rem;
  font-weight: 700;
}
</style>