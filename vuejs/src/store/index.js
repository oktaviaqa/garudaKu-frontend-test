import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    baseUrl: 'https://api-berita-indonesia.vercel.app/cnn/teknologi',
    news: [],
  }),
  getters: {
    getNewsByTitle: (state) => (title) => {
      return state.news.data.posts.find(news => news.title === title);
    }
  },
  mutations: {
    setNews(state, data) {
      state.news = data
    }
  },
  actions: {
    async fetchNews({ commit, state }) {
      try {
        const { data } = await axios.get(
          state.baseUrl
        )
        commit('setNews', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {},
});

