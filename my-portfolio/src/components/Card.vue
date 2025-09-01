<template>
  <div
    class="md:max-w-sm md:mx-auto lg:mx-0 bg-white rounded-md shadow-xl overflow-hidden transition hover:shadow-2xl"
  >
    <img
      :src="card?.screenshot"
      alt="Project Cover"
      class="w-full h-48 object-cover object-center"
    />

    <!-- Conteúdo -->
    <div class="p-4 space-y-4">
      <h3 class="text-2xl font-semibold text-gray-900">
        {{ card.project_title }}
      </h3>

      <p
        class="text-gray-800 text-sm leading-relaxed border h-[150px] overflow-y-auto rounded-sm p-2"
        v-html="card.short_description"
      />

      <div>
        <p class="font-semibold mb-1">Techs used:</p>
        <div
          class="tech-scroll flex items-center gap-2 overflow-x-auto flex-nowrap py-1"
        >
          <img
            v-for="(src, i) in card.techs"
            :key="i"
            :src="src"
            alt="Tech used"
            class="h-8 w-8 shrink-0"
          />
        </div>
      </div>

      <!-- Botões -->
      <div class="grid grid-cols-2 gap-3">
        <button
          @click="openLink(card.quick_access_link)"
          class="cursor-pointer flex-1 px-4 py-2 rounded-sm text-white font-medium transition duration-300 bg-[var(--light-mode-composition-color)] hover:bg-[var(--light-mode-composition-color)]/85 flex justify-center gap-2"
        >
          <span v-html="link(23)" /><span>Website</span>
        </button>
        <button
          @click="openLink(card.project_on_github)"
          class="cursor-pointer flex-1 px-4 py-2 rounded-sm border duration-300 text-white transition bg-gray-800 hover:bg-gray-800/90 flex justify-center gap-2"
        >
          <span v-html="github()" /><span>GitHub</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ICardsInfos } from "../interface";
import { github, link } from "../icons";
import { openLink } from "../utils";
defineProps<{ card: ICardsInfos }>();
</script>
<style scoped>
.tech-scroll {
  display: flex;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0.25rem 0;

  scrollbar-width: thin;
}

@media (max-width: 768px) {
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
