<script setup>
import SectHeader from '../SectHeader.vue';


</script>
<template>
    <div class="flex flex-col space-y-3">
        <!--heading here-->
        <SectHeader message="Miscellaneous"/>
        <div class="flex flex-col bg-green-800">
            <ul class="flex flex-col">
                <li>Responsive web design</li>
                <li>Responsive web development</li>
                <li>REST API development & Consumption</li>
                <li>Payment Gateway integration</li>
            </ul>
            <hr>
            <ul class="flex flex-col">
                <li>Data Entry with Excel</li>
                <li>Bash scripting w/ linux</li>
            </ul>

        </div>
    </div>
</template>