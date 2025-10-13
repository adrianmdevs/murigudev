<script setup>
    const props = defineprops({
        header: {
            type : String,
            required : true
        }
    })
</script>
<template>
    <div class="w-full pb-4 overflow-x-auto text-xl text-black border-b max-w-72 ps-2">
        <span>{{ header }}</span>
    </div>
</template>