<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: Array,
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
  <section class="text-center">
    <Card>
      <template #title>
        <UISectionTitle :title="props.title" />
      </template>

      <template #content>
        <p v-for="text in props.text" class="text-justify indent-8 my-4">
          {{ text }}
        </p>
      </template>

      <template #footer>
        <Button
          v-if="props.link"
          as="router-link"
          :to="props.link"
          :icon="props.buttonIcon"
          :label="props.buttonTitle"
        />
      </template>
    </Card>
  </section>
</template>
