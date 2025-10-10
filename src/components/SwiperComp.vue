<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your images
import img1 from "../assets/images/aerospaceProfile.png";
import img2 from "../assets/images/hero2Defence.png";
import img3 from "../assets/images/Drone.jpeg";

const slides = [
  {
    img: img1,
    title: "Cutting-edge Innovation",
    desc: "Discover the latest breakthroughs in modern tech.",
  },
  {
    img: img2,
    title: "Powerful Performance",
    desc: "Experience seamless power in every interaction.",
  },
  {
    img: img3,
    title: "Intelligent Design",
    desc: "Where creativity meets precision and purpose.",
  },
];
</script>

<template>
  <div class="relative w-full md:max-w-3xl">
    <!-- Fading edges -->
    <div
      class="absolute inset-y-0 left-0 z-10 w-1/4 pointer-events-none bg-gradient-to-r from-white/50 via-transparent to-transparent dark:from-gray-900"
    ></div>
    <div
      class="absolute inset-y-0 right-0 z-10 w-1/4 pointer-events-none bg-gradient-to-l from-white/50 via-transparent to-transparent dark:from-gray-900"
    ></div>

    <!-- Swiper Carousel -->
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :speed="1000"
      pagination
      navigation
      class="rounded-none shadow-2xl"
    >
      <SwiperSlide
        v-for="(slide, i) in slides"
        :key="i"
        class="relative h-auto overflow-hidden rounded-none w-96"
      >
        <img
          :src="slide.img"
          :alt="slide.title"
          class="object-cover w-full h-full rounded-none transition-transform duration-[2000ms] ease-in-out hover:scale-105"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/40 backdrop-blur-sm rounded-2xl"
        >
          <h2
            class="text-2xl font-extrabold tracking-wide text-white md:text-4xl drop-shadow-lg"
          >
            {{ slide.title }}
          </h2>
          <p
            class="max-w-lg mt-3 text-base leading-relaxed text-gray-200 md:text-lg"
          >
            {{ slide.desc }}
          </p>
        </div>
      </SwiperSlide>

      <!-- Navigation arrows -->
      <div
        class="absolute z-20 -translate-y-1/2 swiper-button-prev after:hidden left-3 md:left-6 top-1/2"
      >
        <!-- <button
          class="p-3 transition-all duration-300 rounded-full shadow-md md:p-4 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-800 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button> -->
      </div>

      <div
        class="absolute z-20 -translate-y-1/2 swiper-button-next after:hidden right-3 md:right-6 top-1/2"
      >
        <!-- <button
          class="p-3 transition-all duration-300 rounded-full shadow-md md:p-4 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-800 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button> -->
      </div>
    </Swiper>
  </div>
</template>

<style scoped>
/* Modern pagination bullets */
.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.7);
  opacity: 1;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  margin: 0 6px !important;
  transition: all 0.4s ease;
}

.swiper-pagination-bullet-active {
  background: #2563eb; /* Tailwind blue-600 */
  width: 26px;
  height: 10px;
  border-radius: 9999px;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
}

/* Hide default Swiper arrow icons */
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
</style>
