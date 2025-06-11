<template>
  <div
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    class="bg-[var(--light-mode-composition-color)] text-white menu-shadow"
    :class="
      showSideMenuOptions
        ? 'menu-open fixed h-full w-[200px] right-0 top-0 z-20'
        : 'hidden'
    "
    :style="{ transform: `translateX(${offsetX}px)` }"
  >
    <ul class="">
      <li
        class="p-2 text-left"
        v-for="(item, index) in sideMenuItems"
        :key="index"
      >
        <a :href="item.hrefName">
          <span>{{ item.itemName }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { INavItems } from "../interface";
import { items } from "../scripts/nav_items";

//MODELS
const sideMenuItems = ref<INavItems[]>(items);
const startX = ref(0);
const offsetX = ref(0);
const threshold = 100;

//FUNCTIONS
const onTouchStart = (e: TouchEvent) => {
  startX.value = e.touches[0].clientX;
};

const onTouchMove = (e: TouchEvent) => {
  const deltaX = startX.value - e.touches[0].clientX;

  offsetX.value = deltaX > 0 ? deltaX : 0;
};

const onTouchEnd = () => {
  if (Math.abs(offsetX.value) > threshold) {
    emit("close", false);
  } else {
    offsetX.value = 0;
  }
};

//OTHERS
defineProps<{ showSideMenuOptions: boolean }>();
const emit = defineEmits<{
  (e: "close", stts: boolean): void;
}>();
</script>
<style scoped>
.menu-open {
  animation: 1s slide-in;
}

@keyframes slide-in {
  from {
    right: -200px;
  }
  to {
    right: 0;
  }
}

.menu-shadow {
  box-shadow: -20px 0px 25px rgba(0, 0, 0, 0.25);
}
</style>
