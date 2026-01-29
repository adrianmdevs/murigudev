<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useThemeStore } from "@/stores/themeStore";

const theme = useThemeStore();

const opacity = ref(1);  
const threshold = 800; // number of pixels to reach opacity 0

const animating = ref(false);

function switchTheme() {
  animating.value = true;
  theme.toggleTheme();
  setTimeout(() => (animating.value = false), 300);
}

function handleScroll() {
  const y = window.scrollY;
  const fade = Math.max(0, 1 - y / threshold);
  opacity.value = fade;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header
    class="
      fixed top-0 left-0 w-full px-4 py-4 rounded-b-lg mb-20 md:py-0 z-50
      md:rounded-lg border-b bg-gray-200 dark:bg-[#101011]
      shadow-sm dark:border-gray-700 border-gray-300
      transition-all duration-150 pointer-events-auto
    "
    :style="{ opacity: opacity }"
  >
    <div class="flex flex-row items-center justify-between w-full lg:max-w-6xl lg:container lg:mx-auto">
      <img
        src="@/assets/images/murigu.png"
        class="w-32 md:w-40 lg:w-72"
        alt="Murigu label"
      />

      <button
        @click="switchTheme"
        class="relative flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 border focus:outline-none hover:scale-110 active:scale-95"
        :class="{ 'animate-spin': animating }"
      >
        <!-- DARK ICON -->
        <span
          v-if="theme.isDark"
          class="absolute transition-opacity duration-300"
          :class="{ 'opacity-0': animating }"
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fefefe">
            <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
        </svg>
          
        </span>

        <!-- LIGHT ICON -->
        <span
          v-else
          class="absolute transition-opacity duration-300"
          :class="{ 'opacity-0': animating }"
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
        </svg>
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 0.3s linear;
}
</style>
