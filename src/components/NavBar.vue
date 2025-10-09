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
import { useRoute } from "vue-router";

const route = useRoute();
const isActive = (path) => route.path === path;
</script>

<template>
  <div class="min-h-screen overflow-hidden dark:bg-black dark:text-white">
    <!-- Navbar -->
    <nav
      class="sticky top-0 z-10 flex items-center w-full px-2 py-5 text-gray-300 bg-black space-x-14 md:justify-evenly"
    >
      <!-- Home -->
      <RouterLink
        to="/"
        :class="[
          'relative transition-all duration-300 hover:text-white after:content-[\'\'] after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full hover:after:opacity-100',
          isActive('/') ? 'text-white after:w-full after:opacity-100' : ''
        ]"
      >
        Home
      </RouterLink>

      <!-- About -->
      <RouterLink
        to="/about"
        :class="[
          'relative transition-all duration-300 hover:text-white after:content-[\'\'] after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full hover:after:opacity-100',
          isActive('/about') ? 'text-white after:w-full after:opacity-100' : ''
        ]"
      >
        About
      </RouterLink>

      <!-- Projects -->
      <RouterLink
        to="/project"
        :class="[
          'relative transition-all duration-300 hover:text-white after:content-[\'\'] after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:opacity-0 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full hover:after:opacity-100',
          isActive('/project') ? 'text-white after:w-full after:opacity-100' : ''
        ]"
      >
        Projects
      </RouterLink>
    </nav>

    <!-- Main content with slide transition -->
    <main class="relative overflow-hidden">
      <Transition name="slide" mode="out-in">
        <RouterView :key="route.fullPath" />
      </Transition>
    </main>
  </div>
</template>

<style scoped>
/* Slide transition animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>

