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
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
    techName: "Nuxt JS",
    predominantColorOnHover: "hover:text-white hover:bg-[#108775]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    techName: "Vue JS",
    predominantColorOnHover: "hover:text-white hover:bg-[#42b883]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg",
    techName: "Vuetify",
    predominantColorOnHover: "hover:text-white hover:bg-[#1697F6]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    techName: "Bootstrap",
    predominantColorOnHover: "hover:text-white hover:bg-[#712CF9]/75",
    isHovering: false,
  },
  {
    url: "https://user-images.githubusercontent.com/29209254/152627426-ed1c3a87-49f4-4e0f-98ea-15ce19f083ac.svg",
    techName: "BootstrapVue",
    predominantColorOnHover: "hover:text-white hover:bg-[#563D7C]/75",
    isHovering: false,
  },
  {
    url: "https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg",
    techName: "Naive UI",
    predominantColorOnHover: "hover:text-white hover:bg-[#4C9717]/50",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-original.svg",
    techName: "QUASAR",
    predominantColorOnHover: "hover:text-white hover:bg-[#00B4FF]/50",
    isHovering: false,
  },
  {
    url: "https://blog.ag-grid.com/content/images/2021/02/new-logo-1.png",
    techName: "AG Grid",
    predominantColorOnHover: "hover:text-white hover:bg-[#031C4C]/65",
    isHovering: false,
  },
  {
    url: "https://pinia-docs-pt.netlify.app/logo.svg",
    techName: "Pinia",
    predominantColorOnHover: "hover:text-white hover:bg-[#FFE064]/80",
    isHovering: false,
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/vuex-1.svg",
    techName: "VueX",
    predominantColorOnHover: "hover:text-white hover:bg-[#35495E]/80",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    techName: "React JS",
    predominantColorOnHover: "hover:text-white hover:bg-[#4278ca]/75",
    isHovering: false,
  },
  {
    url: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    techName: "Redux",
    predominantColorOnHover: "hover:text-white hover:bg-[#764ABC]/80",
    isHovering: false,
  },
  {
    url: "https://nodejs.org/static/logos/nodejsDark.svg",
    techName: "Node JS",
    predominantColorOnHover: "hover:text-white hover:bg-[#468C45]/60",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg",
    techName: "Fastify",
    predominantColorOnHover: "hover:text-white hover:bg-[#181616]/80",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-original-wordmark.svg",
    techName: "Handlebars",
    predominantColorOnHover: "hover:text-white hover:bg-[#2e2e2e]/80",
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
    predominantColorOnHover: "hover:text-white hover:bg-[#181616]/60",
    isHovering: false,
  },
  {
    url: "https://images.icon-icons.com/2699/PNG/512/gitlab_logo_icon_169112.png",
    techName: "Gitlab",
    predominantColorOnHover: "hover:text-white hover:bg-[#E24329]/80",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    techName: "Vite",
    predominantColorOnHover: "hover:text-white hover:bg-[#B53EFE]/80",
    isHovering: false,
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    techName: "Jira",
    predominantColorOnHover: "hover:text-white hover:bg-[#095ED8]/80",
    isHovering: false,
  },
  {
    url: "https://m.media-amazon.com/images/I/41QodfboFdL.png",
    techName: "ORACLE Database",
    predominantColorOnHover: "hover:text-white hover:bg-[#ED1B24]/70",
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
