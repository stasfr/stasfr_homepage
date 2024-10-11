<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h2
    v-motion-slide-top
    class="block text-3xl underline decoration-border decoration-2 underline-offset-8"
  >
    {{ props.title }}
  </h2>
</template>
