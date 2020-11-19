<template>
  <section class="grid grid-cols-5 gap-4 w-100vw justify-items-center">
    <Input />
  </section>
</template>

<script>
import Input from "./Input";
// const P = new this.$PokeGet.Pokedex();
export default {
  name: 'CardsContainer',
  components: {
    Input
  },
  data () {
    return {
      pokeList: [],
      pokemon: ""
    }
  },
  created () {
    const vm = this;
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function (res) {
      return res.json()
    }).then(function (res) {
      vm.pokeList = res.results
    })
  },

  methods: {
    log (msg) {
      console.log(msg)
    }
  },
  props: {
    msg: String
  }
}
</script>
