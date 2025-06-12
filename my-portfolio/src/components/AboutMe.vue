<template>
  <section id="home">
    <div class="grid lg:grid-cols-2 lg:gap-5 md:justify-center">
      <div>
        <Animation
          class="m-auto h-[300px] w-[300px] md:h-[550px] md:w-[550px]"
        />
      </div>
      <div class="flex justify-end items-center w-full">
        <div class="ml-auto p-6 lg:max-w-xl w-full">
          <h2
            class="text-2xl md:text-4xl font-semibold text-gray-800 text-center lg:text-left"
          >
            <span class="fade-in-mobile lg:fade-in">Italo </span>
            <span
              class="fade-in-mobile lg:fade-in text-[var(--light-mode-composition-color)]"
              >Pedroza</span
            >
          </h2>
          <h1
            class="fade-in-mobile text-2xl md:text-4xl font-semibold text-gray-800 text-center lg:text-left"
          >
            <span class="text-[var(--light-mode-composition-color)]"
              >Fullstack</span
            >
            Developer
          </h1>
          <div
            class="text-gray-800 font-medium mt-2 text-justify fade-in-mobile"
          >
            <p>
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
