<script setup lang="ts">
const { projects, categoreis } = useProjects();
</script>

<template>
  <section class="flex flex-col space-y-8">
    <UISectionTitle title="My projects" class="text-center" />

    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <OverlayBadge
        :severity="categoreis[project.category].bageSeverity"
        v-for="project in projects"
        v-motion-slide-top
        :delay="Math.floor(Math.random() * 3) * 100"
      >
        <Project :project="project" />
      </OverlayBadge>
    </div>
  </section>
</template>
