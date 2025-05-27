<script setup lang="ts">
import { ref } from "vue";

interface IStack {
  url: string;
  techName: string;
  predominantColorOnHover: string;
  isHovering: boolean;
}

let techs = ref<IStack[]>([
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    techName: "HTML",
    predominantColorOnHover: "hover:text-white hover:bg-[#F06529]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    techName: "CSS 3",
    predominantColorOnHover: "hover:text-white hover:bg-[#2965f1]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    techName: "JavaScript",
    predominantColorOnHover: "hover:text-white hover:bg-[#f7df1e]/65",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    techName: "TypeScript",
    predominantColorOnHover: "hover:text-white hover:bg-[#3178c6]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    techName: "Vue JS",
    predominantColorOnHover: "hover:text-white hover:bg-[#42b883]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    techName: "React JS",
    predominantColorOnHover: "hover:text-white hover:bg-[#61DAFB]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    techName: "Git",
    predominantColorOnHover: "hover:text-white hover:bg-[#F34F29]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    techName: "GitHub",
    predominantColorOnHover: "hover:text-white hover:bg-[#181616]/75",
    isHovering: false,
  },
]);
</script>

<template>
  <section>
    <div>
      <div id="skills">
        <h2
          class="text-4xl text-center font-semibold text-[var(--light-mode-composition-color)] mb-5"
        >
          Skills
        </h2>
      </div>
      <div>
        <div class="grid grid-cols-8 gap-5">
          <div
            @mouseover="tech.isHovering = true"
            @mouseleave="tech.isHovering = false"
            v-for="(tech, index) in techs"
            :key="index"
            :class="`
             ${tech.predominantColorOnHover} hover:scale-105
             cursor-pointer border rounded-md shadow-xl m-auto p-4 duration-200 `"
          >
          <p class="text-2xl font-semibold text-center mb-2">
            {{ tech.techName }}
          </p>
            <img
              :src="tech.url"
              class="object-cover w-[150px] h-[150px] duration-200"
              :class="tech.isHovering ? 'scale-75 ' : ' scale-100'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
