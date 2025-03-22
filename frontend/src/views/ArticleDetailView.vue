<script setup>
import { useRoute } from "vue-router";
import Comments from "../components/Comment.vue";

const route = useRoute();
const articleId = route.params.id;

</script>

<template>
  <v-container>
    <Comments :articleId="Number(articleId)" />
  </v-container>
</template>

<style scoped></style>
