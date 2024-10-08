<template>
  <div
    v-motion-pop-visible
    :delay="delay"
    class="flex flex-col items-center justify-center cursor-pointer size-24 rounded text-center"
  >
    <component :is="props.icon" class="w-12 h-12"></component>
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 100,
  },
});
</script>
