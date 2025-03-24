<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const startDate = ref("");
const endDate = ref("");

const groupedComments = computed(() => store.state.comments.commentsByPeriod);

function filterComments() {
  store.dispatch("comments/loadCommentsByDate", {
    dateFrom: startDate.value,
    dateTo: endDate.value,
  });
}
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="5">
        <v-text-field
          v-model="startDate"
          label="Начальная дата"
          type="date"
          density="compact"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="5">
        <v-text-field
          v-model="endDate"
          label="Конечная дата"
          type="date"
          density="compact"
          variant="outlined"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="2" class="d-flex align-center" style="height: 100%">
        <v-btn @click="filterComments" block>
          Фильтровать
        </v-btn>
      </v-col>
    </v-row>
    <v-list density="comfortable" class="mt-4">
      <v-list-group
        v-for="(comments, articleTitle) in groupedComments"
        :key="articleTitle"
        class="mb-3"
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" class="bg-primary-lighten-4 rounded-lg">
            <v-list-item-title class="text-h6 font-weight-bold">
              {{ articleTitle }}
            </v-list-item-title>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list-item
          v-for="comment in comments"
          :key="comment.id"
          class="py-3 px-4"
        >
            <v-list-item-title class="font-weight-medium text-body-1">
              {{ comment.text }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-grey-darken-1">
              {{ new Date(comment.updatedAt).toLocaleString() }}
            </v-list-item-subtitle>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-container>
</template>
