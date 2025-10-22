<script setup>
import { useRoute } from "vue-router";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const route = useRoute();
const transitionName = ref("slide-left");
const showExitModal = ref(false);

// route order
const routeOrder = ["/", "/about", "/project"];

let previousIndex = routeOrder.indexOf(route.path);
let lastNavigationTime = Date.now();
let isBackNavigation = false;

//detect browser back/forward
window.addEventListener("popstate", () => {
  isBackNavigation = true;
  lastNavigationTime = Date.now();
});

watch(
  () => route.fullPath,
  () => {
    const currentIndex = routeOrder.indexOf(route.path);

    if (isBackNavigation && Date.now() - lastNavigationTime < 300) {
      transitionName.value = "slide-right";
      isBackNavigation = false;
    } else {
      if (currentIndex > previousIndex) transitionName.value = "slide-left";
      else if (currentIndex < previousIndex) transitionName.value = "slide-right";
    }

    previousIndex = currentIndex;
  },
  { immediate: true }
);

onMounted(() => {
  window.addEventListener("popstate", handlePopState);
  document.body.style.overflow = "auto";
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", handlePopState);
});

function handlePopState() {
  if (route.path === "/") {
    showExitModal.value = true;
    document.body.style.overflow = "hidden"; // disable background scroll
    history.pushState(null, "", "/"); // prevent immediate leave
  }
}

// === Exit Handling ===
function confirmExit() {
  showExitModal.value = false;
  document.body.style.overflow = "auto";

  // Try to close the tab (works in PWAs / WebViews)
  window.close();

  // fallback: if still open, redirect to external site
  setTimeout(() => {
    if (!document.hidden) {
      window.location.href = "https://www.google.com"; //> change external redirect to chrome homepage
    }
  }, 300);
}

function cancelExit() {
  showExitModal.value = false;
  document.body.style.overflow = "auto";
  history.pushState(null, "", "/");
}

const isActive = path => route.path === path;

const baseLink =
  "relative transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-0 after:h-[2px] " +
  "after:bg-blue-600 dark:after:bg-blue-400 after:opacity-0 after:transition-all after:duration-300 " +
  "hover:after:w-full hover:after:opacity-100 after:rounded";
  // i'm dead sure this caught you off-guard ;)

const activeLink =
  "text-blue-600 dark:text-blue-400 " +
  "after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] " +
  "after:bg-blue-600 dark:after:bg-blue-400 after:opacity-100 after:rounded";


</script>

<template>
  <div class="relative min-h-screen overflow-hidden dark:bg-black dark:text-white">
    <!-- Navbar -->
<nav
   class="sticky top-0 z-20 w-full border-b border-gray-300 dark:border-gray-700 text-[18px] flex items-center p-2 text-gray-800 dark:text-gray-300 bg-inherit space-x-14 md:justify-evenly"
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

   

    <!-- Page Transitions -->
    <main class="relative w-full overflow-hidden">
      <RouterView v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <!-- Exit Confirmation Modal -->
    <transition name="fade">
      <div
        v-if="showExitModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      >
        <div
          class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-sm w-[90%] text-center border border-gray-200 dark:border-gray-700"
        >
          <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Leave Site?
          </h2>
          <p class="mb-6 text-gray-600 dark:text-gray-300">
            Are you sure you want to exit this site?
          </p>

          <div class="flex justify-center gap-4">
            <button
              @click="confirmExit"
              class="px-4 py-2 text-white transition bg-red-600 rounded-lg hover:bg-red-700"
            >
              OK
            </button>
            <button
              @click="cancelExit"
              class="px-4 py-2 text-gray-900 transition bg-gray-300 rounded-lg hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Page slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(80px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-80px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
.slide-left-enter-to,
.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Modal fade-in */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
