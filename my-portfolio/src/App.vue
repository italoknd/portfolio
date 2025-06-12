<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Portfolio from "./views/Portfolio.vue";
</script>

<template>
  <div class="select-none">
    <Navbar />
    <Portfolio class="absolute mt-12 w-full" />
  </div>
</template>