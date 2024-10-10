<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  buttonIcon: {
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
  <section class="space-y-6 text-center">
    <UISectionTitle :title="props.title" />

    <p v-if="props.text" class="text-justify">
      {{ props.text }}
    </p>

    <Button
      v-if="props.link"
      as="router-link"
      :to="props.link"
      :icon="props.buttonIcon"
      :label="props.buttonTitle"
    />
  </section>
</template>
