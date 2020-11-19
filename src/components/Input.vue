<template>
    <input v-model.lazy="pokemon" placeholder="Search for a Pokemon" class="border border-black"/>
</template>

<script>
export default {
  name: "Input",
  data () {
    return {
      pokemon: ""
    }
  }
}
</script>
