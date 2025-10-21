<script setup>
import PageHeader from '../PageHeader.vue';
</script>
<template>
    <div class="flex flex-col ps-1.5 space-y-4">
        <PageHeader page-header="About Me"/>
        <!--About Container-->
        <div class="flex flex-col items-center justify-center space-y-12">
            <!--Graphic designer-->
            <div class="flex flex-col space-y-2 px-2.5 md:max-w-4xl">
                <img src="/src/assets/images/modifiedBSCard.png" class="shadow-sm rounded-xl" alt="">
                <div class="flex flex-col space-y-2">
                    <span class="text-[21px] font-semibold dark:text-gray-50">Passionate Designer</span>
                    <p class="text-[16px] text-gray-600 dark:text-gray-200">
                        Creating passionate designs is more of a hobby than a proffesion
                        I create awesome designs that resonate with the audience and
                        make a hallmark impression
                    </p>
                </div>

            </div>
            <!--Computer programmer-->
            <div class="flex flex-col space-y-2 px-2.5 md:max-w-4xl">
                <img src="/src/assets/images/MuriguAIDarkCard2.png" class="shadow-md shadow-gray-500 rounded-2xl" alt="">
                <div class="flex flex-col space-y-2">
                    <span class="text-[18px] font-semibold">Computer programmer</span>
                    <p class="text-[16px] text-gray-600 dark:text-gray-200">
                        Creating passionate designs is more of a hobby than a proffesion
                        I create awesome designs that resonate with the audience and
                        make a hallmark impression
                    </p>
                </div>
            </div>
        </div>
        <!--Credentials container-->
        <div>

        </div>
    </div>
</template>