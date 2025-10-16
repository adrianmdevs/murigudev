<script setup>
import SectHeader from '../SectHeader.vue';


</script>
<template>
    <div class="flex flex-col space-y-5">
        <SectHeader message="Testimonials"/>
        <div class="grid grid-cols-1 px-2 gap-7 lg:grid-cols-2">
            <!--Testimonial-->
            <div class="flex flex-col items-end w-full space-y-6 text-gray-800 dark:text-gray-300">
                <p class="text-end text-[15px] md:text-[18px]">
                    I worked with charles as he interned in our company
                    and he showed great initiative, absolute creativeness and
                    the ability to circumvent problems
                </p>
                <div class="flex space-x-2">
                    <img src="/src/assets/images/MeAgentFB.jpg" class="w-12 h-12 rounded-full" alt=""> 
                    <div class="flex flex-col items-start">
                        <span class="font-medium">Mukhongo Chenane</span>
                        <span>CTO, LimeFiber</span>
                    </div>
                    
                </div>
            </div>
            <!--testimonial-->
            <div class="flex flex-col items-start space-y-6 text-gray-800 dark:text-gray-300">
                <p class="text-[15px] md:text-[18px]">
                    Murigu Gitonga is that one guy in a team that will always see solutions
                    where none seem to exist. Combined with his intricate persistence, he is  
                    a force to reckon with.
                </p>
                <!--Testifier-->
                <div class="flex space-x-2">
                    <img src="/src/assets/images/MeAgentFB.jpg" class="w-12 h-12 rounded-full" alt=""> 
                    <div class="flex flex-col items-start">
                        <span class="font-medium">Opiyo Agwa</span>
                        <span>Sales Lead, AzmaSoft Kenya</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>