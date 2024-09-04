<template>
  <div class="flex flex-col p-4 bg-primary text-textDark rounded w-80">
    <h3 class="text-xl font-bold text-center">
      {{ props.project.title }}
    </h3>
    <div class="relative w-full h-64 my-4">
      <NuxtImg
        :src="props.project.img"
        class="absolute top-0 left-0 w-full h-full object-cover object-top rounded"
      />
    </div>
    <div class="mx-auto">
      <a
        :href="props.project.link"
        class="text-center bg-secondary text-textLight rounded py-2 px-8 hover:bg-btnHover transition-colors duration-300 ease-linear"
        >Visit</a
      >
    </div>
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
