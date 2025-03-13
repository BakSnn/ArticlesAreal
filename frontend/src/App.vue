<script setup></script>

<template>
  <v-app>
    <v-bottom-navigation :elevation="0" grow mode="shift">
      <v-btn value="main" to="/">
        <v-icon>mdi-home</v-icon>
        <span>Главная</span>
      </v-btn>
      <v-btn value="recent" to="/about">
        <v-icon>mdi-plus-box</v-icon>

        <span>Добавить статью</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-map</v-icon>

        <span>Favorites</span>
      </v-btn>

      <v-btn value="nearby" to="">
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>

    <router-view />
  </v-app>
</template>

<style scoped></style>
