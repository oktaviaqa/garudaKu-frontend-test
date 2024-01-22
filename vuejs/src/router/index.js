import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue"
import EditView from '@/views/EditView.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detail/:title",
    name: "detail",
    component: DetailView
  },
  {
    path: '/edit/:title',
    name: 'edit',
    component: EditView
  }
];

const router = new VueRouter({
  routes,
});

export default router;
