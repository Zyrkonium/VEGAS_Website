<template>
  <ul>
    <li class="message" v-for="message in news" :key="message.id">
      <div class="msg_left">
        <img :src="message.avatar_url" alt="ProfilePic" />
      </div>
      <div class="msg_right">
        <div class="msg_header">
          <span class="msg_username" :style="`color: ${message.color}`">{{
            message.user
          }}</span>
          <span class="msg_date">{{
            new Date(message.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}</span>
        </div>
        <div class="msg_content">
          {{ message.message }}
        </div>
      </div>
    </li>
  </ul>
</template>


<style scoped>
ul {
  list-style-type: none;
  padding: 35px 25px;
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
export default {
  name: "NewsList",
  props: {
    nb: Number,
  },
  data() {
    return {
      news: [
        {
          id: 1,
          date: Date.now(),
          user: "K1nshi",
          avatar_url: "https://i.postimg.cc/5y3SkQ91/avatar-temp.png",
          color: "#4287f5",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et amet nostrum dicta quidem ipsum quo asperiores vel, cumque, suscipit exercitationem ipsa qui iste eaque quam porro pariatur laboriosam dolores animi? Possimus, sed! Similique mollitia quasi non a voluptatibus est harum cupiditate, aspernatur expedita, eveniet doloremque et quas ullam? Veniam aspernatur eius dolorum, tenetur id maxime, incidunt architecto dignissimos quibusdam tempora suscipit alias iusto ex nulla provident! Ratione totam aliquam labore ducimus commodi cumque quaerat impedit? Perferendis odit ab, provident totam expedita velit assumenda sapiente at nostrum doloribus quidem possimus excepturi distinctio consectetur facere? Dicta perspiciatis sunt doloremque dolores fuga.",
        },
        {
          id: 2,
          date: Date.now(),
          user: "K1nshi",
          avatar_url: "https://i.postimg.cc/5y3SkQ91/avatar-temp.png",
          color: "#8e2ad1",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et amet nostrum dicta quidem ipsum quo asperiores vel, cumque, suscipit exercitationem ipsa qui iste eaque quam porro pariatur laboriosam dolores animi? Possimus, sed! Similique mollitia quasi non a voluptatibus est harum cupiditate, aspernatur expedita, eveniet doloremque et quas ullam? Veniam aspernatur eius dolorum, tenetur id maxime, incidunt architecto dignissimos quibusdam tempora suscipit alias iusto ex nulla provident! Ratione totam aliquam labore ducimus commodi cumque quaerat impedit? Perferendis odit ab, provident totam expedita velit assumenda sapiente at nostrum doloribus quidem possimus excepturi distinctio consectetur facere? Dicta perspiciatis sunt doloremque dolores fuga.",
        },
        {
          id: 3,
          date: Date.now(),
          user: "K1nshi",
          avatar_url: "https://i.postimg.cc/5y3SkQ91/avatar-temp.png",
          color: "#3ddb62",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et amet nostrum dicta quidem ipsum quo asperiores vel, cumque, suscipit exercitationem ipsa qui iste eaque quam porro pariatur laboriosam dolores animi? Possimus, sed! Similique mollitia quasi non a voluptatibus est harum cupiditate, aspernatur expedita, eveniet doloremque et quas ullam? Veniam aspernatur eius dolorum, tenetur id maxime, incidunt architecto dignissimos quibusdam tempora suscipit alias iusto ex nulla provident! Ratione totam aliquam labore ducimus commodi cumque quaerat impedit? Perferendis odit ab, provident totam expedita velit assumenda sapiente at nostrum doloribus quidem possimus excepturi distinctio consectetur facere? Dicta perspiciatis sunt doloremque dolores fuga.",
        },
      ],
    };
  },
};
</script>

