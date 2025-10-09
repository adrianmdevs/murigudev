<!-- <script setup>
//import { defineProps } from 'vue';
    defineProps({
        isOpen :{
            type : Boolean,
            required : true
        }
    })
</script>
<template>
    <div v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black z-999 bg-opacity-90"
    >
        <div class="relative flex flex-col h-auto p-4 space-y-8 text-white bg-white border rounded-lg dark:bg-secondary-dark w-72 md:w-96 dark:border-gray-300">
            
            <button @click="$emit('close')"
            class="absolute text-3xl text-black dark:text-white top-3 right-3 hover:text-red-500">
                <svg viewBox="0 0 24 24" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15.5 10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2z"/>
                </svg>
            </button>
            <div class="flex flex-col text-gray-900">
                <h2 class="mb-4 text-lg font-semibold text-start dark:text-gray-50">
                    Send me a message
                </h2>
                <div class="flex flex-col font-medium space-y-7 pe-5">
                    
                    <div class="flex flex-row items-center justify-between text-lg dark:text-white">
                        <div class="flex flex-row w-full space-x-4">
                            <img src="/src/assets/icons/whatsapp.svg" class="w-10 h-10" alt="">
                            <span>WhatsApp</span>
                        </div>
                        <a href="#">
                            <img src="/src/assets/icons/Chevron-right.svg" alt="">
                        </a>

                    </div>
                
                    <div class="flex flex-row items-center justify-between text-lg dark:text-white">
                        <div class="flex flex-row w-full space-x-4">
                            <img src="/src/assets/images/telegram.png" class="w-10 h-10" alt="">
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
</template> -->
<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <!-- Animated modal transition -->
  <Transition
    enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
    enter-from-class="scale-75 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition-all duration-300 ease-in-out"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-90 opacity-0"
  >
    <!-- Modal overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <!-- Modal container -->
      <div
        class="relative flex flex-col h-auto p-6 space-y-8 text-white transition-transform transform bg-white border shadow-2xl rounded-2xl dark:bg-secondary-dark w-72 md:w-96 dark:border-gray-300"
      >
        <!-- Close button -->
        <button
          @click="$emit('close')"
          class="absolute text-3xl text-black transition-colors dark:text-white top-3 right-3 hover:text-red-500"
        >
          <svg viewBox="0 0 24 24" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m15.5 10v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-2h-1v-1h-1v-1h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h3v1h1v2h1v1h1v2h1v1h1v1h1v2z"
            />
          </svg>
        </button>

        <!-- Modal content -->
        <div class="flex flex-col text-gray-900">
          <h2 class="mb-4 text-lg font-semibold text-start dark:text-gray-50">
            Send me a message
          </h2>

          <div class="flex flex-col font-medium space-y-7 pe-5">
            <!-- WhatsApp -->
            <div class="flex flex-row items-center justify-between text-lg dark:text-white">
              <div class="flex flex-row w-full space-x-4">
                <img src="/src/assets/icons/whatsapp.svg" class="w-10 h-10" alt="whatsapp" />
                <span>WhatsApp</span>
              </div>
              <a href="#">
                <img src="/src/assets/icons/Chevron-right.svg" alt="chevron" />
              </a>
            </div>

            <!-- Telegram -->
            <div class="flex flex-row items-center justify-between text-lg dark:text-white">
              <div class="flex flex-row w-full space-x-4">
                <img src="/src/assets/images/telegram.png" class="w-10 h-10" alt="telegram" />
                <span>Telegram</span>
              </div>
              <a href="#">
                <img src="/src/assets/icons/Chevron-right.svg" alt="chevron" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

