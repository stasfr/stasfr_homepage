<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  buttonTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h3 class="text-xl">{{ props.title }}</h3>
  <Button as="a" :href="props.link" :label="props.buttonTitle" />
</template>
