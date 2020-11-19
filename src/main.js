import Vue from "vue";
import App from "./components/App.vue";

import "./assets/styles/index.css";

const PokeGet = require("pokeapi-js-wrapper");
const P = new PokeGet.Pokedex();
Object.defineProperty(Vue.prototype, "$P", { value: P });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
