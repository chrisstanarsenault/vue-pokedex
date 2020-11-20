<template>
  <section class="grid grid-cols-5 gap-4 w-100vw justify-items-center">
    <Input v-on:childToParent="onInputSubmit" />
    <Card v-for="poke in pokeList" :key="poke.name" :name="poke.name" />
  </section>
</template>

<script>
import Input from "./Input";
import Card from "./Card";

export default {
  name: "CardsContainer",
  components: {
    Input,
    Card,
  },
  data() {
    return {
      pokeList: [],
      pokemon: "",
    };
  },
  created() {
    const vm = this;
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        vm.pokeList = res.results;
      });
  },

  methods: {
    log(msg) {
      console.log(msg);
    },
    onInputSubmit(value) {
      this.pokemon = value;
    },
  },
  props: {
    msg: String,
    name: String,
  },
};
</script>
