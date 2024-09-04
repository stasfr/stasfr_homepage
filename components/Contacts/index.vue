<template>
  <div class="flex items-center justify-around">
    <div>{{ props.contact.title }}</div>
    <a
      class="rounded bg-primary text-textDark py-2 px-4 hover:bg-btnHover transition-colors duration-300 ease-linear"
      :href="props.contact.link"
      >{{ props.contact.btn }}</a
    >
  </div>
</template>

<script setup>
const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});
</script>
