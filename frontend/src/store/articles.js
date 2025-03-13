import {
  createArticle,
  fetchArticles,
  fetchArticle,
  updateArticle,
  deleteArticle,
} from "../api/articles";

export default {
  namespaced: true,
  state: {
    articles: [],
    selectedArticle: null,
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_SELECTED_ARTICLE(state, article) {
      state.selectedArticle = article;
    },
    ADD_ARTICLE(state, article) {
      state.articles.push(article);
    },
    UPDATE_ARTICLE(state, updatedArticle) {
      const index = state.articles.findIndex((a) => a.id === updatedArticle.id);
      if (index !== -1) state.articles[index] = updatedArticle;
    },
    DELETE_ARTICLE(state, articleId) {
      state.articles = state.articles.filter((a) => a.id !== articleId);
    },
  },
  actions: {
    async loadArticles({ commit }) {
      const response = await fetchArticles();
      commit("SET_ARTICLES", response.data);
    },
    async loadArticleById({ commit }, articleId) {
      const response = await fetchArticle(articleId);
      commit("SET_SELECTED_ARTICLE", response.data);
    },
    async createNewArticle({ commit }, articleData) {
      const response = await createArticle(articleData);
      commit("ADD_ARTICLE", response.data);
    },
    async updateExistingArticle({ commit }, { articleId, articleData }) {
      const response = await updateArticle(articleId, articleData);
      commit("UPDATE_ARTICLE", response.data);
    },
    async removeArticle({ commit }, articleId) {
      await deleteArticle(articleId);
      commit("DELETE_ARTICLE", articleId);
    },
  },
};
