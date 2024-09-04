<template>
  <div class="box-content max-w-[1000px] mx-auto px-4">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
      <Projects v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    title: "Saviour Care",
    link: "https://stasfr.github.io/Saviour-Care/",
    img: "/img/projects/saviour_care.png",
  },
  {
    title: "Wine and Dices",
    link: "https://github.com/stasfr/wad-reborn",
    img: "/img/projects/wad.png",
  },
  {
    title: "Goglobal",
    link: "https://goglobal.world/",
    img: "/img/projects/goglobal.png",
  },
]);
</script>
