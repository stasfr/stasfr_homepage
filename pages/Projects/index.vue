<script setup lang="ts">
const { projects } = useProjects();
</script>

<template>
  <section class="flex flex-col space-y-8">
    <UISectionTitle title="My projects" class="text-center" />

    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <Project v-for="(project, index) in projects" :project="project" />
    </div>
  </section>
</template>
