<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2
    v-motion-slide-top
    class="block text-3xl underline decoration-border decoration-4 underline-offset-8 text-left"
  >
    {{ props.title }}
  </h2>
</template>
