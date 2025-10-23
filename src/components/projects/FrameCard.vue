<script setup>
    defineprops({
        projectTitle : String,
        projectDetail : String
    })

</script>
<template>
    <div class="flex flex-col border border-gray-300 rounded-lg w-80">
        <div>
            <h2 class="font-medium">{{ projectTitle }}</h2>
            <p>{{ projectDetail }}</p>
        </div>
        <!--Language svg-->
        <div class="flex">
            <img src="/src/assets/icons/tailwindcss.svg" alt="">
        </div>
        <!--Navigation buttons-->
        <div class="flex">
            <a href="#">
                <span>Code</span>
            </a>
            <!--Show this link conditionally (front-end only)-->
            <a href="#">
                <span>Demo</span>
            </a>
        </div>
    </div>
</template>