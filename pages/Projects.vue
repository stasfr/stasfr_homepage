<template>
  <section class="flex flex-col space-y-8">
    <h2
      v-motion-slide-top
      class="block text-3xl text-center underline decoration-border decoration-4 underline-offset-8"
    >
      My projects
    </h2>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
      <Project v-for="(project, index) in projects" :project="project" />
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    title: "Saviour Care",
    link: "https://stasfr.github.io/Saviour-Care/",
    img: "/img/projects/saviour_care.png",
    description: "Adaptive landing (Vanilla HTML, CSS)",
  },
  {
    title: "Wine and Dices",
    link: "https://github.com/stasfr/wad-reborn",
    img: "/img/projects/wad.png",
    description: "Dream project about Wine and Dice Throne (Vue3, Supabase)",
  },
  {
    title: "Goglobal",
    link: "https://goglobal.world/",
    img: "/img/projects/goglobal.png",
    description: "Vue3.js SPA, made little components (Vue3, JS)",
  },
  {
    title: "Alef test",
    link: "https://github.com/stasfr/alef-test",
    img: "/img/projects/alef_test.png",
    description:
      "Test project for job interview (Nuxt, TypeScript, Custom components)",
  },
  {
    title: "Todo App",
    link: "https://github.com/stasfr/todo_app_test",
    img: "/img/projects/todo_app.png",
    description:
      "Test project for job interview (Vue 3, TypeScript, AutoImports, Tailwind)",
  },
]);
</script>
