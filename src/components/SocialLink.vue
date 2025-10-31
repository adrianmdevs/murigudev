<script setup>
 defineProps({
    href : { type: String, required: true},
    label : { type: String, default: '', required: 'true'},
    tooltip: {type: String, default: ' '},
    ariaLabel: {type: String, default: ''},
    icon: { type: String, required: true}
 }) 
</script>
<template>
    <a 
    :href="href"
    :aria-label="label"
    rel="noopener norefferer"
    :title="tooltip"
    target="_blank"
    class="inline-flex items-center gap-2 text-gray-700 transition dark:text-gray-300 hover:underline hover:text-blue-600"
    >
        <img 
        v-if="icon"
        :src="icon"
        :alt="label"
        class="object-contain w-10 h-10"
        loading="lazy"
        decoding="async"
         >
         <span class="sr-only">{{ label }}</span>
        <slot/>
    </a>
</template>