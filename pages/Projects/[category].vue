<script setup lang="ts">
const { getProjectsByCategory, categoreis } = useProjects();
const category = useRoute().params.category;
</script>

<template>
  <section class="flex flex-col space-y-8">
    <UISectionTitle :title="categoreis[category].title" class="text-center" />

    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <Project
        v-for="project in getProjectsByCategory(category)"
        :project="project"
        v-motion-slide-top
        :delay="Math.floor(Math.random() * 3) * 100"
      />
    </div>
  </section>
</template>
