<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const animationType = ref({
  1: "v-motion-slide-left",
  0: "v-motion-slide-right",
});
</script>

<template>
  <Card v-motion-slide-top :delay="Math.floor(Math.random() * 3) * 100">
    <template #title>{{ props.project.title }}</template>

    <template #subtitle>{{ props.project.description }}</template>

    <template #content>
      <div class="relative w-full h-36 mb-4">
        <NuxtImg
          :src="props.project.img"
          class="absolute top-0 left-0 w-full h-full object-cover object-top rounded"
        />
      </div>
      <p>{{ props.project.stack }}</p>
    </template>

    <template #footer>
      <div class="flex justify-center">
        <Button as="a" label="Visit" :href="props.project.link" />
      </div>
    </template>
  </Card>
</template>
