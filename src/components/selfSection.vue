<script setup>
import { ref } from 'vue';
import MessageModal from './MessageModal.vue';
const isModalOpen = ref(false);

</script>
<template>
    <div class="flex flex-col items-center justify-center w-full px-2 space-y-5 md:items-start md:space-y-5 dark: bg-inherit md:w-1/3">
        <img src="../assets/images/introImage.png"class="w-full rounded-lg drop-shadow" alt="">
        <div class="flex items-center justify-between w-full">
            <div class="flex flex-col w-1/2 items-start space-y-0.5 md:items-start">
                <p class="space-x-2 text-[14px] uppercase md:text-sm dark:text-gray-100"><span class="font-semibold">Murigu</span><span class="font-medium">Gitonga</span></p>
                <p class="text-[13px] text-gray-800 md:text-sm dark:text-gray-400">Software Engineer</p>
            </div>
            <div class="flex items-center justify-center w-1/2">
                <button @click="isModalOpen = true" class="w-full px-8 py-2.5 text-gray-200 bg-green-800 rounded-xl">
                    <span class="text-[15px]">Message</span>
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
    </div>
    <!-- <CustomDivider/> -->
</template>