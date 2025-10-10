<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import MainSection from './components/MainSection.vue';
import SelfSection from './components/selfSection.vue';
//import NavBar from './components/NavBar.vue';

</script>
<template>
  <div class="block bg-slate-200 dark:bg-[#010101] transition-all ease-in-out duration-300">
    <div class="flex flex-col min-h-screen pt-5 space-y-6 md:container md:mx-auto">
      <headerComponent/>
      <div class="flex flex-col items-start space-y-8 md:flex-row">
        <SelfSection/>
        <MainSection/>
      </div>
    </div>
  </div>
  
      
</template>
