<template>
  <main id="app" class="bg-purple-100 box-border">
    <CardsContainer msg="Testing out Vue again!" />
  </main>
</template>

<script>
import CardsContainer from "./CardsContainer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    CardsContainer,
  },
};
</script>
