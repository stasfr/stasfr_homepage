<template>
  <div class="p-4 bg-primary rounded">
    <component :is="props.icon" class="w-12 h-12 text-textDark"></component>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
