<template>
  <section id="about-me">
    <div class="grid md:grid-cols-2">
      <div>
        <Animation class="m-auto h-[300px] w-[300px] md:h-[800px] md:w-[800px]" />
      </div>
      <div class="flex justify-end items-center leading-relaxed max-w-2xl">
        <div>
          <h2
            class="text-center md:text-left text-2xl md:text-4xl font-semibold text-gray-800 md:fade-in fade-in-mobile">
            <span>Italo </span>
            <span class="text-[var(--light-mode-composition-color)]">Pedroza</span>
          </h2>
          <h1 class="text-center md:text-left text-2xl font-semibold text-gray-800 md:fade-in fade-in-mobile">
            <span class="text-[var(--light-mode-composition-color)]">Fullstack</span>
            Developer
          </h1>
          <div class="text-gray-800 font-medium mt-2">
            <p class="description-fade-in">
              Hello! Welcome. I am a front-end developer and here you will find
              some of the projects that I have been building with dedication,
              creativity and that touch of curiosity that every dev carries.
              Feel free to explore my projects! :D
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Animation from "./Animation.vue";
</script>
<style scoped>
.fade-in {
  animation: fade-in 3s linear;
}

.fade-in-mobile {
  animation: fade-in-mobile 3s linear;
}

@keyframes fade-in {
  from {
    opacity: 0;
    margin-left: 50px;
  }
  to {
    opacity: 1;
    margin-left: 0;
  }
}

@keyframes fade-in-mobile {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.description-fade-in {
  animation: description-fade-in 3s linear;
}

@keyframes description-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
