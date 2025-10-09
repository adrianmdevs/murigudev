<template>
    <nav class="sticky top-0 z-50 flex items-center w-full px-2 py-5 space-x-14 md:items-start md:justify-evenly dark:bg-inherit dark:text-white dark:bg-black">
        <RouterLink to="/" class="">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Projects</RouterLink>
    </nav>
  <RouterView/>
</template>