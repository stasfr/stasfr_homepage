<template>
  <div>
    <h2
      class="text-3xl text-left underline decoration-border decoration-4 underline-offset-8 mb-4"
    >
      {{ props.text.title }}
    </h2>
    <p class="text-justify mb-4">
      {{ props.text.text }}
    </p>
    <nuxt-link
      class="rounded bg-primary text-textDark py-1 px-3"
      :to="props.text.link"
      >{{ props.text.btnTitle }}</nuxt-link
    >
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: Object,
    required: true,
  },
});
</script>
