import Vue from "vue";
import App from "./components/App.vue";

import "./assets/styles/index.css";

const PokeGet = require("pokeapi-js-wrapper");
Object.defineProperty(Vue.prototype, "$PokeGet", { value: PokeGet });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
