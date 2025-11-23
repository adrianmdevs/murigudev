<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

import img1 from "@/assets/images/UIIXTransp.webp";
import img2 from "@/assets/images/ArchTransparent.webp";
import img3 from "@/assets/images/servers.jpeg";
import img4 from "@/assets/images/ArchBasicFilled.webp";
import img5 from "@/assets/images/AsyncCodeUpdated.png";

const originalSlides = [
  {
    image: img1,
    title: "User-Empathetic Interfaces",
    description: "Interfaces that emotionally connect with the end-users",
  },
  {
    image: img5,
    title: "Component-Based Approach",
    description: "Separated concerns for a comprehensive logical pictures",
  },
  {
    image: img3,
    title: "Scalable Architectures",
    description: "Architectures that gracefully scale with complexity",
  },
  {
    image: img2,
    title: "AI-Augmented Workflows",
    description: "Embracing AI as a force multiplier and a pair developer.",
  },
  {
    image: img4,
    title: "Serveless Architectures",
    description:
      "Headless and serveless architectures as the modern currency of development",
  },
];

// Clone first & last for seamless infinite loop
const slides = ref([]);
const currentSlide = ref(1);
let transitioning = ref(false);
let autoSlideInterval = null;

// Swipe support
let startX = 0;
let endX = 0;
const swipeThreshold = 50; // minimum px for swipe

onMounted(() => {
  slides.value = [
    originalSlides[originalSlides.length - 1], // clone last
    ...originalSlides,
    originalSlides[0], // clone first
  ];

  startAutoSlide();

  const carousel = document.querySelector(".group");
  carousel.addEventListener("mouseenter", pauseAutoSlide);
  carousel.addEventListener("mouseleave", resumeAutoSlide);

  // Touch events
  carousel.addEventListener("touchstart", onTouchStart);
  carousel.addEventListener("touchmove", onTouchMove);
  carousel.addEventListener("touchend", onTouchEnd);
});

onUnmounted(() => {
  clearInterval(autoSlideInterval);
});

function nextSlide() {
  if (transitioning.value) return;
  transitioning.value = true;
  currentSlide.value++;
  handleCloneTeleport();
}

function prevSlide() {
  if (transitioning.value) return;
  transitioning.value = true;
  currentSlide.value--;
  handleCloneTeleport();
}

function goToSlide(index) {
  if (transitioning.value) return;
  transitioning.value = true;
  currentSlide.value = index + 1;
  handleCloneTeleport();
}

// Clone teleport for infinite looping
function handleCloneTeleport() {
  setTimeout(async () => {
    const track = document.querySelector(".carousel-track");
    track.style.transition = "";
    if (currentSlide.value === slides.value.length - 1) {
      track.style.transition = "none";
      currentSlide.value = 1;
      await nextTick();
      setTimeout(() => (track.style.transition = ""), 50);
    }
    if (currentSlide.value === 0) {
      track.style.transition = "none";
      currentSlide.value = originalSlides.length;
      await nextTick();
      setTimeout(() => (track.style.transition = ""), 50);
    }
    transitioning.value = false;
  }, 700);
}

// Auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => nextSlide(), 5000);
}
function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}
function resumeAutoSlide() {
  startAutoSlide();
}

// Swipe Handlers
function onTouchStart(e) {
  startX = e.touches[0].clientX;
}
function onTouchMove(e) {
  endX = e.touches[0].clientX;
}
function onTouchEnd() {
  const diff = endX - startX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff < 0) nextSlide(); // swipe left → next
    if (diff > 0) prevSlide(); // swipe right → prev
  }
  startX = 0;
  endX = 0;
}
</script>

<template>
  <div
    class="relative w-full overflow-hidden md:max-w-screen-sm lg:max-w-screen-lg group"
  >
    <!-- Slides -->
    <div
      class="flex carousel-track transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="relative flex-shrink-0 w-full"
      >
        <img :src="slide.image" :alt="slide.title" class="object-cover w-full" />
        <div
          class="absolute flex flex-col items-start justify-center p-6 leading-relaxed rounded-lg text-start bg-black/50 bottom-10 left-5 right-4 backdrop-blur-sm"
        >
          <h2 class="mb-2 text-lg font-semibold text-gray-100 md:text-xl">
            {{ slide.title }}
          </h2>
          <p class="max-w-xl text-sm text-gray-200">
            {{ slide.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <button
      @click="prevSlide"
      class="absolute p-2 transition-opacity duration-500 ease-in-out -translate-y-1/2 rounded-full shadow-md opacity-0 top-1/2 left-4 bg-white/70 dark:bg-gray-900/70 group-hover:opacity-100"
    >
      <svg
        class="w-5 h-5 text-gray-800 dark:text-gray-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute p-2 transition-opacity duration-500 ease-in-out -translate-y-1/2 rounded-full shadow-md opacity-0 top-1/2 right-4 bg-white/70 dark:bg-gray-900/70 group-hover:opacity-100"
    >
      <svg
        class="w-5 h-5 text-gray-800 dark:text-gray-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <!-- Indicators -->
    <div
      class="absolute flex space-x-3 transform -translate-x-1/2 bottom-6 left-1/2"
    >
      <span
        v-for="(slide, index) in originalSlides"
        :key="index"
        @click="goToSlide(index)"
        class="cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full"
        :class="[
          currentSlide === index + 1
            ? 'w-6 h-2 bg-gray-800 dark:bg-gray-50'
            : 'w-2 h-2 bg-gray-400 dark:bg-gray-500',
        ]"
      ></span>
    </div>
  </div>
</template>
