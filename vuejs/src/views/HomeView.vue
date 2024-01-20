<template>
  <!-- <div class="home"> -->
  <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <Header />
  <!-- <p>Hello</p> -->
  <!-- <img v-for="data in news.data.posts" :key="data.link" :src=data.thumbnail> -->
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    Header
  },
  computed: {
    ...mapState(['news'])
  },
  methods: {
    ...mapActions(['fetchNews'])
  },
  created() {
    this.fetchNews();
  }
};
</script>