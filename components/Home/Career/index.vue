<template>
  <div class="space-y-4 text-center">
    <h2
      class="text-3xl text-left underline decoration-border decoration-4 underline-offset-8"
    >
      Career
    </h2>
    <div>
      <HomeCareerStep
        v-for="(timestamp, index) in timeline"
        :timestampData="timestamp"
        :index="index"
      />
    </div>
    <nuxt-link
      class="rounded bg-primary text-textDark py-2 px-4 hover:bg-btnHover transition-colors duration-300 ease-linear"
      to="/projects"
      >My projects</nuxt-link
    >
  </div>
</template>

<script setup>
const timeline = ref([
  {
    year: "2000",
    title: "I was born",
    texts: {
      body: "I was born and could build a PC with closed eyes (starting from 7 yeard old).",
    },
    showLine: true,
  },
  {
    year: "2021 Spring-Summer",
    title: "Goglobal",
    texts: {
      site: "https://goglobal.world/",
      stack: [
        "Vue.js 3",
        "HTML5, CSS3 (SASS)",
        "JavaScript (ES6+)",
        "REST API",
        "Git, GitHub",
      ],
    },
    showLine: true,
  },
  {
    year: "2022-2024",
    title: 'PJSC "Rosseti Moscow region"',
    texts: {
      body: "Managed staff, wrote macros in VBA to automate business-process, organized the work.",
      site: "https://rossetimr.ru/",
    },
    showLine: true,
  },
  {
    year: "2024",
    title: "I'm doing this site",
    texts: {
      body: "and dream of creating my own product that will make the world a little better (or not a little).",
    },
    showLine: false,
  },
]);
</script>
