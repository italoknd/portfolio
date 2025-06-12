<template>
  <div >
    <div>
      <h2 class="text-2xl md:text-4xl font-semibold text-blue-600 mb-4 text-center md:text-left">
        Projects
      </h2>
    </div>
    <!-- <section id="projects">
      <h1 class="section-header">Projects</h1>

      <div class="main-projects-container">
        <div v-for="(card, index) in cards" :key="index">
          <div class="project-box">
            <h2>{{ card.project_title }}</h2>
            <p v-html="card.short_description" class="project-description" />
            <div class="card-container-buttons">
              <a
                :href="
                  !card.has_access_link ? '#projects' : card.quick_access_link
                "
                rel="next"
                :target="!card.has_access_link ? '_self' : '_blank'"
                @click="checkIfHasAccessLink(card.has_access_link)"
              >
                <button
                  class="project-btn"
                  :class="
                    !card.has_access_link ? 'not-allowed' : 'cursor-pointer'
                  "
                >
                  Website
                </button>
              </a>
              <a :href="card.project_on_github" rel="next" target="_blank">
                <button class="project-btn">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <div class=" justify-center grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <Card v-for="(card, index) in cards" :key="index" :card="card" />
    </div>

    <Notification v-if="show_notification" />
  </div>
</template>
<script setup lang="ts">
import Card from "./Card.vue";
import Notification from "./Notification.vue";
import { cards_infos } from "../scripts/cards_info";
import { ICardsInfos } from "../interface";
import { ref } from "vue";

const cards = ref<ICardsInfos[]>(cards_infos);
const show_notification = ref<boolean>(false);

//FUNCTIONS
// const checkIfHasAccessLink = (param: boolean) => {
//   !param ? (show_notification.value = true) : null;

//   setTimeout(() => {
//     show_notification.value = false;
//   }, 4000);
// };
</script>
<style scoped>
.project-btn {
  width: 220px;
}
</style>
