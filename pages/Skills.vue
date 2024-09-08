<template>
  <section class="grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-6 grid">
    <UIIconsIconBrand
      v-for="icon in icons"
      :icon="icon.icon"
      :title="icon.title"
    />
  </section>
</template>

<script setup>
const IconCSS = resolveComponent("UIIconsBrandsCSS");
const IconExpress = resolveComponent("UIIconsBrandsExpress");
const IconGitHub = resolveComponent("UIIconsBrandsGitHub");
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

const icons = [
  { icon: IconCSS, title: "CSS" },
  { icon: IconExpress, title: "Express" },
  { icon: IconGitHub, title: "GitHub" },
  { icon: IconGoogle, title: "Google" },
  { icon: IconGraphQL, title: "GraphQL" },
  { icon: IconHTML, title: "HTML" },
  { icon: IconJS, title: "JS" },
  { icon: IconNode, title: "Node.js" },
  { icon: IconNPM, title: "NPM" },
  { icon: IconNuxt, title: "Nuxt" },
  { icon: IconPostgreSQL, title: "PostgreSQL" },
  { icon: IconPostman, title: "Postman" },
  { icon: IconSASS, title: "SASS" },
  { icon: IconTailwind, title: "Tailwind" },
  { icon: IconTS, title: "TS" },
  { icon: IconVue, title: "Vue" },
];
</script>
