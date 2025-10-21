<script setup>
    const props = defineProps({
        message: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <div class="w-full mx-2 text-[19px] flex items-start border-l-4 md:justify-center ps-2.5 md:ps-0 text-3xl tracking-wider border-[#033d47] dark:border-gray-100 md:border-none md:items-center md:text-2xl md:font-thin md:tracking-[10px]">
        <span>{{ message }}</span>
    </div>
</template>