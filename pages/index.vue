<script setup lang="ts">
interface TimelineStamp {
  year: string;
  title: string;
  subtitle?: string;
  body?: string;
  site?: string;
  stack?: string[];
}

const timelineOptions = ref<TimelineStamp[]>([
  {
    year: "2000",
    title: "I was born",
    subtitle:
      "and could build a PC with closed eyes (starting from 7 yeard old).",
  },
  {
    year: "2021 Spring-Summer",
    title: "Goglobal World",
    subtitle:
      "Platform connecting investors and startups globally through AI-powered matchmaking and events.",
    site: "https://goglobal.world/",
    stack: ["Vue.js 3", "JavaScript", "GitHub"],
  },
  {
    year: "2022-2024",
    title: 'PJSC "Rosseti Moscow region"',
    subtitle:
      "Responsible for the transmission and distribution of electricity in the Moscow region, ensuring reliable power supply for residential and industrial customers.",
    site: "https://rossetimr.ru/",
    stack: ["VBA"],
  },
  {
    year: "2024 September",
    title: "I'm doing this site",
    subtitle:
      "and dream of creating my own product that will make the world a little better (or not a little).",
    stack: ["Nuxt 3", "TypeScript", "Primevue", "Tailwind", "GitHub"],
  },
  {
    year: "October 2024 - ...",
    title: 'Insurance office "Pari"',
    subtitle:
      "Offers a wide range of insurance products for individuals and businesses, including property, health, and auto insurance, as well as liability coverage and cargo insurance.",
    site: "https://skpari.ru/",
    stack: ["Vue.js 2/3", "Vuetify", "GitLab"],
  },
]);
</script>

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
      :text="[
        'From an early age, I have been passionate about programming, which has allowed me to build a solid foundation in this field. Starting with learning Pascal in school and university, I actively participated in informatics olympiads, which helped me develop analytical thinking and problem-solving skills.',
        'Since 2021, I have been studying Python and web development in depth. Since 2022, I have focused on working with Vue 3, which has allowed me to enhance my frontend development skills.',
        'I have experience in backend development, including implementing JWT authentication and creating REST APIs with Express. This gives me an understanding of the full web application development cycle and effective interaction between the frontend and backend.',
        'I am proficient in HTML, CSS, responsive design, and work with Vue 3, the Composition API, and Pinia. I can quickly adapt to new technologies and tools.',
      ]"
      link="/skills"
      buttonIcon="pi pi-star"
      buttonTitle="See my stack"
      v-motion-slide-bottom
    />

    <HomeCustomSection
      title="Interests"
      :text="[
        'I have a passion for reading business and psychology books, exploring various perspectives and gaining insights into human behavior and decision-making.',
        'I also enjoy watching movies and studying screenwriting, fascinated by the structure, characters, and storytelling techniques that drive impactful narratives.',
        'Beyond that, I love diving deep into the meanings behind songs, albums, and films, trying to uncover the messages the creators intended.',
        'My favorite bands include Би-2, Заточка, ЛСП, and кис-кис, and I also enjoy the relaxing vibe of Lofi hip hop, which perfectly complements my reflective nature.',
      ]"
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

<style scoped>
#title {
  color: var(--p-button-primary-color);
  background: var(--p-button-primary-background);
  border: 1px solid var(--p-button-primary-border-color);
  font-weight: var(--p-button-label-font-weight);
}
</style>
