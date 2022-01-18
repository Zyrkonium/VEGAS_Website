<template>
  <nav id="navbar">
    <div class="left">
      <div class="menu_toggle">
        <label for="check">
          <input type="checkbox" id="check" @change="menuToggle" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <router-link to="/">
        <img class="avatar" src="@/assets/avatar.gif" />
        <h1 class="name">{{ site_title }}</h1>
      </router-link>
    </div>
    <div class="right hidden">
      <router-link v-for="link in links_list" :key="link.name" :to="link.path">
        {{ link.name }}
      </router-link>
      <a href="https://discord.gg/vegasofficial">Discord</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    menuToggle: () => {
      if (document.querySelector("#check").checked) {
        document.querySelector(".right").classList.remove("hidden");
      } else {
        document.querySelector(".right").classList.add("hidden");
      }
    },
  },
  watch: {
    $route() {
      document.querySelector("#check").checked = false;
      document.querySelector(".right").classList.add("hidden");
    },
  },
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
  font-family: "Barlow", "Avenir", Helvetica, Arial, sans-serif;
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

.right > a:not(:last-of-type) {
  margin-right: 5rem;
}

a:not(.left a).router-link-exact-active {
  /* text-shadow: 0 0 0.01px white, 0 0 0.01px white; */
  text-decoration: underline;
}

.left {
  display: flex;
  align-items: center;
}
.left a {
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

.menu_toggle {
  height: 3.5rem;
  width: 3.5rem;
  /* background-color: white; */
  display: none;
}

/* MenuToggle styles */
label {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
}

label span {
  background: #fff;
  border-radius: 10px;
  height: 5px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 50%;
}

span:nth-of-type(2) {
  width: 100%;
}

span:nth-of-type(3) {
  width: 75%;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked ~ span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(8px, 0px);
}

input[type="checkbox"]:checked ~ span:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
}

input[type="checkbox"]:checked ~ span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(29px, -9px) rotatez(45deg);
}

@media screen and (max-width: 950px) {
  nav {
    flex-direction: column;
    padding: 15px;
  }
  .left {
    width: 100%;
    justify-content: space-between;
  }
  .right {
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .avatar {
    display: none;
  }
  .menu_toggle {
    display: block;
  }
  .hidden {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .right {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
  .right > a:not(:last-of-type) {
    margin-right: 0;
    border-bottom: 1px solid grey;
  }
  .right > a {
    width: 100%;
    padding: 15px;
    font-size: 1.5rem;
  }
}
</style>