<script setup>
    const props = defineProps({
        message: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <div class="w-full flex items-start border-l-2 text-xl border-green-500 md:border-none md:items-center md:text-2xl md:font-thin md:tracking-[10px]">
        <span>{{ message }}</span>
    </div>
</template>