<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  article: Object,
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <v-dialog v-model="props.isOpen" max-width="600px">
    <v-card v-if="props.article">
      <v-card-title>{{ props.article.title }}</v-card-title>
      <v-card-text>
        <p>{{ props.article.content }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="emit('close')" color="red">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
