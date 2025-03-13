import {
  createComment,
  fetchCommentsByArticle,
  fetchCommentById,
  updateComment,
  deleteComment,
  fetchCommentsByDate,
} from "../api/comments";

export default {
  namespaced: true,
  state: {
    comments: [],
    selectedComment: null,
    commentsByPeriod: {},
  },
  mutations: {
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    SET_SELECTED_COMMENT(state, comment) {
      state.selectedComment = comment;
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment);
    },
    UPDATE_COMMENT(state, updatedComment) {
      const index = state.comments.findIndex((c) => c.id === updatedComment.id);
      if (index !== -1) state.comments[index] = updatedComment;
    },
    DELETE_COMMENT(state, commentId) {
      state.comments = state.comments.filter((c) => c.id !== commentId);
    },
    SET_COMMENTS_BY_PERIOD(state, groupedComments) {
      state.commentsByPeriod = groupedComments;
    },
  },
  actions: {
    async loadCommentsByArticle({ commit }, articleId) {
      const response = await fetchCommentsByArticle(articleId);
      commit("SET_COMMENTS", response.data);
    },
    async loadCommentById({ commit }, { articleId, commentId }) {
      const response = await fetchCommentById(articleId, commentId);
      commit("SET_SELECTED_COMMENT", response.data);
    },
    async createNewComment({ commit }, { articleId, commentData }) {
      const response = await createComment(articleId, commentData);
      commit("ADD_COMMENT", response.data);
    },
    async updateExistingComment(
      { commit },
      { articleId, commentId, commentData }
    ) {
      const response = await updateComment(articleId, commentId, commentData);
      commit("UPDATE_COMMENT", response.data);
    },
    async removeComment({ commit }, { articleId, commentId }) {
      await deleteComment(articleId, commentId);
      commit("DELETE_COMMENT", commentId);
    },
    async loadCommentsByDate({ commit }, { dateFrom, dateTo }) {
      const response = await fetchCommentsByDate(dateFrom, dateTo);
      commit("SET_COMMENTS_BY_PERIOD", response.data);
    },
  },
};
