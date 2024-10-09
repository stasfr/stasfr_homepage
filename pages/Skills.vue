<script setup>
const IconCSS = resolveComponent("UIIconsBrandsCSS");
const IconExpress = resolveComponent("UIIconsBrandsExpress");
const IconGit = resolveComponent("UIIconsBrandsGit");
const IconGoogle = resolveComponent("UIIconsBrandsGoogle");
const IconGraphQL = resolveComponent("UIIconsBrandsGraphQL");
const IconHTML = resolveComponent("UIIconsBrandsHTML");
const IconJS = resolveComponent("UIIconsBrandsJS");
const IconNode = resolveComponent("UIIconsBrandsNode");
const IconNPM = resolveComponent("UIIconsBrandsNPM");
const IconNuxt = resolveComponent("UIIconsBrandsNuxt");
const IconPostgreSQL = resolveComponent("UIIconsBrandsPostgreSQL");
const IconPostman = resolveComponent("UIIconsBrandsPostman");
const IconSASS = resolveComponent("UIIconsBrandsSASS");
const IconTailwind = resolveComponent("UIIconsBrandsTailwind");
const IconTS = resolveComponent("UIIconsBrandsTS");
const IconVue = resolveComponent("UIIconsBrandsVue");
const IconChartJS = resolveComponent("UIIconsBrandsChartJS");
const IconDocker = resolveComponent("UIIconsBrandsDocker");
const IconSupabase = resolveComponent("UIIconsBrandsSupabase");
const IconFigma = resolveComponent("UIIconsBrandsFigma");

const icons = ref([
  { icon: shallowRef(IconCSS), title: "CSS" },
  { icon: shallowRef(IconExpress), title: "Express" },
  { icon: shallowRef(IconGit), title: "Git" },
  { icon: shallowRef(IconGoogle), title: "Google" },
  { icon: shallowRef(IconGraphQL), title: "GraphQL" },
  { icon: shallowRef(IconHTML), title: "HTML" },
  { icon: shallowRef(IconJS), title: "JS" },
  { icon: shallowRef(IconNode), title: "Node.js" },
  { icon: shallowRef(IconNPM), title: "NPM" },
  { icon: shallowRef(IconNuxt), title: "Nuxt" },
  { icon: shallowRef(IconPostgreSQL), title: "PostgreSQL" },
  { icon: shallowRef(IconPostman), title: "Postman" },
  { icon: shallowRef(IconSASS), title: "SASS" },
  { icon: shallowRef(IconTailwind), title: "Tailwind" },
  { icon: shallowRef(IconTS), title: "TS" },
  { icon: shallowRef(IconVue), title: "Vue" },
  { icon: shallowRef(IconChartJS), title: "Chart.js" },
  { icon: shallowRef(IconDocker), title: "Docker" },
  { icon: shallowRef(IconSupabase), title: "Supabase" },
  { icon: shallowRef(IconFigma), title: "Figma" },
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
    <h2
      v-motion-slide-top
      class="block text-3xl text-center underline decoration-border decoration-4 underline-offset-8"
    >
      My skills
    </h2>

    <div class="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-6 grid">
      <UIIconsIconBrand
        v-for="icon in icons"
        :icon="icon.icon"
        :title="icon.title"
        key="icon.title"
        :delay="Math.floor(Math.random() * 2) * 100"
      />
    </div>
  </section>
</template>
