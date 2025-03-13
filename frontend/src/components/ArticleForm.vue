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
    <div style="width: 200vh; max-width: 100%">
      <v-form>
        <v-text-field v-model="title" label="Заголовок" required></v-text-field>
        <v-textarea v-model="content" label="Содержание" required></v-textarea>
        <div class="d-flex justify-center">
          <v-btn @click="submit">Добавить</v-btn>
        </div>
      </v-form>
    </div>
  </v-container>
</template>
<style scoped></style>
