<script setup>
defineProps({
  // The title for the skill category (e.g., "Frontend Development", "Backend Development")
  specialty: {
    type: String,
    required: true,
  },
  // Array of objects representing the languages/tools
  skills: {
    type: Array,
    required: true,
    // example: [{ name: "HTML 5", icon: htmlIcon }]
    default: () => [],
  },
});
</script>

<template>
  <div
    class="w-full p-3 space-y-3 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all hover:shadow-lg"
  >
    <!-- Specialty / Category -->
    <span class="font-medium text-gray-600 dark:text-gray-400">
      {{ specialty }}
    </span>

    <!-- Skills Grid -->
    <div class="grid grid-cols-3 md:grid-cols-2 gap-y-3">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="flex flex-col items-start space-y-2"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="w-10 h-10 object-contain"
          loading="lazy"
        />
        <span
          class="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>
