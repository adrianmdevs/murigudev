<script setup>
import SocialLink from './SocialLink.vue';

import facebook from '@/assets/icons/facebook-svgrepo-com.svg'
import twitter from '@/assets/icons/icons8-x-50.png'
import instagram from '@/assets/icons/icons8-instagram-50.png'

import linkedIn from '@/assets/icons/icons8-linkedin.svg'
import gmail from '@/assets/icons/icons8-gmail.svg'
import discord from '@/assets/icons/icons8-discord.svg'
</script>

<template>
    <footer class="block w-full px-2">
        <div class="flex flex-col space-y-3">
            <div class="flex items-center text-[18px] justify-between w-full pb-3 border-b border-black dark:border-green-500 dark:text-gray-200">
                <span>Blog</span>
                <img src="../assets/icons/navigation-arrow-arrows-direction-right-icon.svg" alt="">
            </div>
            <div class="flex justify-between w-full dark:text-gray-200">
                <!--Socials-->
                <nav class="flex flex-col space-y-4">
                    <SocialLink 
                        href="https://facebook.com"
                        :icon="facebook"
                        label="Facebook"
                        tooltip="Check me out on facebook"
                    />
                    <!--Twitter-->
                     <SocialLink 
                        href="https://twitter.com"
                        :icon="twitter"
                        label="X(twitter)"
                        tooltip="Follow me on twitter"
                    />
                    <!--Instagram-->
                    <SocialLink 
                        href="https://facebook.com"
                        :icon="instagram"
                        label="Instagram"
                        tooltip="Check out my insta!"
                    />
                </nav>
                <div class="flex items-center justify-center">
                    <img src="@/assets/images/murigu.png" class="h-12 aspect-auto" alt="">
                </div> 
                <nav class="flex flex-col space-y-4 dark:text-gray-200">
                     <SocialLink 
                        href="https://facebook.com"
                        :icon="linkedIn"
                        label="linkedIn"
                        tooltip="Check me out on LinkedIn"
                    />
                    <!--Gmail-->
                    <SocialLink 
                        href="https://facebook.com"
                        :icon="gmail"
                        label="gmail"
                        tooltip="Send me an gmail"
                    />
                    <!--Discord-->
                     <SocialLink 
                        href="https://facebook.com"
                        :icon="discord"
                        label="Discord"
                        tooltip="Check out my discord server"
                    />
                </nav>
            </div>
            <div class="flex justify-center mx-12 border-t border-black dark:border-green-500 border-x rounded-t-xl dark:text-gray-100">
                <div class="flex flex-col items-center py-2 space-y-1 text-xs text-gray-600 dark:text-gray-300">
                    <p>Powered by Vue3, Tailwind and Strapi</p>
                    <p>Murigu Gitonga 2025</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>