<script setup lang="ts">
const skills = ref([
  {
    name: 'flowbite:css-solid',
    title: 'CSS',
    color: '#3C99DC',
  },
  {
    name: 'simple-icons:express',
    title: 'Express',
    color: '#ffffff',
  },
  { name: 'bi:git', title: 'Git', color: '#F1502F' },
  {
    name: 'akar-icons:google-fill',
    title: 'Google',
    color: '#4285F4',
    // color: '#FBBC05',
    // color: '#34A853',
    // color: '#EA4335',
  },
  {
    name: 'akar-icons:graphql-fill',
    title: 'GraphQL',
    color: '#E10098',
  },
  {
    name: 'flowbite:html-solid',
    title: 'HTML',
    color: '#F06529',
  },
  {
    name: 'akar-icons:javascript-fill',
    title: 'JS',
    color: '#F0DB4F',
  },
  {
    name: 'akar-icons:node-fill',
    title: 'Node.js',
    color: '#339933',
  },
  {
    name: 'akar-icons:npm-fill',
    title: 'NPM',
    color: '#CC3534',
  },
  {
    name: 'simple-icons:nuxtdotjs',
    title: 'Nuxt',
    color: '#00dc82',
  },
  {
    name: 'akar-icons:postgresql-fill',
    title: 'PostgreSQL',
    color: '#336791',
  },
  {
    name: 'simple-icons:postman',
    title: 'Postman',
    color: '#EF5B25',
  },
  {
    name: 'akar-icons:sass-fill',
    title: 'SASS',
    color: '#CD6799',
  },
  {
    name: 'flowbite:tailwind-solid',
    title: 'Tailwind',
    color: '#00bcff',
  },
  {
    name: 'akar-icons:typescript-fill',
    title: 'TS',
    color: '#3178c6',
  },
  {
    name: 'akar-icons:vue-fill',
    title: 'Vue',
    color: '#42b883',
  },
  {
    name: 'file-icons:chartjs',
    title: 'Chart.js',
    color: '#ff6384',
  },
  {
    name: 'ant-design:docker-outlined',
    title: 'Docker',
    color: '#1D63ED',
  },
  {
    name: 'ri:supabase-fill',
    title: 'Supabase',
    color: '#3bce8d',
  },
  {
    name: 'akar-icons:figma-fill',
    title: 'Figma',
    color: '#f24e1e',
    // color: '#ff7262',
    // color: '#a259ff',
    // color: '#1abcfe',
    // color: '#0acf83',
  },
  {
    name: 'simple-icons:nestjs',
    title: 'Nest.js',
    color: '#E0234E',
  },
  {
    name: 'simple-icons:primevue',
    title: 'PrimeVue',
    color: '#42b883',
  },
  {
    name: 'devicon-plain:vuetify',
    title: 'Vuetify',
    color: '#1697F6',
  },
  {
    name: 'simple-icons:quasar',
    title: 'Quasar',
    color: '#00b4ff',
  },
  {
    name: 'simple-icons:prisma',
    title: 'Prisma',
    color: '#4c51bf',
  },
  {
    name: 'simple-icons:mongodb',
    title: 'MongoDB',
    color: '#00ed64',
  },
  {
    name: 'simple-icons:gitlab',
    title: 'GitLab',
    color: '#fc6d27',
  },
  {
    name: 'simple-icons:vitest',
    title: 'Vitest',
    color: '#fcc72b',
  },
]);

function shuffleSkills() {
  const newArray = [...skills.value];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  skills.value = newArray;
}
</script>

<template>
  <section
    class="flex h-full flex-1 items-center justify-around touch-manipulation">
    <div
      class="flex flex-col gap-4 p-8 bg-zinc-900/30 backdrop-blur-xs rounded-lg">
      <div class="flex justify-between items-center gap-2">
        <h2 class="text-2xl md:text-4xl tracking-widest font-thin">My stack</h2>
        <PrimeButton label="Shuffle" @click="shuffleSkills" />
      </div>

      <TransitionGroup
        name="list-shuffle"
        tag="div"
        class="grid grid-cols-3 sm:grid-cols-4 gap-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group hover:scale-110 active:scale-110 transition-all duration-300 active:bg-zinc-700 hover:bg-zinc-700 flex gap-2 rounded-lg bg-zinc-800 p-2 size-20 items-center justify-center"
          :style="{ '--skill-icon-color': skill.color }">
          <Icon
            :name="skill.name"
            class="!size-12 transition-colors duration-300 text-inherit"
            :class="[
              'group-hover:text-[var(--skill-icon-color)]',
              'group-active:text-[var(--skill-icon-color)]',
            ]" />
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.list-shuffle-move {
  transition: transform 0.8s ease;
}
</style>
