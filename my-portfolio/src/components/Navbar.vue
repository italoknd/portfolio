<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { INavItems } from "../interface";
import { items } from "../scripts/nav_items";
import * as icon from "../icons";

import SideMenu from "./SideMenu.vue";

onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const windowWidth = ref(window.innerWidth);

const updateWidth = () => (windowWidth.value = window.innerWidth);

let showSideMenuOptions = ref<boolean>(false);
let navItems = ref<INavItems[]>(items);

const openSideMenu = (stts: boolean) => {
  showSideMenuOptions.value = stts;
};
</script>

<template>
  <n-page-header class="p-3 md:p-5 w-full z-20 fixed bg-white shadow-xl">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl md:text-4xl font-semibold text-gray-800">
        Port<span class="text-[var(--light-mode-composition-color)]"
          >folio
        </span>
      </h2>
      <ul v-if="windowWidth > 768" class="flex justify-end gap-4 items-center">
        <li v-for="(item, index) in navItems" :key="index">
          <a :href="item.hrefName">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)] font-semibold hover:underline hover:duration-300 hover:underline-[--light-mode-composition-color)]"
              >{{ item.itemName }}</span
            >
          </a>
        </li>
      </ul>
      <div v-else class="cursor-pointer">
        <span
          @click="openSideMenu(true)"
          v-if="!showSideMenuOptions"
          v-html="icon.hamburger(20, '#1E2939')"
        />
        <SideMenu
          class="absolute"
          @close="openSideMenu"
          :showSideMenuOptions="showSideMenuOptions"
        />
      </div>
    </div>
  </n-page-header>
</template>
