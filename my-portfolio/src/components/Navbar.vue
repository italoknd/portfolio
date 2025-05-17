<script setup lang="ts">
import { ref } from "vue";

interface INavItems {
  itemName: string;
  hrefName: string;
}

let items = ref<INavItems[]>([
  {
    itemName: "Home",
    hrefName: "#home",
  },
  {
    itemName: "About me",
    hrefName: "#about-me",
  },
  {
    itemName: "Skills",
    hrefName: "#skills",
  },
  {
    itemName: "Projects",
    hrefName: "#projects",
  },
  {
    itemName: "Contact",
    hrefName: "#get-in-touch",
  },
]);
</script>

<template>
  <n-page-header class="p-5">
    <div class="flex justify-between items-center">
      <h2 class="text-4xl font-semibold text-gray-800">
        Port<span class="text-[var(--light-mode-composition-color)]">folio
        </span>
      </h2>
      <ul class="flex justify-end gap-4 items-center">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.hrefName">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)] font-semibold hover:underline hover:duration-300 hover:underline-[--light-mode-composition-color)]">{{
              item.itemName }}</span>
          </a>
        </li>
      </ul>
    </div>
  </n-page-header>
  <div class="border-[0.5px] border-gray-600"></div>
</template>

<style scoped></style>
