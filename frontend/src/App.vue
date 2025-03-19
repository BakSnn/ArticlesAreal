<script setup></script>

<template v-slot:input="{ on }">
  <v-app>
    <v-container>
      <v-bottom-navigation :elevation="0" grow mode="shift">
        <v-btn value="Главная" to="/">
          <v-icon>mdi-home</v-icon>
          <span>Главная</span>
        </v-btn>
        <v-btn value="Статьи" to="/articles">
          <v-icon>mdi-list-box-outline</v-icon>

          <span>Статьи</span>
        </v-btn>
        <v-btn value="Добавление статьи" to="/add-article">
          <v-icon>mdi-plus-box</v-icon>

          <span class="text-center">Добавление статьи</span>
        </v-btn>
      </v-bottom-navigation>

      <router-view />
    </v-container>
  </v-app>
</template>

<style scoped></style>
