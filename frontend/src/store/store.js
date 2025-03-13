import { createStore } from "vuex";
import articles from "./articles";
import comments from "./comments";

export default createStore({
  modules: {
    articles,
    comments,
  },
});
