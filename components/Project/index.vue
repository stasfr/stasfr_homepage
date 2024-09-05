<template>
  <div
    class="flex flex-col p-4 bg-primary text-textDark rounded text-center space-y-4 w-72 md:w-auto"
  >
    <h3 class="text-xl font-bold">
      {{ props.project.title }}
    </h3>
    <div class="relative w-full h-40">
      <NuxtImg
        :src="props.project.img"
        class="absolute top-0 left-0 w-full h-full object-cover object-top rounded"
      />
    </div>
    <p>{{ props.project.description }}</p>
    <a
      :href="props.project.link"
      class="bg-secondary mx-auto text-textLight rounded py-2 px-8 hover:bg-btnHover transition-colors duration-300 ease-linear"
      >Visit</a
    >
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
