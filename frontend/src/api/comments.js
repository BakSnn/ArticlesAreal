import api from "../api/api";

export const createComment = (articleId, commentData) =>
  api.post(`/article/${articleId}/comment/`, commentData);

export const fetchCommentsByArticle = (articleId) =>
  api.get(`/article/${articleId}/comments/`);

export const fetchCommentById = (articleId, commentId) =>
  api.get(`/article/${articleId}/comment/${commentId}/`);

export const updateComment = (articleId, commentId, commentData) =>
  api.patch(`/article/${articleId}/comment/${commentId}/`, commentData);

export const deleteComment = (articleId, commentId) =>
  api.delete(`/article/${articleId}/comment/${commentId}/`);
