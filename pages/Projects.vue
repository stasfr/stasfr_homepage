<template>
  <div class="box-content max-w-[1000px] mx-auto px-4">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
      <Projects v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  { title: "Saviour Care", link: "/" },
  { title: "Wine and Dices", link: "/" },
  { title: "Goglobal", link: "/" },
]);
</script>
