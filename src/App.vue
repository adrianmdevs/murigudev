<script setup>
//import headerComponent from './components/headerComponent.vue'

</script>
<template>
  <!--Blank template-one-->
  <!-- <headerComponent/> -->
   <span class="text-5xl text-green-600">Welcome to the routed page</span>
  <nav class="flex items-center justify-center space-x-10">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView/>
      
</template>
