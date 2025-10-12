<script setup>
import CustomDivider from '../components/CustomDivider.vue';
//import HeroSect from '../components/home/HeroSect.vue';
import LangComp from '../components/home/LangComp.vue';
import MiscelSect from '../components/home/MiscelSect.vue';
import TestimonialComp from '../components/home/TestimonialComp.vue';
import SwiperComp from '../components/SwiperComp.vue';


</script>
<template>
    <div class="flex min-h-screen mt-10 bg-white flex-col pt-0.5 px-0.5 space-y-14 pb-4 w-full rounded-lg dark:bg-[#202122]">
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