<script setup>
//import Vue3Marquee  from 'vue3-marquee';

import behanceIcon from '@/assets/images/Git.webp'
import firebase from '@/assets/icons/firebase-svgrepo-com.svg'
import gitIcon from '@/assets/icons/git.svg'
import githubIcon from '@/assets/icons/github.svg'
import gitlabIcon from '@/assets/icons/gitlab-svgrepo-com.svg'
const items = [
    { name : 'Behance', img: behanceIcon},
    { name : 'Firebase', img: firebase},
    { name : 'Git', img: gitIcon},
    { name : 'Github', img: githubIcon},
    { name : 'Gitlab', img: gitlabIcon},
    //{ name : 'Behance', img: behanceIcon},
]
</script>
<template>
    <div>
        <div>
            <span class="font-semibold">Tools and Services</span>
        </div>
    <div class="w-full py-8 shadow-sm bg-inherit">
        <Vue3Marquee :speed="50" :direction="left" :gradient="false" pause-on-hover="true" class="flex flex-col space-y-5">
            <div v-for="(item, i) in items"
                :key="i" 
                class="flex flex-col items-center justify-center flex-shrink-0 w-40 space-y-3"
                >
                <img :src="item.img" :alt="item.name" class="w-12 h-auto shadow-sm rounded-xl">
                <p class="text-center text-[17px]">{{ item.name }}</p>
            </div>
        </Vue3Marquee>
    </div>
    </div>
   
</template>