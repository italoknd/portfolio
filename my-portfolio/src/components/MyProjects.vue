<template>
  <div id="projects">
    <div>
      <h2
        class="text-2xl md:text-4xl font-semibold text-[var(--light-mode-composition-color)] mb-4 text-center md:text-left"
      >
        Projects
      </h2>
    </div>
    

    <div class="justify-center grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>

  </div>
</template>
<script setup lang="ts">
import Card from "./Card.vue";
import projects from "../../projects.json";
import { ICardsInfos } from "../interface";
import { ref } from "vue";

const cards = ref<ICardsInfos[]>(projects as ICardsInfos[]);
</script>
<style scoped>
.project-btn {
  width: 220px;
}
</style>
