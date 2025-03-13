import { createRouter, createWebHistory } from "vue-router";
import ArticleForm from "../components/ArticleForm.vue";
import CommentsForm from "../components/CommentsForm.vue";
import App from "../App.vue";


const routes = [
  { path: "/", component: App },
  { path: "/about", component: ArticleForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
