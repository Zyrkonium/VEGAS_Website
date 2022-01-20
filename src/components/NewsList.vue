<template>
  <ul>
    <li class="message" v-for="message in news" :key="message.id">
      <div class="msg_left">
        <img :src="message.avatar_url" alt="ProfilePic" />
      </div>
      <div class="msg_right">
        <div class="msg_header">
          <span class="msg_username" :style="`color: ${message.color}`">{{
            message.username
          }}</span>
          <span class="msg_date">{{
            new Date(message.created_at).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}</span>
        </div>
        <div class="msg_content">
          {{ message.content }}
        </div>
      </div>
    </li>
  </ul>
</template>


<style scoped>
ul {
  list-style-type: none;
  padding-top: 25px;
}
@media screen and (min-width: 700px) {
  ul {
    padding: 35px 25px;
  }
}
.message {
  /* background-color: rgba(255, 255, 255, 0.1); */
  border-radius: 1px;
  padding: 10px;
  display: flex;
  font-weight: 600;
}
.message:not(:last-of-type) {
  margin-bottom: 25px;
}
.msg_left {
  padding-right: 15px;
}
.msg_left img {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}

.msg_header {
  margin-bottom: 5px;
}
.msg_username {
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 10px;
}
.msg_date {
  font-size: 0.8rem;
  color: #999;
}
.msg_content {
  font-weight: normal;
  line-height: 1.3rem;
  font-size: 1.1rem;
  text-align: justify;
}
</style>

<script>
import axios from "axios";

export default {
  name: "NewsList",
  props: {
    nb: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      news: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3001/api/news/get?n=${this.nb.toString()}`)
      .then((response) => {
        console.log("response: ", response.data);
        this.news = response.data;
      });
  },
};
</script>

