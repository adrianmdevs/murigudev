<script setup>
import CustomDivider from '../components/CustomDivider.vue';
import HeroSect from '../components/home/HeroSect.vue';
import LangComp from '../components/home/LangComp.vue';
import MiscelSect from '../components/home/MiscelSect.vue';
import TestimonialComp from '../components/home/TestimonialComp.vue';
import SwiperComp from '../components/SwiperComp.vue';


</script>
<template>
    <div class="flex min-h-screen bg-white flex-col pt-10 space-y-5 w-full rounded-lg dark:bg-[#202122]">
        <SwiperComp/>
        <!-- <HeroSect/> -->
        <CustomDivider/>
        <LangComp/>
        <CustomDivider/>
        <TestimonialComp/>
        <CustomDivider/>
        <MiscelSect/>

        
    </div>
</template>