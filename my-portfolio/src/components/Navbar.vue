<script setup lang="ts">
import { ref } from "vue";

let options = ref<[]>([]);
</script>

<template>
  <n-page-header>
    <div class="flex justify-between items-center p-5">
      <h2 class="text-2xl font-semibold text-gray-800">
        Port<span class="text-[var(--light-mode-composition-color)]"
          >folio</span
        >
      </h2>
      <ul class="flex justify-end gap-4 items-center">
        <li>
          <a href="#home">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)]"
              >Home</span
            >
          </a>
        </li>
        <li>
          <a href="#about-me">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)]"
              >About me</span
            >
          </a>
        </li>
        <li>
          <a href="#skills">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)]"
              >Skills</span
            >
          </a>
        </li>
        <li>
          <a href="#projects">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)]"
              >Projects</span
            >
          </a>
        </li>
        <li>
          <a href="#get-in-touch">
            <span
              class="text-gray-800 hover:text-[var(--light-mode-composition-color)]"
              >Contact</span
            >
          </a>
        </li>
      </ul>
    </div>
  </n-page-header>
</template>

<style scoped></style>
