<script setup>
import PageHeader from '../PageHeader.vue';

import progImage from "@/assets/images/compProgrammer.png"

// import CardOne from '@/assets/images/MuriguAIDarkCard2.png'
// import CardTwo from '@/assets/images/servers.jpeg'
// import cardThree from '@/assets/images/modifiedBSCard.png'
// import AboutCard from './AboutCard.vue';


// //Define the cards data
// const profileCards = [
//   {
//     imageSrc: CardOne,
//     heading: 'Computer Programmer',
//     description:
//       'I started with PHP and after seeing the magic a few lines of code could do, I never looked back. Languages are just tools to solve clearly elaborated systems.',
//   },
//   {
//     imageSrc: CardTwo,
//     heading: 'AI & Systems Engineer',
//     description:
//       'My interests extend into AI, systems architecture, and defense technology innovations focused on advanced autonomy.',
//   },
//   {
//     imageSrc: CardThree,
//     heading: 'Full Stack Developer',
//     description:
//       'From backend logic to stunning front-end interfaces, I enjoy bringing systems to life through clean, functional code.',
//   },
// ];
</script>
<template>
    <div class="flex flex-col ps-1.5 space-y-4">
        <PageHeader page-header="About Me"/>
        <!--About Container-->
        <div class="flex flex-col items-center justify-center pb-20 space-y-12">
            <!-- <AboutCard :cards="profileCards"/> -->
            <div class="flex flex-col space-y-5 px-2.5 md:max-w-screen-sm">
                <img src="@/assets/images/modifiedBSCard.png" class="shadow-sm rounded-xl" alt="my design" loading="lazy">
                <div class="flex flex-col space-y-1 text-gray-500 dark:text-gray-300">
                    <span class="text-[17px] md:text-[19px] font-semibold text-gray-700 dark:text-gray-200">Passionate Designer</span>
                    <p class="text-[15px] md:text-[17px] leading-relaxed text-gray-500 dark:text-gray-300">
                        Creating passionate designs is more of a hobby than a proffesion
                        I create awesome designs that resonate with the audience and
                        make a hallmark impression
                    </p>
                </div>

            </div>
            
            <div class="flex flex-col space-y-5 px-2.5 md:max-w-screen-sm">
                <img src="@/assets/images/compProgrammer.png" class="shadow-md shadow-gray-500 rounded-2xl" alt="A program snippet by me" loading="lazy">
                <div class="flex flex-col space-y-1">  
                    <span class="text-[17px] md:text-[19px] font-semibold text-gray-700 dark:text-gray-200">Computer programmer</span>
                    <p class="text-[15px] leading-relaxed md:text-[17px] text-gray-500 dark:text-gray-300">
                        I started with PHP and after seeing the magic a few lines of code could do, I never
                        looked back. I am currently well versed with the languages aforementioned but to me languages
                        are just a tool to solve clearly elaborated systems.
                    </p>
                </div>
            </div>

            <div class="flex flex-col space-y-3 px-2.5 md:max-w-screen-sm">
                <img src="@/assets/images/MuriguAIDarkCard2.png" class="shadow-md shadow-gray-500 rounded-2xl" alt="AI" loading="lazy">
                <div class="flex flex-col space-y-1">
                    <span class="text-[17px] md:text-[19px] font-semibold text-gray-700 dark:text-gray-200">Artificial Intelligence ethusiasist</span>
                    <p class="text-[15px] md:text-[17px] text-gray-500 dark:text-gray-300">
                        AI speeds up the software development cycles through automated testing, giving
                        developers enough time to refine architecture and orchestrate infrastructures as 
                        a critical compononent of software driven products.
                    </p>
                </div>
            </div>
        </div>
        <!--Import card components-->
        <div>

        </div>
        
    </div>
</template>