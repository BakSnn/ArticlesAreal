import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import AddArticleViews from "../views/AddArticleView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticleDetailView from "../views/ArticleDetailView.vue";

const routes = [
  { path: "/", component: App },
  { path: "/add-article", component: AddArticleViews },
  { path: "/articles", component: ArticlesView },
  { path: "/article/:id", component: ArticleDetailView, name: "ArticleDetail" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
