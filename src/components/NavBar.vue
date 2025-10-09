<!-- <template>
    <nav class="sticky top-0 z-50 flex items-center w-full px-2 py-5 space-x-14 md:items-start md:justify-evenly dark:bg-inherit dark:text-white dark:bg-black">
        <RouterLink to="/" class="relative transition-colors hover:text-white" active-class="text-white after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white"
        exact>Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Projects</RouterLink>
    </nav>
  <RouterView/>
</template> -->

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const router = useRouter();

const transitionName = ref("slide-left"); // default animation direction

// Keep track of navigation history index
let previousDepth = 0;

watch(
  () => route.fullPath,
  () => {
    const currentDepth = route.fullPath.split("/").filter(Boolean).length;

    // If going deeper → slide left, if going back → slide right
    transitionName.value =
      currentDepth > previousDepth ? "slide-left" : "slide-right";

    previousDepth = currentDepth;
  },
  { immediate: true }
);

const isActive = (path) => route.path === path;

// Reusable classes
const baseLink =
  "relative transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full hover:after:opacity-100";

const activeLink =
  "text-white after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white after:opacity-100 after:-translate-x-1/2";
</script>

<template>
  <div class="min-h-screen overflow-hidden dark:bg-black dark:text-white">
    <!-- Navbar -->
    <nav
      class="sticky top-0 z-50 flex items-center w-full px-2 py-5 text-gray-300 bg-black space-x-14 md:justify-evenly"
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

    <!-- Main content with directional slide transition -->
    <main class="relative overflow-hidden">
      <Transition :name="transitionName" mode="out-in">
        <RouterView :key="route.fullPath" />
      </Transition>
    </main>
  </div>
</template>

<style scoped>
/* === Slide Left === */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.45s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* === Slide Right === */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.45s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>


