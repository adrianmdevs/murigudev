<script setup>
import SectHeader from '../SectHeader.vue';
//import Opiyo from '@/assets/images/opiyo.png';
//import ken from '@/assets/images/ken.png'

</script>
<template>
    <div class="flex flex-col space-y-5">
        <SectHeader message="Testimonials"/>
        <div class="grid grid-cols-1 px-2 gap-7 lg:grid-cols-2 lg:gap-10">
            <!--testimonial-->
            <div class="flex flex-col items-start w-full space-y-6 leading-relaxed tracking-normal text-gray-800 dark:text-gray-300">
                <p class="text-[13px] md:text-[15px] text-gray-500">
                    I was Murigu's immediate supervisor as he interned in our company
                    He exhibited peristence,superior inter and intrapersonal skills across cross-functional teams. He inspired the different teams he worked with with his infectous positive approach to problems.
                </p>
                <div class="flex items-center space-x-3">
                    <img src="/src/assets/images/MeAgentFB.jpg" class="w-12 h-12 rounded-full" alt=""> 
                    <div class="flex flex-col items-start text-[13px] md:[text-15px]">
                        <span class="font-medium">Mukhongo Chenane</span>
                        <p>CTO, LimeFiber</p>
                    </div>    
                </div>
            </div>
            <!--testimonial 2-->
            <div class="flex flex-col items-end space-y-6 leading-relaxed text-gray-800 md:items-start dark:text-gray-300">
                <p class="text-[13px] text-gray-500 md:text-[15px] text-end lg:text-start">
                   Charles has been a good friend over the years. I worked with
                   him in university where we first started learning programming in general.
                   He excelled at coming up with solutions where none seemed to exist.
                </p>
                <!--Testifier-->
                <div class="flex items-end space-x-5 lg:items-start">  
                    <div class="flex flex-col items-end lg:items-start text-[13px] md:text-[15px]">
                        <span class="font-medium dark:text-gray-100">Opiyo Agwa</span>
                        <span>Sales Lead, AzmaSoft Kenya</span>
                    </div>
                    <img src="/src/assets/images/opiyo.png" class="w-12 h-12 rounded-full lg:order-first" alt="">     
                </div>
            </div>
            <!--Testimonial 3-->
            <div class="flex flex-col items-start space-y-6 text-gray-800 dark:text-gray-300">
                <p class="text-[13px] text-gray-500 md:text-[15px]">
                    I was paired with charles when he entered the software development department 
                    during his internship. What was striking about him as an intern was that he never saw 
                    bugs as challenges, rather, he embraced them as part of his learning journey. Not once did 
                    I see him cower when solving bugs. He is always learning.
                </p>
                <!--Testifier-->
                <div class="flex space-x-2">
                    <img src="/src/assets/images/Ken.png" class="w-12 h-12 rounded-full" alt=""> 
                    <div class="flex flex-col items-start text-[13px] md:text-[15px]">
                        <span class="font-semibold">Kahuthu Ngare</span>
                        <span class="font-normal">Software Engineer, LimeFiber</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>