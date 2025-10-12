<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const transitionName = ref("slide-left");

// route order
const routeOrder = ["/", "/about", "/project"];

let previousIndex = routeOrder.indexOf(route.path);

watch(
  () => route.fullPath,
  () => {
    const currentIndex = routeOrder.indexOf(route.path);

    if (currentIndex > previousIndex) {
      transitionName.value = "slide-left"; // Forward (Home -> About)
    } else if (currentIndex < previousIndex) {
      transitionName.value = "slide-right"; // Backward (Projects -> About)
    }

    previousIndex = currentIndex;
  },
  { immediate: true }
);

const isActive = (path) => route.path === path;

const baseLink =
  "relative transition-all duration-300 hover:text-gray-700 darK:hover:text-gray-50 after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full hover:after:opacity-100";

const activeLink =
  "text-blue-800 dark:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:w-full after:h-[2px] after:bg-black dark:after:bg-gray-50 after:opacity-100 after:-translate-x-1/2";
</script>

<template>
  <div class="min-h-screen py-4 overflow-hidden dark:bg-black dark:text-white">
    <!-- Navbar -->
    <nav
      class="sticky w-full border-b border-gray-50 top-0 z-10 text-[18px] flex items-center p-2 text-gray-800 dark:text-gray-400 bg-inherit space-x-14 md:justify-evenly"
    >
      <RouterLink to="/" :class="[baseLink, isActive('/') ? activeLink : '']">
        Home
      </RouterLink>

      <RouterLink
        to="/about"
        :class="[baseLink, isActive('/about') ? activeLink : '']"
      >
        About
      </RouterLink>

      <RouterLink
        to="/project"
        :class="[baseLink, isActive('/project') ? activeLink : '']"
      >
        Projects
      </RouterLink>
    </nav>

    <!-- Vue3 + vue-router 4-->
    <main class="relative w-full overflow-hidden">
      <RouterView v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
/* === Shared fade for all slides === */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* === Slide Left (Forward) === */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(80px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}

/* === Slide Right (Backward) === */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-80px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(80px);
}

/* Smooth fade overlay feeling */
.slide-left-enter-to,
.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
