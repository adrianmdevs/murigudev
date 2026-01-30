<script setup>
import { ref } from 'vue';
//import profileImg from '@/assets/images/trialProfileImage.png'
import MessageModal from './MessageModal.vue';
import DesktopCards from './DesktopCards.vue';

const isModalOpen = ref(false);

</script>
<template>
    <div class="flex flex-col items-center justify-center w-full px-2 space-y-5 md:items-start md:space-y-5 dark: bg-inherit md:w-1/3">
        <img src="../assets/images/meNoDarpa.png"class="rounded-lg drop-shadow" alt="Murigu Gitonga">
        <div class="flex items-center justify-between w-full md:items-start md:w-full md:space-y-5 lg:space-y-0 lg:items-center md:flex-col lg:flex-row">
            <div class="flex flex-col w-1/2 md:w-full lg:w-1/2 aspect-auto items-start space-y-0.5 md:items-start">
                <p class="space-x-2 text-[17px] uppercase md:text-sm "><span class="font-semibold dark:text-gray-100">Murigu</span><span class="font-medium dark:text-gray-300">Gitonga</span></p>
                <p class="text-[15px] text-gray-500 font-medium md:text-sm dark:text-gray-400">Software Engineer</p>
            </div>
            <div class="flex items-center justify-center w-1/2 md:w-full lg:w-1/2">
                <button @click="isModalOpen = true" class="w-full px-8 py-2.5 text-gray-200 dark:text-gray-900 bg-black dark:bg-white rounded-3xl">
                    <span class="text-[17px] md:text-[17px] font-medium">Message</span>
                </button>
                <MessageModal :isOpen="isModalOpen" @close="isModalOpen = false"/>
            </div>
            <!-- <CustomDivider/> -->
            <!--Social media:-->
            <nav class="hidden w-full">
                <a href="#"><img src="../assets/images/instagram-logo-instagram-social-media-icon-free-png.png" class="w-12 h-12" alt=""></a>
                <a href="#"><img src="../assets/images/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" class="w-12 h-12" alt=""></a>
                <a href="#"><img src="../assets/icons/Twitter-icon.svg" class="w-12 h-12" alt=""></a>
            </nav>  
        </div> 
    <DesktopCards/>
    </div>

</template>