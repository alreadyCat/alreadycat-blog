import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import i18n from "@/locales";
import "animate.css";
import "normalize.css/normalize.css";
import "@/style/index.scss";
import router from "./router";
import "virtual:svg-icons-register";
//@ts-ignore
import InstantSearch from 'vue-instantsearch/vue3/es';
createApp(App).use(createPinia()).use(InstantSearch).use(router).use(i18n).mount("#app");
