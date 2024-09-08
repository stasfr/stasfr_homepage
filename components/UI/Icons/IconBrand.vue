<template>
  <div class="p-4 bg-primary rounded">
    <component :is="props.icon" class="w-16 h-16 text-textDark"></component>
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
