import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./plugins/buefy.js";

Vue.config.productionTip = false;

export const GestureEventBus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
