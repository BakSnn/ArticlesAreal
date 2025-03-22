<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  articleId: Number,
});

const isAddingAComment = ref(false);
const isCommentAdded = ref(false);
const newComment = ref("");

function openDialogCommentAdded() {
  isCommentAdded.value = true;
}
function closeDialogCommentAdded() {
  isCommentAdded.value = false;
}
function openDialog() {
  isAddingAComment.value = true;
}

function closeDialog() {
  isAddingAComment.value = false;
}

async function addComment() {
  await store.dispatch("comments/createNewComment", {
    articleId: props.articleId,
    commentData: { text: newComment.value, articleId: props.articleId },
  });
  closeDialog();
  openDialogCommentAdded();
}
</script>

<template>
  <v-btn @click="openDialog" color="info">
    <v-icon> mdi-comment-edit-outline </v-icon>
  </v-btn>

  <v-dialog v-model="isAddingAComment" width="500">
    <v-card>
      <v-card-title>Добавить комментарий</v-card-title>
      <v-card-text>
        <v-textarea v-model="newComment" label="Текст комментария"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeDialog" color="red">Закрыть</v-btn>
        <v-btn @click="addComment" color="green">Добавить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="isCommentAdded" width="400">
    <v-card>
      <v-card-text>
        <v-card-title class="d-flex justify-center"
          >Комментарий добавлен</v-card-title
        >
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="closeDialogCommentAdded" color="green">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
