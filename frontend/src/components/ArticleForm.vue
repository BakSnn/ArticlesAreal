<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const title = ref("");
const content = ref("");
const store = useStore();

function submit() {
  store.dispatch("articles/createNewArticle", {
    title: title.value,
    content: content.value,
  });
}
</script>

<template>
  <v-container>
    <h2>Добавление статьи</h2>
    <br />
    <v-form>
      <v-text-field v-model="title" label="Заголовок" required></v-text-field>
      <v-textarea v-model="content" label="Содержание" required></v-textarea>
      <v-btn @click="submit">Добавить</v-btn>
    </v-form>
  </v-container>
</template>

<style scoped></style>
