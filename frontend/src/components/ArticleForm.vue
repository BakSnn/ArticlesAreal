<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const title = ref("");
const content = ref("");
const store = useStore();

const isAddingArticle = ref(false);
const isEmpty = ref(false);

function closeIsEmptyDialog() {
  isEmpty.value = false;
}

function openDialog() {
  isAddingArticle.value = true;
}

function closeDialog() {
  isAddingArticle.value = false;
}

function submit() {
  if (title.value === "" || content.value === "") {
    isEmpty.value = true;
    return;
  } else openDialog();
  store.dispatch("articles/createNewArticle", {
    title: title.value,
    content: content.value,
  });
}
</script>

<template>
  <v-container>
    <div style="width: 100vh; min-width: 100vh">
      <v-form>
        <v-text-field v-model="title" label="Заголовок" required></v-text-field>
        <v-textarea v-model="content" label="Содержание" required></v-textarea>
        <div class="d-flex justify-center">
          <v-btn @click="submit">Добавить</v-btn>
        </div>
      </v-form>
    </div>
  </v-container>

  <v-dialog v-model="isAddingArticle" width="200">
    <v-card>
      <v-card-title class="text-center">Добавлено</v-card-title>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="closeDialog" color="success">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="isEmpty" width="400">
    <v-card>
      <v-card-title class="text-center"
        >Статья не может быть пустой</v-card-title
      >
      <v-card-actions class="d-flex justify-center">
        <v-btn color="success" @click="closeIsEmptyDialog">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style scoped></style>
