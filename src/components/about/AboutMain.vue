<script setup>
import PageHeader from '../PageHeader.vue';


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
        <div class="flex flex-col items-center justify-center space-y-12">
            <!-- <AboutCard :cards="profileCards"/> -->
            <div class="flex flex-col space-y-3 px-2.5 md:max-w-4xl">
                <img src="@/assets/images/modifiedBSCard.png" class="shadow-sm rounded-xl" alt="">
                <div class="flex flex-col space-y-2">
                    <span class="text-[21px] font-semibold dark:text-gray-50">Passionate Designer</span>
                    <p class="text-[16px] text-gray-600 dark:text-gray-200">
                        Creating passionate designs is more of a hobby than a proffesion
                        I create awesome designs that resonate with the audience and
                        make a hallmark impression
                    </p>
                </div>

            </div>
            
            <div class="flex flex-col space-y-3 px-2.5 md:max-w-4xl">
                <img src="@/assets/images/MuriguAIDarkCard2.png" class="shadow-md shadow-gray-500 rounded-2xl" alt="A design by yours truly" loading="eager">
                <div class="flex flex-col space-y-2">  
                    <span class="text-[18px] font-semibold">Computer programmer</span>
                    <p class="text-[16px] text-gray-600 dark:text-gray-200">
                        I started with PHP and after seeing the magic a few lines of code could do, I never
                        looked back. I am currently well versed with the languages aforementioned but to me languages
                        are just a tool to solve clearly elaborated systems.
                    </p>
                </div>
            </div>
            
            <div class="flex flex-col space-y-3 px-2.5 md:max-w-4xl">
                <img src="@/assets/images/MuriguAIDarkCard2.png" class="shadow-md shadow-gray-500 rounded-2xl" alt="A group of people in an office" loading="eager">
                <div class="flex flex-col space-y-1">
                    <span class="text-[18px] font-semibold">Creative Innovator</span>
                    <p class="text-[16px] text-gray-600 dark:text-gray-200">
                        I believe that software development, like any great product is 
                        a result of co-ordinated team effort. Working in close high-paced startup 
                        environment has taugh me that
                    </p>
                </div>
            </div>
        </div>
        <!--Import card components-->
        <div>

        </div>
        
    </div>
</template>