import api from "../api/api";

export const createArticle = (articleData) =>
  api.post("/articles", articleData);

export const fetchArticles = () => api.get("/articles");

export const fetchArticle = (id) => api.get(`/articles/${id}`);

export const updateArticle = (id, articleData) =>
  api.patch(`/articles/${id}`, articleData);

export const deleteArticle = (id) => api.delete(`/articles/${id}`);
