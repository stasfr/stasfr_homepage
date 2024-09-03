<template>
  <div class="text-left grid-cols-[30px_auto] grid">
    <div><UIIconsCheck class="w-full h-full" /></div>
    <div class="justify-items-start px-4 italic">{{ timestampData.year }}</div>
    <div class="w-1/12 h-full bg-white mx-auto"></div>
    <div class="pb-4 px-4">
      <div class="text-xl font-bold">{{ timestampData.title }}</div>
      <div class="text-base">{{ timestampData.text }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  timestampData: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
