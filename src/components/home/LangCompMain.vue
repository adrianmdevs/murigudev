<script setup>
defineProps({
  // Skill category title
  specialty: {
    type: String,
    required: true,
  },
  // Languages as an array of objects
  skills: {
    type: Array,
    required: true,
    // language specs
    default: () => [],
  },
});
</script>

<template>
  <div
    class="w-full p-3 space-y-3 rounded-lg shadow-md bg-white dark:bg-[#323435] transition-all hover:shadow-lg"
  >
    <!--Specialty / Category-->
    <span class="font-medium text-[19px] md:text-[21px] text-gray-700 dark:text-gray-200">
      {{ specialty }}
    </span>

    <!-- Skills Grid -->
    <div class="grid grid-cols-3 text-gray-500 md:grid-cols-2 gap-y-3">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col items-start space-y-2"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="object-contain w-10 h-10"
          loading="lazy"
        />
        <span
          class="text-[15px] md:text-[17px] text-gray-500 dark:text-gray-300"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>
