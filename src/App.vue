<script setup>
import FooterComp from './components/FooterComp.vue';
import HeaderComponent from './components/HeaderComponent.vue'
import ContentSection from './components/ContentSection.vue'
import SelfSection from './components/selfSection.vue';
</script>
<template>
  <div class="block bg-slate-200 dark:bg-[#010101] transition-all ease-in-out duration-300">
    <div class="flex flex-col items-center justify-center min-h-screen space-y-10 md:pt-5 md:space-y-16 md:mx-8 lg:max-w-6xl lg:container lg:mx-auto">
      <headerComponent/>
      <div class="relative flex flex-col items-start w-full space-y-8 md:flex-row md:justify-center">
        <SelfSection/>
        <div class="relative block w-full px-3 overflow-hidden rounded-xl">
            <ContentSection/>
        </div>
      </div>
      <FooterComp/>
    </div>
  </div>
  
      
</template>
