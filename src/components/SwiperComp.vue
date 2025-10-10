<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  <div
    class="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg"
  >
    <!-- Fading edges -->
    <div
      class="absolute inset-y-0 left-0 z-10 w-1/5 pointer-events-none bg-gradient-to-r from-white/60 via-transparent to-transparent dark:from-[#202122]"
    ></div>
    <div
      class="absolute inset-y-0 right-0 z-10 w-1/5 pointer-events-none bg-gradient-to-l from-white/60 via-transparent to-transparent dark:from-[#202122]"
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
      class="rounded-xl"
    >
      <SwiperSlide
        v-for="(slide, i) in slides"
        :key="i"
        class="relative w-full h-[70vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh] overflow-hidden flex items-center justify-center"
      >
        <img
          :src="slide.img"
          :alt="slide.title"
          class="object-cover w-full h-full transition-transform duration-[2000ms] ease-in-out hover:scale-105"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-black/40 backdrop-blur-sm"
        >
          <h2
            class="text-2xl font-extrabold tracking-wide text-white md:text-4xl drop-shadow-lg"
          >
            {{ slide.title }}
          </h2>
          <p
            class="max-w-2xl mt-3 text-base leading-relaxed text-gray-200 md:text-lg"
          >
            {{ slide.desc }}
          </p>
        </div>
      </SwiperSlide>

      <!-- Navigation arrows -->
      <div
        class="absolute z-20 -translate-y-1/2 swiper-button-prev after:hidden left-2 md:left-6 top-1/2"
      ></div>

      <div
        class="absolute z-20 -translate-y-1/2 swiper-button-next after:hidden right-2 md:right-6 top-1/2"
      ></div>
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
