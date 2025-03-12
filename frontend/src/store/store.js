import { createStore } from "vuex";
import * as articles from "../api/articles";
import * as comments from "../api/comments";

export default createStore({
  modules: {
    articles,
    comments,
  },
});
