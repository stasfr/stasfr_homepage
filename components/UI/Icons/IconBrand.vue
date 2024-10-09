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

<template>
  <Button v-motion-pop-visible :delay="delay" class="flex flex-col size-24">
    <component :is="props.icon" class="w-12 h-12"></component>
    <p>{{ title }}</p>
  </Button>
</template>
