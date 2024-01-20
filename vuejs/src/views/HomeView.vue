<template>
  <div>
    <Header />
    <!-- <p>Hello</p> -->
    <!-- <img v-for="data in news.data.posts" :key="data.link" :src=data.thumbnail> -->
    <!-- </div> -->
    <main>
      <SectionLeftMain />

      <SectionRightMain />
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