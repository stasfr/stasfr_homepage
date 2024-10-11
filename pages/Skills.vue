<script setup lang="ts">
const icons = ref<{ name: string; title: string }[]>([
  { name: "flowbite:css-solid", title: "CSS" },
  { name: "simple-icons:express", title: "Express" },
  { name: "bi:git", title: "Git" },
  { name: "akar-icons:google-fill", title: "Google" },
  { name: "akar-icons:graphql-fill", title: "GraphQL" },
  { name: "flowbite:html-solid", title: "HTML" },
  { name: "akar-icons:javascript-fill", title: "JS" },
  { name: "akar-icons:node-fill", title: "Node.js" },
  { name: "akar-icons:npm-fill", title: "NPM" },
  { name: "simple-icons:nuxtdotjs", title: "Nuxt" },
  { name: "akar-icons:postgresql-fill", title: "PostgreSQL" },
  { name: "simple-icons:postman", title: "Postman" },
  { name: "akar-icons:sass-fill", title: "SASS" },
  { name: "flowbite:tailwind-solid", title: "Tailwind" },
  { name: "akar-icons:typescript-fill", title: "TS" },
  { name: "akar-icons:vue-fill", title: "Vue" },
  { name: "file-icons:chartjs", title: "Chart.js" },
  { name: "ant-design:docker-outlined", title: "Docker" },
  { name: "ri:supabase-fill", title: "Supabase" },
  { name: "akar-icons:figma-fill", title: "Figma" },
]);

const shuffleSkills = () => {
  icons.value.sort(() => Math.random() - 0.5);
};

onMounted(() => {
  shuffleSkills();
});
</script>

<template>
  <section class="flex flex-col space-y-8 items-center">
    <UISectionTitle title="My skills" />

    <div class="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-6 grid">
      <Button
        v-motion-pop-visible
        :delay="Math.floor(Math.random() * 2) * 100"
        class="flex flex-col size-24"
        v-for="icon in icons"
        key="icon.title"
      >
        <Icon :name="icon.name" class="size-12" />
        <p>{{ icon.title }}</p>
      </Button>
    </div>
  </section>
</template>
