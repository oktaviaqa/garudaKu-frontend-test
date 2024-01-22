import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../src/assets/css/style.css'
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

