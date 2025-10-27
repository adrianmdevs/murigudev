<script setup>
import SectHeader from '../SectHeader.vue';
import ToolsnTech from '../ToolsnTech.vue';


</script>
<template>
    <div class="flex flex-col space-y-5">
        <SectHeader message="Software Development"/>        
        <div class="grid w-full grid-cols-1 px-2 gap-9 md:grid-cols-2 lg:grid-cols-3">
            <!--Design-->
            <div class="w-full p-3 space-y-3 rounded-lg shadow-md">
                <span class="font-medium text-gray-600 dark:text-gray-400">Graphic & Web Design</span>
                <div class="grid grid-cols-3 md:grid-cols-2">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/figma-svgrepo-com.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">Figma</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/bitbucket.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">Inkscape</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/anaconda-svgrepo-com.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">GIMP</span>
                    </div>

                </div>

            </div>
            <!--Frontend-->
            <div class="w-full p-3 space-y-3 rounded-lg shadow-md">
                <span class="font-medium text-gray-600 dark:text-gray-400">Frontend Development</span><!--Development type(frontend)-->
                <div class="grid grid-cols-3 md:grid-cols-2">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/html-5-svgrepo-com.svg" class="w-10 h-10" alt=""> <!--Language icon(HTML)-->
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">HTML 5</span> <!--Language name-->
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/css-3-svgrepo-com.svg" class="w-10 h-10" alt=""><!--Language icon(CSS)-->
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">CSS 3</span><!--Language name-->
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/javascript-svgrepo-com.svg" class="w-10 h-10" alt=""><!--Language icon(Javascript)-->
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">Javascript</span><!--Language name-->
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/typescript-svgrepo-com.svg" class="w-10 h-10" alt=""><!--Language icon(Typescript)-->
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">Typescript</span><!--Language name-->
                    </div>
                </div>
            </div>
            <!--BackEnd-->
            <div class="w-full p-3 space-y-3 rounded-lg shadow-md">
                <span class="font-medium text-gray-600 dark:text-gray-400">Backend Development</span>
                <div class="grid w-full grid-cols-3">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/php.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">PHP</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/python.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">Python</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/mysql-svgrepo-com.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300">MySQL</span>
                    </div>
                    

                </div>

            </div>
            <!--Frameworks-->
            <div class="w-full p-3 space-y-3 rounded-lg shadow-md bg-gradient-to-br from-green-950 via-red-950 to-violet-950 text-gray-50">
                <span class="font-medium text-gray-200">Frameworks</span>
                <div class="grid w-full grid-cols-3 md:grid-cols-2">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/tailwindcss-icon.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-200">Tailwindcss</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/vue-vuejs-javascript-js-framework.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-200">Vue3.js</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/laravel.svg" class="w-10 h-10" alt="">
                        <span class="text-[15px] md:text-[16px] text-gray-200">Laravel</span>
                    </div>
                </div>
            </div>
            <!--Tools & Technologies-->
            <ToolsnTech/>
        </div>
    </div>
</template>