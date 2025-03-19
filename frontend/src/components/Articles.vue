<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import Comments from "./Comments.vue";
const store = useStore();

const isEditing = ref(false);
const currentArticle = ref(null);
const updatedTitle = ref("");
const updatedContent = ref("");

onMounted(() => {
  store.dispatch("articles/loadArticles");
});

const articles = computed(() => store.state.articles.articles);

function removeArticle(id) {
  store.dispatch("articles/removeArticle", id);
}

function editArticle(article) {
  currentArticle.value = article;
  updatedTitle.value = article.title;
  updatedContent.value = article.content;
  isEditing.value = true;
}

async function saveArticle() {
  const articleData = {
    title: updatedTitle.value,
    content: updatedContent.value,
  };

  await store.dispatch("articles/updateExistingArticle", {
    articleId: currentArticle.value.id,
    articleData,
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
  <v-container class="d-flex flex-column align-center justify-center">
    <v-table class="text-center" max-width="800">
      <thead>
        <tr>
          <th class="text-center">Заголовок</th>
          <th class="text-center">Контент</th>
          <th class="text-center">Рередактировать</th>
          <th class="text-center">Удалить</th>
          <th class="text-center">Добавить комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td class="text-center">{{ article.title }}</td>
          <td class="text-center">{{ article.content }}</td>
          <td class="text-center">
            <v-btn @click="editArticle(article)" color="green"
              ><v-icon>mdi-note-edit-outline</v-icon></v-btn
            >
          </td>
          <td class="text-center">
            <v-btn @click="removeArticle(article.id)" color="red-lighten-1"
              ><v-icon>mdi-delete-forever</v-icon></v-btn
            >
          </td>
          <td>
            <Comments :articleId="article.id" />
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-dialog v-model="isEditing" max-width="500px">
      <v-card>
        <v-card-title>Редактировать статью</v-card-title>
        <v-card-text>
          <v-text-field v-model="updatedTitle" label="Заголовок" />
          <v-textarea v-model="updatedContent" label="Контент" rows="4" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="cancelEdit" color="red">Отмена</v-btn>
          <v-btn @click="saveArticle" color="green">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped></style>
