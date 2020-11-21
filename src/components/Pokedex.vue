<template>
  <section
    class="fixed w-full h-screen overflow-y-hidden flex items-center justify-center z-10"
  >
    <div
      :style="{ width: 800 + 'px', height: 600 + 'px' }"
      class="fixed flex border-8 border-red-800 round-xl bg-red-400 shadow-2xl"
    >
      <div
        class="flex flex-col border-r-8 border-red-800 w-1/2 pt-5 pr-6 pb-6 p-10"
      >
        <div
          class="bg-blue-200 ml-6 h-8 w-8 border-2 border-white rounded-full"
        ></div>
        <div
          :style="{ height: 300 + 'px' }"
          class="relative flex justify-center items-center mt-16 w-full border-8 border-gray-400 bg-gray-200"
        >
          <span
            :style="{ top: 15 + 'px', right: 15 + 'px' }"
            class="text-lg absolute"
            >#{{ pokeModalData.id.toString().padStart(3, "0") }}</span
          >
          <img
            :src="pokeModalData.sprites.other['official-artwork'].front_default"
            :alt="pokeModalData.name"
          />
        </div>
      </div>

      <div
        class="relative flex flex-col items-end border-l-8 border-red-800 w-1/2 px-6 py-16"
      >
        <button
          @click.stop="closeModal"
          :style="{ top: 10 + 'px', fontFamily: 'body' }"
          class="absolute w-32 p-1 bg-gray-600 border-5 border-gray-800 text-gray-300 space-4 bold cursor-pointer"
        >
          X
        </button>
        <div
          :style="{ 'font-family': 'Press Start 2P' }"
          class="w-full h-screen border-2 border-gray-200 bg-green-300 font-press overflow-auto pl-4"
        >
          <h2 class="text-center">
            {{ uppercaseFirstLetter(pokeModalData.name) }}
          </h2>
          <h3>Type</h3>
          <ul>
            <li v-for="poke in pokeModalData.types" :key="poke.type.name">
              {{ poke.type.name }}
            </li>
          </ul>
          <h3>Abilities</h3>
          <ul>
            <li
              v-for="poke in pokeModalData.abilities"
              :key="poke.ability.name"
            >
              {{ poke.ability.name }}
            </li>
          </ul>
          <h3>Moves</h3>
          <ul>
            <li v-for="poke in pokeModalData.moves" :key="poke.move.name">
              {{ poke.move.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pokedex",
  props: ["pokeModalData", "closeModal"],
  methods: {
    log(msg) {
      console.log(msg);
    },
    uppercaseFirstLetter(name) {
      return name[0].toUpperCase() + name.slice(1);
    },
  },
};
</script>
