<template>
  <section
    v-if="!isLoading"
    :class="cardBgColor.bgColor"
    class="relative flex flex-col items-center w-80 h-96 mt-10 rounded-3xl shadow-lg bottom-0 cursor-pointer hover:shadow-xl hover:-translate-y-4 transform transition-all duration-200 ease-in"
  >
    <div class="flex justify-between w-full mt-3">
      <span :class="spanStyle">{{
        pokeInfo.id.toString().padStart(3, "0")
      }}</span>
      <span :class="spanStyle">{{ pokeInfo.types[0].type.name }}</span>
    </div>

    <div>
      <img
        :src="this.pokeInfo.sprites.other['official-artwork'].front_default"
        :alt="pokeInfo.name"
        class="w-48"
      />
    </div>
    <h2 class="text-4xl">{{ uppercaseFirstLetter(name) }}</h2>
  </section>

  <section v-else>
    <img
      src="../assets/images/pokeballLoader.png"
      alt="spinning pokeball"
      class="animate-spin"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      pokeInfo: {},
      isLoading: true,
      typeColorList: {
        fire: "red-100",
        grass: "green-100",
        electric: "yellow-200",
        water: "blue-100",
        ground: "orange-100",
        rock: "gray-300",
        fairy: "pink-100",
        poison: "green-200",
        bug: "orange-200",
        dragon: "blue-300",
        psychic: "teal-100",
        flying: "gray-200",
        fighting: "gray-100",
        normal: "gray-200",
      },
      spanStyle:
        "my-0 mx-6 rounded-3xl border-gray-600 border bg-gray-500 py-1 px-2 ",
    };
  },
  props: ["name"],
  methods: {
    log(msg) {
      console.log(msg);
    },
    async getPoke(pokemon) {
      const vm = this;
      await this.$P.getPokemonByName(pokemon).then(function (res) {
        vm.pokeInfo = res;
        vm.isLoading = false;
      });
    },
    uppercaseFirstLetter(name) {
      return name[0].toUpperCase() + name.slice(1);
    },
  },
  computed: {
    cardBgColor: function () {
      return {
        bgColor: `bg-${this.typeColorList[this.pokeInfo.types[0].type.name]}`,
      };
    },
  },
  created() {
    this.getPoke(this.name);
  },
};
</script>
