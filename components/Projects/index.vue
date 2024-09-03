<template>
  <div class="flex flex-col p-4 bg-secondary rounded">
    <div>{{ props.project.title }}</div>
    <div>{{ props.project.link }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
