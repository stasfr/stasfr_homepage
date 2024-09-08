<template>
  <section class="grid-cols-4 gap-4 grid">
    <UIIconsIconBrand v-for="icon in icons" :icon="icon" />
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
  IconCSS,
  IconExpress,
  IconGitHub,
  IconGoogle,
  IconGraphQL,
  IconHTML,
  IconJS,
  IconNode,
  IconNPM,
  IconNuxt,
  IconPostgreSQL,
  IconPostman,
  IconSASS,
  IconTailwind,
  IconTS,
  IconVue,
];
</script>
