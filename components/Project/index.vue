<script setup lang="ts">
import type { Project } from "@/types/project";
interface Props {
  project: Project;
}

const props = defineProps<Props>();
</script>

<template>
  <Card class="dark:border-zinc-800 border-[1px] w-64">
    <template #title>{{ props.project.title }}</template>

    <template #subtitle>
      <p class="h-12">{{ props.project.description }}</p>
    </template>

    <template #content>
      <div class="relative w-full h-36 mb-4">
        <!-- 214.4 x 144 -->
        <!-- 857,6 x 576 -->
        <NuxtImg
          :src="props.project.img"
          class="absolute top-0 left-0 w-full h-full object-cover object-top rounded"
        />
      </div>
      <p class="h-12">{{ props.project.stack }}</p>
    </template>

    <template #footer>
      <div class="flex justify-center">
        <Button as="a" label="Visit" :href="props.project.link" />
      </div>
    </template>
  </Card>
</template>
