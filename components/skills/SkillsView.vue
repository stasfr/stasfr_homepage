<script setup lang="ts">
const skills = [
  {
    name: 'flowbite:css-solid',
    title: 'CSS',
    hoverClass: 'hover:text-[#0065f4]',
  },
  {
    name: 'simple-icons:express',
    title: 'Express',
  },
  { name: 'bi:git', title: 'Git', hoverClass: 'hover:text-[#F1502F]' },
  {
    name: 'akar-icons:google-fill',
    title: 'Google',
    hoverClass: 'hover:text-[#4285F4]',
    // hoverClass: 'hover:text-[#FBBC05]',
    // hoverClass: 'hover:text-[#34A853]',
    // hoverClass: 'hover:text-[#EA4335]',
  },
  {
    name: 'akar-icons:graphql-fill',
    title: 'GraphQL',
    hoverClass: 'hover:text-[#E10098]',
  },
  {
    name: 'flowbite:html-solid',
    title: 'HTML',
    hoverClass: 'hover:text-[#F06529]',
  },
  {
    name: 'akar-icons:javascript-fill',
    title: 'JS',
    hoverClass: 'hover:text-[#F0DB4F]',
  },
  {
    name: 'akar-icons:node-fill',
    title: 'Node.js',
    hoverClass: 'hover:text-[#339933]',
  },
  {
    name: 'akar-icons:npm-fill',
    title: 'NPM',
    hoverClass: 'hover:text-[#CC3534]',
  },
  {
    name: 'simple-icons:nuxtdotjs',
    title: 'Nuxt',
    hoverClass: 'hover:text-[#00dc82]',
  },
  {
    name: 'akar-icons:postgresql-fill',
    title: 'PostgreSQL',
    hoverClass: 'hover:text-[#336791]',
  },
  {
    name: 'simple-icons:postman',
    title: 'Postman',
    hoverClass: 'hover:text-[#EF5B25]',
  },
  {
    name: 'akar-icons:sass-fill',
    title: 'SASS',
    hoverClass: 'hover:text-[#CD6799]',
  },
  {
    name: 'flowbite:tailwind-solid',
    title: 'Tailwind',
    hoverClass: 'hover:text-sky-400',
  },
  {
    name: 'akar-icons:typescript-fill',
    title: 'TS',
    hoverClass: 'hover:text-[#3178c6]',
  },
  {
    name: 'akar-icons:vue-fill',
    title: 'Vue',
    hoverClass: 'hover:text-[#42b883]',
  },
  {
    name: 'file-icons:chartjs',
    title: 'Chart.js',
    hoverClass: 'hover:text-[#ff6384]',
  },
  {
    name: 'ant-design:docker-outlined',
    title: 'Docker',
    hoverClass: 'hover:text-[#1D63ED]',
  },
  {
    name: 'ri:supabase-fill',
    title: 'Supabase',
    hoverClass: 'hover:text-[#3bce8d]',
  },
  {
    name: 'akar-icons:figma-fill',
    title: 'Figma',
    hoverClass: 'hover:text-[#f24e1e]',
    // hoverClass: 'hover:text-[#ff7262]',
    // hoverClass: 'hover:text-[#a259ff]',
    // hoverClass: 'hover:text-[#1abcfe]',
    // hoverClass: 'hover:text-[#0acf83]',
  },
];
</script>

<template>
  <section class="flex h-full items-center justify-around">
    <div class="flex flex-col gap-4 p-8 bg-neutral-900 rounded-lg">
      <h2 class="text-2xl md:text-4xl tracking-widest font-thin">My stack</h2>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="hover:scale-110 transition-all duration-300 hover:bg-neutral-700 flex gap-2 rounded-lg bg-neutral-800 p-2 size-20 items-center justify-center"
          :class="[skill.hoverClass]">
          <Icon :name="skill.name" class="!size-12" />
        </div>
      </div>
    </div>
  </section>
</template>
