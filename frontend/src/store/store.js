import { createStore } from "vuex";
import articles from "./articles";
import comments from "./comments";

export default createStore({
  state: {
    theme: "dark",
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
    },
  },
  actions: {
    setTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    },
  },
  modules: {
    articles,
    comments,
  },
});
