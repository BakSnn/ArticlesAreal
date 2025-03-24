<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  article: Object,
  isOpen: Boolean,
});

const emit = defineEmits(["close", "save"]);

const updatedTitle = ref("");
const updatedContent = ref("");


watch(
  () => props.article,
  (newArticle) => {
    if (newArticle) {
      updatedTitle.value = newArticle.title;
      updatedContent.value = newArticle.content;
    }
  },
  { immediate: true }
);

function saveArticle() {
  emit("save", {
    id: props.article.id,
    title: updatedTitle.value,
    content: updatedContent.value,
  });
}
</script>

<template>
  <v-dialog v-model="props.isOpen" max-width="500px">
    <v-card v-if="props.article">
      <v-card-title>Редактировать статью</v-card-title>
      <v-card-text>
        <v-text-field v-model="updatedTitle" label="Заголовок" />
        <v-textarea v-model="updatedContent" label="Контент" rows="4" />
      </v-card-text>
      <v-card-actions>
        <v-btn @click="emit('close')" color="red">Отмена</v-btn>
        <v-btn @click="saveArticle" color="green">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
