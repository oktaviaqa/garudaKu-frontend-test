import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailView
  }
  // {
  //   path: "/detail",
  //   name: "detail",
  //   component: function () {
  //     return import("../views/AboutView.vue");
  //   },
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
