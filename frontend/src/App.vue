<script setup></script>

<template v-slot:input="{ on }">
  <v-app>
    <v-container>
      <v-bottom-navigation :elevation="0" grow mode="shift">
        <v-btn value="Статьи" to="/">
          <v-icon>mdi-list-box-outline</v-icon>

          <span>Статьи</span>
        </v-btn>
        <v-btn value="Добавление статьи" to="/add-article">
          <v-icon>mdi-plus-box</v-icon>

          <span class="text-center">Добавление статьи</span>
        </v-btn>
        <v-btn value="Комментариии" to="/comments-by-date">
          <v-icon>mdi-comment-text-multiple-outline</v-icon>

          <span class="text-center">Комментарии</span>
        </v-btn>
      </v-bottom-navigation>

      <router-view />
    </v-container>
  </v-app>
</template>

<style scoped></style>
