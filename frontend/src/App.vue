<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isDarkTheme = computed(() => store.state.theme === "dark");

function toggleTheme() {
  const newTheme = isDarkTheme.value ? "light" : "dark";
  store.dispatch("setTheme", newTheme);
}
</script>

<template v-slot:input="{ on }">
  <v-app>
    <v-container>
      <v-row justify="end" class="mb-4">
        <v-btn
          @click="toggleTheme"
          :color="isDarkTheme ? 'amber-lighten-2' : 'blue-grey lighten-2'"
          icon
        >
          <v-icon>{{
            isDarkTheme ? "mdi-weather-sunny" : "mdi-weather-night"
          }}</v-icon>
        </v-btn>
      </v-row>
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
