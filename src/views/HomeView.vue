<script setup>
import CustomDivider from '../components/CustomDivider.vue';
import HeroCar3 from '../components/home/HeroCar3.vue';
import LangParent from '../components/home/LangParent.vue';
import MiscelSect from '../components/home/MiscelSect.vue';
import TestimonialComp from '../components/home/TestimonialComp.vue';
import ToolsComp from '../components/home/ToolsComp.vue';
</script>
<template>
    <div class="flex min-h-screen mt-10 bg-white flex-col pt-0.5 px-0.5 space-y-14 w-full rounded-lg dark:bg-[#202122] pb-20">
         <HeroCar3/>
        <CustomDivider/>
        <LangParent/>
        <ToolsComp/>
        <CustomDivider/>
        <TestimonialComp/>
        <CustomDivider/>
        <MiscelSect/> 
    </div>
</template>