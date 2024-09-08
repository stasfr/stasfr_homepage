<template>
  <div
    class="flex flex-col items-center justify-center cursor-pointer size-24 bg-primary rounded text-textDark hover:bg-btnHover transition-colors duration-200 ease-linear text-center"
  >
    <component :is="props.icon" class="w-12 h-12"></component>
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
