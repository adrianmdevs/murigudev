<script setup>
    defineProps({
        pageHeader : String
    })

</script>
<template>
    <div class="block w-1/2 pb-1.5 md:border-b-0 overflow-x-auto md:w-1/2">
        <span class="text-2xl font-bold md:text-3xl lg:text-4xl dark:text-white">{{ pageHeader }}</span>
    </div>
</template>