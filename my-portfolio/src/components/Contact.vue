<template>
  <section id="get-in-touch" class="bg-white py-16 px-4 md:px-8">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Contact
      </h2>
      <p class="text-gray-800 mb-10">
        Get in touch with me through my social media platforms:
      </p>

      <div class="flex justify-center flex-wrap gap-6">
        <button
          @click="
            openLink(
              'https://mail.google.com/mail/?view=cm&fs=1&to=italopedroza21@gmail.com'
            )
          "
          class="cursor-pointer flex-1 px-4 py-2 rounded-sm border duration-300 text-white transition bg-gray-800 hover:bg-gray-800/90 flex justify-center gap-2"
        >
          <span v-html="gmail()" /><span>Gmail</span>
        </button>
        <button
          @click="openLink('https://www.linkedin.com/in/italo-pedroza/')"
          class="cursor-pointer flex-1 px-4 py-2 rounded-sm border duration-300 text-white transition bg-gray-800 hover:bg-gray-800/90 flex justify-center gap-2"
        >
          <span v-html="linkedin()" /><span>LinkedIn</span>
        </button>
        <button
          @click="openLink('https://www.github.com/italoknd')"
          class="cursor-pointer flex-1 px-4 py-2 rounded-sm border duration-300 text-white transition bg-gray-800 hover:bg-gray-800/90 flex justify-center gap-2"
        >
          <span v-html="github()" /><span>GitHub</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { gmail, linkedin, github } from "../icons";
import { openLink } from "../utils";
</script>
