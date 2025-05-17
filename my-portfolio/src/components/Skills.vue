<script setup lang="ts">
import { ref } from "vue";

interface IStack {
  url: string;
  techName: string;
  predominantColor: string;
  showPredominantColor: boolean;
}

let techs = ref<IStack[]>([
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    techName: "HTML",
    predominantColor: "#E44D26",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    techName: "CSS 3",
    predominantColor: "#1572B6",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    techName: "JavaScript",
    predominantColor: "#F0DB4F",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    techName: "TypeScript",
    predominantColor: "#007ACC",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    techName: "Vue JS",
    predominantColor: "#41B883",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    techName: "React JS",
    predominantColor: "#61DAFB",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    techName: "Git",
    predominantColor: "#F34F29",
    showPredominantColor: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    techName: "GitHub",
    predominantColor: "#181616",
    showPredominantColor: false,
  },
]);

let showPredominatColor = ref<boolean>(false);
</script>

<template>
  <section>
    <div>
      <div id="skills">
        <h2 class="text-4xl font-semibold text-[var(--light-mode-composition-color)] mb-5">
          Skills
        </h2>
        <!-- <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          earum quia maxime animi necessitatibus, consequuntur doloremque sint
          ducimus dolores eaque ipsa reiciendis molestias itaque aspernatur
          aliquid temporibus voluptatum quidem ex. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Accusamus ex fugit minus dolorum quas
          eos reprehenderit, commodi illum praesentium officiis quibusdam quis
          veniam. Doloribus optio deleniti eveniet et similique illum.
        </p> -->
      </div>
      <div>
        <!-- <h2>Stack</h2> -->
        <div class="grid grid-cols-4 gap-5">
          <div v-for="(tech, index) in techs"
            class="cursor-pointer border rounded-md shadow-xl flex items-center justify-between p-4 hover:scale-105 duration-200"
            @mouseenter="tech.showPredominantColor = true" @mouseleave="tech.showPredominantColor = false">
            <img :key="index" :src="tech.url" class="object-cover w-[150px] h-[150px]" />
            <p class="text-2xl font-semibold" :class="
                tech.showPredominantColor
                  ? `text-[${tech.predominantColor}]`
                  : ``
              ">
              {{ tech.techName }}
            </p>
          </div>
        </div>
        <!-- <n-card
          title="Card with Cover"
          
          :key="index"
        >
          <template #cover>
          </template>
          Card Content
        </n-card> -->
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
