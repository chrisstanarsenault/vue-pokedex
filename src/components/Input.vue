<template>
  <div class="col-start-1 col-end-6 flex flex-col items-center">
    <label for="pokemon-input" class="text-4xl">Search for a Pokemon: </label>
    <input
      id="pokemon-input"
      v-model.lazy="pokemon"
      placeholder="Pokemon"
      v-on:keyup="emitToParent"
      class="border border-black m-3 h-12 text-4xl pl-3"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      pokemon: "",
    };
  },
  methods: {
    emitToParent(e) {
      this.$emit("childToParent", this.pokemon);
      this.pokemon = "";
    },
  },
};
</script>
