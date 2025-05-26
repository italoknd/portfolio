<script setup lang="ts">
import { ref } from "vue";

interface IStack {
  url: string;
  techName: string;
  predominantColorOnHover: string;
}

let techs = ref<IStack[]>([
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    techName: "HTML",
    predominantColorOnHover: "hover:text-[#E44D26]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    techName: "CSS 3",
    predominantColorOnHover: "hover:text-[#1572B6]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    techName: "JavaScript",
    predominantColorOnHover: "hover:text-[#F0DB4F]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    techName: "TypeScript",
    predominantColorOnHover: "hover:text-[#007ACC]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    techName: "Vue JS",
    predominantColorOnHover: "hover:text-[#41B883]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    techName: "React JS",
    predominantColorOnHover: "hover:text-[#61DAFB]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    techName: "Git",
    predominantColorOnHover: "hover:text-[#F34F29]",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    techName: "GitHub",
    predominantColorOnHover: "hover:text-[#181616]",
  },
]);
</script>

<template>
  <section>
    <div>
      <div id="skills">
        <h2
          class="text-4xl font-semibold text-[var(--light-mode-composition-color)] mb-5"
        >
          Skills
        </h2>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-5">
          <div
            v-for="(tech, index) in techs"
            :key="index"
            :class="`
             ${tech.predominantColorOnHover} hover:scale-105
             cursor-pointer border rounded-md shadow-xl flex items-center justify-between p-4 duration-200`"
          >
            <img :src="tech.url" class="object-cover w-[150px] h-[150px]" />
            <p class="text-2xl font-semibold">
              {{ tech.techName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.n-card {
  max-width: 300px;
  max-height: 300px;
}
</style>
