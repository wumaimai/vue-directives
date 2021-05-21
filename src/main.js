import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import directives from "./directives";

createApp(App)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .use(directives)
  .mount("#app");
