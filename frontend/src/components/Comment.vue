<script setup>
import { defineProps, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  articleId: Number,
});

const store = useStore();
const editingComment = ref(null);
const updateText = ref("");

onMounted(() => {
  store.dispatch("comments/loadCommentsByArticle", Number(props.articleId));
});

const comments = computed(() => store.state.comments.comments);

const deleteComment = async (id) => {
  await store.dispatch("comments/removeComment", {
    articleId: Number(props.articleId),
    commentId: id,
  });
};

const editingModeOn = (comment) => {
  editingComment.value = { ...comment };
  updateText.value = comment.text;
};

const saveComment = async (commentId) => {
  await store.dispatch("comments/updateExistingComment", {
    articleId: Number(props.articleId),
    commentId,
    commentData: { text: updateText.value },
  });

  await store.dispatch(
    "comments/loadCommentsByArticle",
    Number(props.articleId)
  );

  editingComment.value = null;
  updateText.value = "";
};
</script>

<template>
  <v-card>
    <v-card-title>Комментарии</v-card-title>
    <v-card-text>
      <v-list v-if="comments.length > 0">
        <v-list-item v-for="comment in comments" :key="comment.id">
          <v-row align="center">
            <v-col>
              <template
                v-if="editingComment && editingComment.id === comment.id"
              >
                <v-text-field
                  v-model="updateText"
                  label="Редактировать комментарий"
                  class="mb-2 w-100"
                  variant="underlined"
                ></v-text-field>
                <v-btn
                  @click="saveComment(comment.id)"
                  color="success"
                  class="mr-2"
                >
                  Сохранить
                </v-btn>
                <v-btn @click="editingComment = null" color="red">
                  Отмена
                </v-btn>
              </template>
              <template v-else
                ><v-list-item>
                  <v-list-item-title class="text-h4">
                    {{ comment.text }}
                  </v-list-item-title>
                  <v-row>
                    <v-col class="text-caption">
                      <span class="text-grey mr-5">
                        Создано:
                        {{ new Date(comment.createdAt).toLocaleString() }}
                      </span>
                      <span class="text-grey">
                        Обновлено:
                        {{ new Date(comment.updatedAt).toLocaleString() }}
                      </span>
                    </v-col>
                  </v-row>
                </v-list-item>
              </template>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn @click="editingModeOn(comment)" color="info" class="mr-2">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn @click="deleteComment(comment.id)" color="red-lighten-1">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <p v-else>Комментариев пока нет</p>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
