<!-- <script setup lang="ts">
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
</template> -->

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
  <section class="bg-gray-50">
    <div id="skills">
      <h2 class="text-4xl font-semibold text-blue-600 mb-4">Skills</h2>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5"
    >
      <div
        @mouseover="tech.isHovering = true"
        @mouseleave="tech.isHovering = false"
        v-for="(tech, index) in techs"
        :key="index"
        :class="`
             ${tech.predominantColorOnHover} hover:scale-105 flex justify-between
             cursor-pointer border border-gray-200 rounded-lg shadow-lg bg-white p-6 duration-300 relative overflow-hidden group`"
      >
        <!-- Orbital Rings Container -->
        <div
          class="absolute inset-0 flex items-center justify-start pointer-events-none"
        >
          <!-- Outer Ring -->
          <div
            class="absolute w-32 h-32 border border-blue-400/30 rounded-full transition-all duration-500"
            :class="
              tech.isHovering ? 'opacity-100 animate-spin-slow' : 'opacity-0'
            "
            style="animation-duration: 4s"
          >
            <!-- Orbital Dots -->
            <div
              class="absolute w-2 h-2 bg-blue-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"
            ></div>
            <div
              class="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full bottom-0 right-1/2 transform translate-x-1/2 translate-y-1"
            ></div>
          </div>

          <!-- Middle Ring -->
          <div
            class="absolute w-24 h-24 border border-purple-400/40 rounded-full transition-all duration-500"
            :class="
              tech.isHovering ? 'opacity-100 animate-spin-reverse' : 'opacity-0'
            "
            style="animation-duration: 3s"
          >
            <!-- Orbital Particles -->
            <div
              class="absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-1/2 right-0 transform translate-x-1 -translate-y-1/2"
            ></div>
            <div
              class="absolute w-1 h-1 bg-pink-400 rounded-full top-1/2 left-0 transform -translate-x-1 -translate-y-1/2"
            ></div>
          </div>

          <!-- Inner Ring -->
          <div
            class="absolute w-20 h-20 border border-emerald-400/50 rounded-full transition-all duration-500"
            :class="
              tech.isHovering ? 'opacity-100 animate-spin-slow' : 'opacity-0'
            "
            style="animation-duration: 2s"
          >
            <!-- Small Orbital Elements -->
            <div
              class="absolute w-1 h-1 bg-emerald-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"
            ></div>
            <div
              class="absolute w-1 h-1 bg-green-400 rounded-full bottom-1/2 right-0 transform translate-x-1 translate-y-1/2"
            ></div>
            <div
              class="absolute w-1 h-1 bg-teal-400 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1"
            ></div>
          </div>
        </div>

        <!-- Scanning Line Effect -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -skew-x-12 transition-all duration-1000"
          :class="
            tech.isHovering
              ? 'translate-x-full opacity-100'
              : '-translate-x-full opacity-0'
          "
          style="animation-delay: 0.2s"
        ></div>

        <!-- Content -->
        <div class="relative z-10 w-100 flex items-center justify-between">
          <div class="relative">
            <img
              :src="tech.url"
              class="object-contain w-16 h-16 transition-all duration-300 relative z-10"
              :class="
                tech.isHovering ? 'scale-110 drop-shadow-lg' : 'scale-100'
              "
              :alt="tech.techName"
            />
          </div>
          <div>
            <p
              class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300"
            >
              {{ tech.techName }}
            </p>
          </div>
        </div>

        <!-- Corner Accent Lines -->
        <div
          class="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white-400/50 transition-all duration-300"
          :class="tech.isHovering ? 'opacity-100' : 'opacity-0'"
        ></div>
        <div
          class="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white-400/50 transition-all duration-300"
          :class="tech.isHovering ? 'opacity-100' : 'opacity-0'"
        ></div>
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
