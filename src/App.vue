<script setup>
import FooterComp from './components/FooterComp.vue';
import HeaderComponent from './components/HeaderComponent.vue'
import ContentSection from './components/ContentSection.vue'
import SelfSection from './components/selfSection.vue';
</script>
<template>
  <div class="block bg-gray-200/40 dark:bg-[#010101] transition-all ease-in-out duration-300">
    <div class="relative flex flex-col items-center justify-center min-h-screen space-y-20 md:pt-5 md:space-y-16 md:mx-8 lg:max-w-6xl lg:container lg:mx-auto">
      <headerComponent/>
      <div class="relative flex flex-col items-start w-full space-y-8 mt-9 md:flex-row md:justify-center">
        <SelfSection/>
        <div class="block w-full px-3 overflow-hidden -pt-7 rounded-xl">
            <ContentSection/>
        </div>
      </div>
      <FooterComp/>
    </div>
  </div>     
</template>
