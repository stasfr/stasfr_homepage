<script setup lang="ts">
import type { TProject } from '@/types';

const projects: TProject[] = [
  {
    title: 'PARI IC Partner Portal',
    link: 'https://skpari.ru/',
    img: '/img/skpari.webp',
    description:
      'Development of a personal account (portal) for partners of the PARI insurance company. It allows partners to manage their data, track sales, and receive up-to-date information.',
    stack: 'Vue 3, Quasar, TypeScript',
  },
  {
    title: 'PARI IC Employee Portal',
    link: 'https://skpari.ru/',
    img: '/img/skpari.webp',
    description:
      'Development of an internal personal account (portal) for PARI IC employees. Designed for managing insurance policies, customer databases, and other work processes.',
    stack: 'Vue 2, Vuetify',
  },
  {
    title: 'GGW Venture Capital Platform',
    link: 'https://ggw.ru/',
    img: '/img/ggw.webp',
    description:
      'Creation of a platform for GGW venture investments. The project included integration with OpenAI and Google APIs for data analysis and investment decision support.',
    stack:
      'Next.js, Node.js, MongoDB, Material-UI (MUI), OpenAI API, Google API',
  },
  {
    title:
      'Corporate Portal for the Analytical Center under the Government of the Russian Federation',
    link: 'https://ac.gov.ru/',
    img: '/img/acgov.webp',
    description:
      'Development of a corporate portal for employees of the Analytical Center under the Government of the Russian Federation. The portal is designed for internal collaboration, document exchange, and information sharing.',
    stack: 'Vue 3, TypeScript, Unplugin, Tailwind CSS, PrimeVue',
  },
];
</script>

<template>
  <section class="flex h-full flex-1 items-center justify-around">
    <div class="flex flex-col gap-4 p-8 bg-neutral-900 rounded-lg">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl md:text-4xl tracking-widest font-thin">Projects</h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        <ProjectsUIProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project" />
      </div>
    </div>
  </section>
</template>
