<template>
  <section class="grid grid-cols-5 gap-4 w-100vw justify-items-center">
    <Input v-on:childToParent="onInputSubmit" />
    <Card
      v-for="poke in pokeList"
      :key="poke.name"
      :name="poke.name"
      @click.native="getPokeForModal(poke.name)"
    />
    <Pokedex
      v-if="isModalOpen && pokeModalData"
      :pokeModalData="pokeModalData"
      :closeModal="closeModal"
    />
  </section>
</template>

<script>
import Input from "./Input";
import Card from "./Card";
import Pokedex from "./Pokedex";

export default {
  name: "CardsContainer",
  components: {
    Input,
    Card,
    Pokedex,
  },
  data() {
    return {
      pokeList: [],
      pokemon: "",
      isModalOpen: false,
      pokeModalData: {},
      invalidPokemon: {
        id: "000",
        name: "invalid Pokemon",
        sprites: {
          other: {
            "official-artwork": {
              front_default: `${require("../assets/images/pokeballLoader.png")}`,
            },
          },
        },
        types: [
          {
            type: {
              name: "N/A",
            },
          },
        ],
        abilities: [
          {
            ability: {
              name: "N/A",
            },
          },
        ],
        moves: [
          {
            move: {
              name: "N/A",
            },
          },
        ],
      },
    };
  },
  created() {
    this.fetchPokemon();
  },

  methods: {
    log(msg) {
      console.log(msg);
    },
    onInputSubmit(value) {
      this.pokemon = value;
      this.getPokeForModal(value);
    },
    async fetchPokemon() {
      const vm = this;
      await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          vm.pokeList = res.results;
        });
    },
    async getPokeForModal(pokemon) {
      console.log("opened");
      const vm = this;
      await this.$P
        .getPokemonByName(pokemon)
        .then(function (res) {
          vm.pokeModalData = res;
          vm.isModalOpen = true;
        })
        .catch(function (err) {
          vm.pokeModalData = vm.invalidPokemon;
          vm.isModalOpen = false;
          return err;
        });
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    formatCardId(str) {
      if (str[0] === "0" && str[1] === "0") {
        return str[2];
      } else if (str[0] === "0" && str[1] !== "0") {
        return `${str[1] + str[2]}`;
      } else {
        return str.toLowerCase();
      }
    },
  },
};
</script>
