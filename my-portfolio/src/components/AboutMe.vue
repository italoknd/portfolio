<template>
  <section id="about-me">
    <div class="grid md:grid-cols-2">
      <div>
        <!-- <img
          class="border-[0.5px] border-gray-600 bg-gray-200 rounded-md shadow-xl/30"
          src="../assets/cp-perfil-1_cleanup-removebg-preview.png"
          alt="Me"
        /> -->
        <Animation class="h-[800px] w-[800px]" />
      </div>
      <div class="flex justify-end items-center leading-relaxed max-w-2xl">
        <div>
          <h2 class="text-4xl font-semibold text-gray-800 fade-in">
            <span>Italo </span>
            <span class="text-[var(--light-mode-composition-color)]"
              >Pedroza</span
            >
          </h2>
          <h1 class="text-2xl font-semibold text-gray-800 fade-in">
            <span class="text-[var(--light-mode-composition-color)]"
              >Front-end</span
            >
            Developer
          </h1>
          <div class="typewriter text-gray-800 font-medium mt-2">
            <p class="typewriter-line">
              Hello! Welcome. I am a front-end developer and here you will find
              some of the projects that I have
            </p>
            <p class="typewriter-line">
              been building with dedication, creativity and that touch of
              curiosity that every dev carries.
            </p>
            <p class="typewriter-line">Feel free to explore my projects! :D</p>
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

.typewriter-line {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
}

.typewriter-line:nth-child(1) {
  animation: typing 2s steps(113) forwards, blink 1s step-end infinite;
  animation-delay: 0s;
}

.typewriter-line:nth-child(2) {
  animation: typing 2s steps(97) forwards, blink 1s step-end infinite;
  animation-delay: 2s;
}

.typewriter-line:nth-child(3) {
  animation: typing-last-child 1.5s steps(37) forwards,
    blink 1s step-end infinite;
  animation-delay: 4s;
}

@keyframes typing {
  from {
    width: 0%;
    border-right: 1px solid black;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
@keyframes typing-last-child {
  from {
    opacity: 0;
    width: 0%;
  }
  to {
    opacity: 1;
    width: 36.5%;
    border-right: 1px solid black;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
