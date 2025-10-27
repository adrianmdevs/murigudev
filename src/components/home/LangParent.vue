<script setup>
import LangCompMain from './LangCompMain.vue'


// import icons
import htmlIcon from '@/assets/icons/html-5-svgrepo-com.svg'
import cssIcon from '@/assets/icons/css-3-svgrepo-com.svg'
import jsIcon from '@/assets/icons/javascript-svgrepo-com.svg'
import tsIcon from '@/assets/icons/typescript-svgrepo-com.svg'
import phpIcon from '@/assets/icons/php.svg'
import pythonIcon from '@/assets/icons/python.svg'


const frontendSkills = [
  { name: 'HTML 5', icon: htmlIcon},
  { name: 'CSS 3', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
]

const backendSkills = [
  { name: 'PHP', icon: phpIcon },
  { name: 'Python', icon: pythonIcon },
]
</script>

<template>
    
  <section class="grid md:grid-cols-2 gap-4">
    <LangCompMain
      specialty="Frontend Development"
      :skills="frontendSkills"
    />
    <LangCompMain
      specialty="Backend Development"
      :skills="backendSkills"
    />
  </section>
</template>
