import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import AddArticleViews from "../views/AddArticleView.vue";
import ArticlesView from "../views/ArticlesView.vue";

const routes = [
  { path: "/", component: App },
  { path: "/addArticle", component: AddArticleViews },
  { path: "/articles", component: ArticlesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
