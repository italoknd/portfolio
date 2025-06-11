<script setup lang="ts">
import { ref } from "vue";
import { IStack } from "../interface";
import { skills } from "../scripts/skills";

let techs = ref<IStack[]>(skills);
</script>

<template>
  <section class="bg-gray-50">
    <div id="skills">
      <h2 class="text-2xl md:text-4xl font-semibold text-blue-600 mb-4 text-center md:text-left">
        Skills
      </h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div @mouseover="tech.isHovering = true" @mouseleave="tech.isHovering = false" v-for="(tech, index) in techs"
        :key="index"
        class="hover:scale-105 flex justify-between cursor-pointer border border-gray-200 rounded-lg shadow-lg bg-white p-2 md:p-6 duration-300 relative overflow-hidden group"
        :class="tech.predominantColorOnHover">
        <!-- Scanning Line Effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -skew-x-12 transition-all duration-1000"
          :class="
            tech.isHovering
              ? 'translate-x-full opacity-100'
              : '-translate-x-full opacity-0'
          " style="animation-delay: 0.2s"></div>

        <!-- Content -->
        <div class="relative w-100 flex items-center justify-between">
          <div class="relative">
            <img :src="tech.url" class="object-contain w-12 h-12 md:w-16 md:h-16 transition-all duration-300 relative"
              :class="
                tech.isHovering ? 'scale-110 drop-shadow-lg' : 'scale-100'
              " :alt="tech.techName" />
          </div>
          <div>
            <p
              class="text-md md:text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
              {{ tech.techName }}
            </p>
          </div>
        </div>

        <!-- Corner Accent Lines -->
        <div
          class="hidden md:block absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white-400/50 transition-all duration-300 rounded-tl-md"
          :class="tech.isHovering ? 'opacity-100' : 'opacity-0'"></div>
        <div
          class="hidden md:block absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white-400/50 transition-all duration-300 rounded-br-md"
          :class="tech.isHovering ? 'opacity-100' : 'opacity-0'"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.animate-spin-slow {
  animation: spin-slow linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse linear infinite;
}

/* Hover glow effect */
.group:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.1);
}
</style>
