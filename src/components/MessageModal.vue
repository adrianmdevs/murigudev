<script setup>
import { defineProps } from 'vue';

    defineProps({
        isOpen :{
            type : Boolean,
            required : true
        }
    })
</script>
<template>
    <div v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    >
        <div class="relative flex flex-col h-auto p-4 space-y-8 text-white bg-white border rounded-lg dark:bg-secondary-dark w-72 md:w-96 dark:border-gray-300">
            <!--Close button-->
            <button @click="$emit('close')"
            class="absolute text-3xl text-black dark:text-white top-3 right-3 hover:text-red-500">
                X
            </button>
            <div class="flex flex-col text-gray-900">
                <h2 class="mb-4 text-2xl font-semibold text-start dark:text-gray-50">
                    Send me a message
                </h2>
                <div class="flex flex-col font-medium space-y-7 pe-5">
                    <!--WhatsApp-->
                    <div class="flex flex-row items-center justify-between text-xl dark:text-white">
                        <div class="flex flex-row w-full space-x-4">
                            <img src="/src/assets/icons/whatsapp.svg" class="w-10 h-10" alt="">
                            <span>WhatsApp</span>
                        </div>
                        <a href="#">
                            <img src="/src/assets/icons/Chevron-right.svg" alt="">
                        </a>

                    </div>
                    <!--Telegram-->
                    <div class="flex flex-row items-center justify-between text-xl dark:text-white">
                        <div class="flex flex-row w-full space-x-4">
                            <img src="/src/assets/icons/whatsapp.svg" class="w-10 h-10" alt="">
                            <span>Telegram</span>
                        </div>
                        <a href="#">
                            <img src="/src/assets/icons/Chevron-right.svg" alt="">
                        </a>

                    </div>

                </div>
            </div>
        </div>
        
    </div>
</template>