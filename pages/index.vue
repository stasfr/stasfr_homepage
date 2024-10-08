<template>
  <section class="flex flex-col items-center space-y-8">
    <p
      v-motion-slide-top
      class="py-2 rounded w-full xs:w-auto xs:px-12 text-center"
      id="title"
    >
      <i class="pi pi-heart"></i>
      From Russian frontend with love!
    </p>

    <div class="flex items-center gap-4" v-motion-slide-top>
      <div class="space-y-2">
        <h1 class="text-3xl xs:text-4xl font-bold">Stanislav Farkash</h1>
        <p class="text-md text-left">Moscow, Russia</p>
      </div>

      <Image
        v-tooltip.top="'Любимая выбирала'"
        src="/img/avatars/avatar.png"
        alt="avatar"
        width="200"
        pt:image:class="rounded-full border-4"
      >
      </Image>
    </div>

    <HomeCustomSection
      title="About"
      text="I started programming at school, I wrote programs in Pascal. Now I write code in JS, HTML, CSS, Python and VBA."
      link="/skills"
      buttonIcon="pi pi-star"
      buttonTitle="See my stack"
      v-motion-slide-bottom
    />

    <HomeCustomSection
      title="Interests"
      text="I like reading business and psychology books, watch movies and study screenwriting."
      link="/contacts"
      buttonIcon="pi pi-envelope"
      buttonTitle="Call me"
      v-motion-slide-bottom
    />

    <HomeCustomTimeline
      v-motion-slide-bottom
      :timelineOptions="timelineOptions"
    />
  </section>
</template>

<script setup>
const timelineOptions = ref([
  {
    year: "2000",
    title: "I was born",
    body: "I was born and could build a PC with closed eyes (starting from 7 yeard old).",
  },
  {
    year: "2021 Spring-Summer",
    title: "Goglobal",
    site: "https://goglobal.world/",
    stack: [
      "Vue.js 3",
      "HTML5, CSS3 (SASS)",
      "JavaScript (ES6+)",
      "REST API",
      "Git, GitHub",
    ],
  },
  {
    year: "2022-2024",
    title: 'PJSC "Rosseti Moscow region"',
    subtitle:
      "Managed staff, wrote macros in VBA to automate business-process, organized the work.",
    site: "https://rossetimr.ru/",
  },
  {
    year: "2024",
    title: "I'm doing this site",
    body: "and dream of creating my own product that will make the world a little better (or not a little).",
  },
]);
</script>

<style scoped>
#title {
  color: var(--p-button-primary-color);
  background: var(--p-button-primary-background);
  border: 1px solid var(--p-button-primary-border-color);
  font-weight: var(--p-button-label-font-weight);
}
</style>
