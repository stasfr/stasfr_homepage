<script setup lang="ts">
import type { TProject } from '@/types';

type Props = {
  project: TProject;
};

const props = defineProps<Props>();
</script>

<template>
  <PrimeCard class="dark:border-zinc-800 border flex flex-col">
    <template #header>
      <div class="relative w-full aspect-[16/9] overflow-hidden rounded-t-md">
        <NuxtImg
          :src="props.project.img"
          :alt="props.project.title"
          format="webp"
          quality="80"
          class="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy" />
      </div>
    </template>

    <template #title>
      <h3 class="text-lg font-semibold truncate" :title="props.project.title">
        {{ props.project.title }}
      </h3>
    </template>

    <template #subtitle>
      <p
        class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 min-h-[3.75rem]">
        {{ props.project.description }}
      </p>
    </template>

    <template #content>
      <p
        class="text-xs text-gray-500 dark:text-gray-300 mt-2 line-clamp-2 min-h-[2.5rem]">
        <strong>Stack:</strong> {{ props.project.stack }}
      </p>
    </template>

    <template v-if="props.project.link" #footer>
      <div class="flex justify-center mt-auto pt-4">
        <PrimeButton
          as="a"
          label="Visit"
          :href="props.project.link"
          target="_blank"
          rel="noopener noreferrer" />
      </div>
    </template>
  </PrimeCard>
</template>
