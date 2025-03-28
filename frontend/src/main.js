// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// icons
import "@mdi/font/css/materialdesignicons.css";

// components
import { createApp } from "vue";
import App from "./App.vue";

// store and router
import router from "./router/routes";
import store from "./store/store";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: store.state.theme,
    themes: {
      dark: {
        dark: true,
        colors: {
          background: "#121212",
          surface: "#1D1D1D",
          primary: "#6200EE",
          secondary: "#03DAC5",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      light: {
        dark: false,
        colors: {
          background: "#FFFFFF",
          surface: "#F5F5F5",
          primary: "#6200EE",
          secondary: "#03DAC5",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});

store.watch(
  (state) => state.theme,
  (newTheme) => {
    vuetify.theme.global.name.value = newTheme;
  }
);

createApp(App).use(vuetify).use(router).use(store).mount("#app");
