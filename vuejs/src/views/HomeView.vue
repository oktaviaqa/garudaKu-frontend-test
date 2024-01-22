<template>
  <div>
    <Header />
    <main>
      <SectionLeftMain :newsData="news.data.posts[0]" />

      <section class="main-container-right">
        <h2>Latest News </h2>
        <div class="border-subheading"></div>
        <SectionRightMain v-for="data in news.data.posts" :key="data.link" :data="data" />
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import Header from "@/components/Header.vue";
import SectionLeftMain from "@/components/SectionLeftMain.vue";
import SectionRightMain from "@/components/SectionRightMain.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    SectionLeftMain,
    SectionRightMain
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