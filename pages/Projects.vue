<template>
  <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
    <Project v-for="project in projects" :project="project" />
  </div>
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
]);
</script>
