// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Store and router
import router from "./router/routes";
import store from "./store/store";

// Added vuetify
const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});

createApp(App).use(vuetify).use(router).use(store).mount("#app");
