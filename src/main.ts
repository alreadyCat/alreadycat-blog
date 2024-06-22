import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css/normalize.css";
import i18n from '@/locales'
import "@/assets/iconfont/iconfont.css"
import "@/style/index.scss"


createApp(App).use(router).use(i18n).mount("#app");
