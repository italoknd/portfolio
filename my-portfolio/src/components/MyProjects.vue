<template>
  <section id="projects">
    <div class="main-projects-container">
      <h1 class="section-header">Projects</h1>
      <div id="projects-container" v-for="(card, index) in cards" :key="index">
        <div class="projects-box" id="project-1">
          <h2 id="header-title">{{ card.project_title }}</h2>
          <p class="desc-project">
            {{ card.short_description }}
          </p>
          <div class="btn-container">
            <a :href="card.quick_access_link" rel="next" target="_blank">
              <button class="project-btn">Website</button>
            </a>
            <a :href="card.project_on_github" rel="next" target="_blank">
              <button class="project-btn">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { cards_infos } from "../scripts/cards_info";
import { ICardsInfos } from "../interface";
import { ref } from "vue";

const cards = ref<ICardsInfos[]>(cards_infos);
</script>
