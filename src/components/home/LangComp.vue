<script setup>
import SectHeader from '../SectHeader.vue';


</script>
<template>
    <div class="flex flex-col space-y-4">
        <SectHeader message="Software Development"/>        
        <div class="grid w-full grid-cols-1 px-2 gap-9 md:grid-cols-2 lg:grid-cols-3">
            <!--Design-->
            <div class="w-full p-3 border border-gray-300 rounded-lg">
                <span>Graphic & Web Design</span>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/figma-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>Figma</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/bitbucket.svg" class="w-12 h-12" alt="">
                        <span>Inkscape</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/anaconda-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>GIMP</span>
                    </div>

                </div>

            </div>
            <!--Frontend-->
            <div class="w-full p-3 border border-gray-300 rounded-lg">
                <span>Front-End</span>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/html-5-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>HTML 5</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/css-3-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>CSS 3</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/javascript-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>Javascript</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/typescript-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>Typescript</span>
                    </div>
                </div>
            </div>
            <!--BackEnd-->
            <div class="w-full p-3 border border-gray-300 rounded-lg">
                <span>Back-End</span>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/php.svg" class="w-12 h-12" alt="">
                        <span>PHP</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/python.svg" class="w-12 h-12" alt="">
                        <span>Python</span>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <img src="/src/assets/icons/mysql-svgrepo-com.svg" class="w-12 h-12" alt="">
                        <span>MySQL</span>
                    </div>
                    

                </div>

            </div>
            
        </div>
    </div>
</template>