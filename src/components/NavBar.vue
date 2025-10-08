<template>
    <nav class="flex w-full sticky z-50 top-0 items-center px-2 py-5 space-x-14 md:items-start md:justify-evenly dark:bg-inherit dark:text-white dark:bg-black">
        <RouterLink to="/" class="">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/project">Projects</RouterLink>
    </nav>
  <RouterView/>
</template>