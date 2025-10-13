<script setup>
import FooterComp from './components/FooterComp.vue';
import HeaderComponent from './components/HeaderComponent.vue'
import MainSection from './components/MainSection.vue';
import SelfSection from './components/selfSection.vue';
</script>
<template>
  <div class="block bg-slate-200 dark:bg-[#010101] transition-all ease-in-out duration-300">
    <div class="flex flex-col min-h-screen pt-5 space-y-10 md:mx-8 lg:container lg:mx-auto">
      <headerComponent/>
      <div class="relative flex flex-col items-start space-y-8 md:flex-row">
        <SelfSection/>
        <div class="relative block w-full px-3 rounded-xl">
           <MainSection/>
        </div>
      </div>
      <FooterComp/>
    </div>
  </div>
  
      
</template>
