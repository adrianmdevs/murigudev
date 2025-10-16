<script setup>
import DesignComp from '../components/projects/DesignComp.vue';
import CustomDivider from '../components/CustomDivider.vue'
import VanillaCode from '../components/projects/VanillaCode.vue';
import FrameWorks from '../components/projects/FrameWorks.vue';

</script>
<template>
    <div class="flex min-h-screen mt-10 bg-white flex-col pt-10 space-y-10 w-full rounded-lg dark:bg-[#202122]">
        <div class="block w-3/4 pb-3 overflow-x-auto border-b border-black md:w-1/2">
            <span class="text-3xl font-bold dark:text-white">Projects</span>
        </div>
        <!--Design Comp-->
        <DesignComp/>
        <CustomDivider/>
        <VanillaCode/>
        <CustomDivider/>
        <FrameWorks/>
        
    </div>
</template>