<template>
  <div class="space-y-6 text-center">
    <h2
      class="text-3xl text-left underline decoration-border decoration-4 underline-offset-8"
    >
      {{ props.section.title }}
    </h2>
    <p v-if="props.section.text" class="text-justify">
      {{ props.section.text }}
    </p>
    <nuxt-link
      v-if="props.section.link"
      class="inline-block rounded bg-primary text-textDark py-2 px-4 hover:bg-btnHover transition-colors duration-300 ease-linear"
      :to="props.section.link"
      >{{ props.section.btnTitle }}</nuxt-link
    >
  </div>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>
