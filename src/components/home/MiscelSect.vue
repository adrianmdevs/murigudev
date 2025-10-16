<script setup>
import SectHeader from '../SectHeader.vue';


</script>
<template>
    <div class="flex flex-col space-y-5">
        <!--heading here-->
        <SectHeader message="Miscellaneous"/>
        <div class="grid grid-cols-1 justify-items-start md:justify-items-center text-gray-100 text-lg md:grid-cols-3 bg-[#022533] mx-2 rounded-xl p-3">
            <ul class="flex flex-col space-y-2 text-[15px] md:text-[18px]">
                <li>Responsive web design</li>
                <li>Responsive web development</li>
                <li>REST API development & Consumption</li>
                <li>Payment Gateway integration</li>
            </ul>
            <hr class="md:hidden">
            <ul class="flex flex-col space-y-2 text-[15px] md:text-[18px]">
                <li>Data Entry with Excel</li>
                <li>Bash scripting w/ linux</li>
            </ul>

        </div>
    </div>
</template>