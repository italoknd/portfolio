<template>
  <div @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" id="sidemenu"
    class="bg-[var(--light-mode-composition-color)] menu-open text-white fixed h-full w-[200px] right-0 top-0 z-20 menu-shadow"
    :class="{
      hidden: !isClosing && !showSideMenuOptions,
    }" :style="{
      transform: `translateX(${offsetX}px)`,
      transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
    }">
    <ul>
      <li class="p-2 text-left" v-for="(item, index) in sideMenuItems" :key="index" @click="closeMenu">
        <a :href="item.hrefName">
          <span>{{ item.itemName }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { INavItems } from "../interface";
import { items } from "../scripts/nav_items";

//PROPS & EMITS
const { showSideMenuOptions } = defineProps<{ showSideMenuOptions: boolean }>();
const emit = defineEmits<{
  (e: "close", stts: boolean): void;
}>();

//MODELS
let isClosing = ref<boolean>(false);
const isDragging = ref<boolean>(false);
const sideMenuItems = ref<INavItems[]>(items);
const startX = ref<number>(0);
const offsetX = ref<number>(0);
const threshold = 50;

//WATCHERS
watch(
  () => showSideMenuOptions,
  (value) => {
    if (value) {
      offsetX.value = 0;
      isClosing.value = false;
    }
  }
);

//FUNCTIONS
const onTouchStart = (e: TouchEvent) => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
};

const onTouchMove = (e: TouchEvent) => {
  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX.value;

  // Só queremos considerar movimentos para a direita (positivos)
  offsetX.value = deltaX > 0 ? deltaX : 0;
};

const onTouchEnd = () => {
  isDragging.value = false;

  if (Math.abs(offsetX.value) > threshold) {
    isClosing.value = true;
    closeMenu();
  }
  offsetX.value = 0; // anima de volta se não passou do threshold
};

const closeMenu = () => {
  const el = document.querySelector("#sidemenu") as HTMLElement;
  el.classList.add("menu-closing");

  setTimeout(() => {
    emit("close", false);
    isClosing.value = false;
  }, 300);
};
</script>

<style scoped>
.menu-open {
  animation: 0.3s slide-in;
}

@keyframes slide-in {
  from {
    right: -200px;
  }
  to {
    right: 0;
  }
}

.menu-closing {
  animation: 2s slide-out;
}

@keyframes slide-out {
  from {
    right: 0px;
  }
  to {
    right: -200px;
  }
}

.menu-shadow {
  box-shadow: -20px 0px 25px rgba(0, 0, 0, 0.25);
}
</style>
