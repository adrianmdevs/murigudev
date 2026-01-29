<script setup>
import SectHeader from '../SectHeader.vue';


</script>
<template>
    <div class="flex flex-col space-y-5">
        <!--Heading here-->
        <SectHeader message="Miscellaneous"/>
        <div class="grid grid-cols-1 place-items-start gap-8 justify-items-start text-gray-200 text-[13px] md:text-[15px] bg-[#192730] mx-2 rounded-xl p-3">
            <ul class="flex flex-col leading-relaxed font-medium space-y-3 text-[16px] md:text-[18px]">
                <li>&#10004; UI/UX design systems( Material UI)</li>
                <li>&#10004; Responsive web design</li>
                <li>&#10004; Responsive web development</li>
                <li>&#10004; Software design patterns</li>
                <li>&#10004; REST API development & consumption</li>
                <li>&#10004; Headless & serveless CMS</li>
                <li>&#10004; Agile & scrum Methodologies</li>
                <li>&#10004; CI/CD Pipeline</li>
                <li>&#10004; Unit testing w/Jest (Frontend)</li>
                <li>&#10004; Containerization w/ docker(Learning)</li>
                <li class="text-opacity-30">&#10004; Payments gateway integration (Learning)</li>
                <li class="text-opacity-50">&#10004; AI integration with Node & Python (Learning)</li>
                <li class="text-opacity-50">&#10004; Agent-based modelling with mesa (Learning)</li>
                
            </ul>
            <!--Contains divider border for smaller screens-->
            <div class="flex items-center w-full">
                <!-- <div class="h-full border border-b-2 border-gray-100 md:block"></div> -->
                <div class="w-full mx-10 border border-b border-gray-300"></div>
            </div>
            <ul class="flex flex-col font-semibold leading-relaxed space-y-2 text-[16px] md:text-[18px]">
                <li>&#10004; Data Entry with Excel</li>
                <li>&#10004; Bash scripting w/ linux</li>
                <li>&#10004; General IT Support</li>
                <li>&#10004; Fiber Network Management</li>
                <li>&#10004; Windows server 2019</li>
            </ul>
        </div>
    </div>
</template>