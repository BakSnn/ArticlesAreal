import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import AddArticleViews from "../views/AddArticleView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticleDetailView from "../views/ArticleDetailView.vue";
import CommentsByDateView from "../views/CommentsByDateView.vue";

const routes = [
  { path: "/", component: ArticlesView },
  { path: "/add-article", component: AddArticleViews },
  { path: "/article/:id", component: ArticleDetailView, name: "ArticleDetail" },
  { path: "/comments-by-date", component: CommentsByDateView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
