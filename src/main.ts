import {createApp} from "vue";
import App from "./App.vue";
import i18n from '@/locales'
import 'animate.css'
import "normalize.css/normalize.css";
import "@/style/index.scss"
import router from "./router";
import 'virtual:svg-icons-register';

createApp(App).use(router).use(i18n).mount("#app");
