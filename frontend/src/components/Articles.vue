<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import Comments from "./CommentsAdd.vue";
import ArticleView from "./ArticleView.vue";
import ArticleEdit from "./ArticleEdit.vue";

const store = useStore();

const isEditing = ref(false);
const isViewing = ref(false);
const currentArticle = ref(null);
const selectedArticle = ref(null);

onMounted(() => {
  store.dispatch("articles/loadArticles");
});

const articles = computed(() => store.state.articles.articles);

function removeArticle(id) {
  store.dispatch("articles/removeArticle", id);
}

function editArticle(article) {
  currentArticle.value = article;
  isEditing.value = true;
}

function viewArticle(article) {
  selectedArticle.value = article;
  isViewing.value = true;
}

function closeView() {
  isViewing.value = false;
}

async function saveArticle(updatedArticle) {
  await store.dispatch("articles/updateExistingArticle", {
    articleId: updatedArticle.id,
    articleData: {
      title: updatedArticle.title,
      content: updatedArticle.content,
    },
  });
  await store.dispatch("articles/loadArticles");
  isEditing.value = false;
  currentArticle.value = null;
}

function cancelEdit() {
  isEditing.value = false;
  currentArticle.value = null;
}
</script>

<template>
  <template v-if="articles.length === 0">
    <v-container class="text-center">
      <h3>Нет статей</h3>
      <br />
      <v-btn to="/add-article">Перейти к добавлению статьи</v-btn>
    </v-container>
  </template>
  <template v-else>
    <v-container class="d-flex flex-column align-center justify-center">
      <v-table class="text-center" max-width="800">
        <thead>
          <tr>
            <th class="text-center">Заголовок</th>
            <th class="text-center">Просмотр</th>
            <th class="text-center">Редактировать</th>
            <th class="text-center">Удалить</th>
            <th class="text-center">Добавить комментарий</th>
            <th class="text-center">Открыть комментарии</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td class="text-center">{{ article.title }}</td>
            <td class="text-center">
              <v-btn @click="viewArticle(article)" color="blue">
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn @click="editArticle(article)" color="green">
                <v-icon>mdi-note-edit-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn @click="removeArticle(article.id)" color="red-lighten-1">
                <v-icon>mdi-delete-forever</v-icon>
              </v-btn>
            </td>
            <td>
              <Comments :articleId="article.id" />
            </td>
            <td>
              <v-btn
                :to="{ name: 'ArticleDetail', params: { id: article.id } }"
                color="blue"
              >
                <v-icon>mdi-comment-text-multiple-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>


      <ArticleView
        :article="selectedArticle"
        :isOpen="isViewing"
        @close="closeView"
      />


      <ArticleEdit
        :article="currentArticle"
        :isOpen="isEditing"
        @close="cancelEdit"
        @save="saveArticle"
      />
    </v-container>
  </template>
</template>

<style scoped></style>
