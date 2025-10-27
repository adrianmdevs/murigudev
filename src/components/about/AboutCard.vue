<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (card) =>
          'imageSrc' in card && 'heading' in card && 'description' in card
      ),
  },
});
</script>

<template>
  <div class="flex flex-col items-start justify-center gap-8 md:flex-row md:flex-wrap">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="flex flex-col space-y-3 px-2.5 md:max-w-sm w-full"
    >
      <img
        :src="card.imageSrc"
        :alt="card.heading"
        loading="eager"
        class="object-cover shadow-md shadow-gray-500 rounded-2xl"
      />
      <div class="flex flex-col space-y-2">
        <span class="text-[18px] font-semibold">{{ card.heading }}</span>
        <p class="text-[16px] text-gray-600 dark:text-gray-200">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>
