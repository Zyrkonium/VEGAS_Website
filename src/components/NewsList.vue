<template>
  <div class="newsList">
    <ul>
      <li v-for="message in news" :key="message.id">
        <div class="msg_header">
          <span class="msg_username">{{ message.user }}</span>
          <span class="msg_date">{{
            new Date(message.date).toLocaleDateString("fr-FR")
          }}</span>
        </div>
        <div class="msg_content">
          {{ message.message }}
        </div>
      </li>
    </ul>
  </div>
</template>

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
          user: "@k1nshi",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et amet nostrum dicta quidem ipsum quo asperiores vel, cumque, suscipit exercitationem ipsa qui iste eaque quam porro pariatur laboriosam dolores animi? Possimus, sed! Similique mollitia quasi non a voluptatibus est harum cupiditate, aspernatur expedita, eveniet doloremque et quas ullam? Veniam aspernatur eius dolorum, tenetur id maxime, incidunt architecto dignissimos quibusdam tempora suscipit alias iusto ex nulla provident! Ratione totam aliquam labore ducimus commodi cumque quaerat impedit? Perferendis odit ab, provident totam expedita velit assumenda sapiente at nostrum doloribus quidem possimus excepturi distinctio consectetur facere? Dicta perspiciatis sunt doloremque dolores fuga.",
        },
        {
          id: 2,
          date: Date.now(),
          user: "@k1nshi",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et amet nostrum dicta quidem ipsum quo asperiores vel, cumque, suscipit exercitationem ipsa qui iste eaque quam porro pariatur laboriosam dolores animi? Possimus, sed! Similique mollitia quasi non a voluptatibus est harum cupiditate, aspernatur expedita, eveniet doloremque et quas ullam? Veniam aspernatur eius dolorum, tenetur id maxime, incidunt architecto dignissimos quibusdam tempora suscipit alias iusto ex nulla provident! Ratione totam aliquam labore ducimus commodi cumque quaerat impedit? Perferendis odit ab, provident totam expedita velit assumenda sapiente at nostrum doloribus quidem possimus excepturi distinctio consectetur facere? Dicta perspiciatis sunt doloremque dolores fuga.",
        },
        {
          id: 3,
          date: Date.now(),
          user: "@k1nshi",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et amet nostrum dicta quidem ipsum quo asperiores vel, cumque, suscipit exercitationem ipsa qui iste eaque quam porro pariatur laboriosam dolores animi? Possimus, sed! Similique mollitia quasi non a voluptatibus est harum cupiditate, aspernatur expedita, eveniet doloremque et quas ullam? Veniam aspernatur eius dolorum, tenetur id maxime, incidunt architecto dignissimos quibusdam tempora suscipit alias iusto ex nulla provident! Ratione totam aliquam labore ducimus commodi cumque quaerat impedit? Perferendis odit ab, provident totam expedita velit assumenda sapiente at nostrum doloribus quidem possimus excepturi distinctio consectetur facere? Dicta perspiciatis sunt doloremque dolores fuga.",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
