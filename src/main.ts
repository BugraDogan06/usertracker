import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // store'u ekledim

import PrimeVue from "primevue/config";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store); // store'u bağladım
app.use(PrimeVue);

app.mount("#app");
