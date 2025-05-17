<template>
  <section id="about-me">
    <div class="grid md:grid-cols-2">
      <div>
        <!-- <img
          class="border-[0.5px] border-gray-600 bg-gray-200 rounded-md shadow-xl/30"
          src="../assets/cp-perfil-1_cleanup-removebg-preview.png"
          alt="Me"
        /> -->
        <Animation class="h-[800px] w-[800px]"/>
      </div>
      <div class="flex justify-end items-center leading-relaxed max-w-2xl">
        <div>
          <h2 class="text-4xl font-semibold text-gray-800">
            <span>Italo </span>
            <span class="text-[var(--light-mode-composition-color)]">Pedroza</span>
          </h2>
          <h1 class="text-2xl font-semibold text-gray-800">
            <span class="text-[var(--light-mode-composition-color)]">Front-end</span>
            Developer
          </h1>
          <p class="text-gray-800 font-medium mt-2">
            Hello! Welcome. I am a front-end developer and here you will find
            some of the projects that I have been building with dedication,
            creativity and that touch of curiosity that every dev carries. Feel
            free to explore my projects! :D
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Animation from "./Animation.vue";
</script>
