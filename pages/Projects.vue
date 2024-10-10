<script setup>
const projects = ref([
  {
    title: "Saviour Care",
    link: "https://stasfr.github.io/Saviour-Care/",
    img: "/img/projects/saviour_care.png",
    description: "Adaptive landing with custom burger menu",
    stack: "Vanilla HTML, CSS",
  },
  {
    title: "Wine and Dices",
    link: "https://github.com/stasfr/wad-reborn",
    img: "/img/projects/wad.png",
    description: "Dream project about Wine and Dice Throne",
    stack: "Vue3, Supabase",
  },
  {
    title: "Goglobal",
    link: "https://goglobal.world/",
    img: "/img/projects/goglobal.png",
    description: "Vue3.js SPA, made little components",
    stack: "Vue3, JS",
  },
  {
    title: "Alef test",
    link: "https://github.com/stasfr/alef-test",
    img: "/img/projects/alef_test.png",
    description: "Test project for job interview",
    stack: "Nuxt, TypeScript, Custom form componetns",
  },
  {
    title: "Todo App",
    link: "https://github.com/stasfr/todo_app_test",
    img: "/img/projects/todo_app.png",
    description: "Test project for job interview",
    stack: "Vue 3, TypeScript, AutoImports, Tailwind",
  },
  {
    title: "Crypto app",
    link: "https://github.com/stasfr/crypto-app",
    img: "/img/projects/crypto_app.png",
    description: "Test project for job interview",
    stack: "Nuxt, TypeScript, Primevue, Chart.js, Docker",
  },
  {
    title: "Crypto app backend",
    link: "https://github.com/stasfr/crypto-app_backend",
    img: "/img/projects/nestjs_logo.png",
    description: "Backend on Nest.js for Crypto app",
    stack: "Nest, TypeScript, Prisma, Axios, JWT",
  },
]);
</script>

<template>
  <section class="flex flex-col space-y-8">
    <UISectionTitle title="My projects" class="text-center" />

    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <Project v-for="(project, index) in projects" :project="project" />
    </div>
  </section>
</template>
