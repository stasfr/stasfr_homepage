<template>
  <section class="grid-cols-4 gap-4 grid">
    <div class="p-4 bg-primary rounded">
      <component :is="IconVue"></component>
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsCSS />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsHTML />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsGitHub />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsGoogle />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsNPM />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsTailwind />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsNuxt />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsJS />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsTS />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsPostgreSQL />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsPostman />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsSASS />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsNode />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsExpress />
    </div>
    <div class="p-4 bg-primary rounded">
      <UIIconsBrandsGraphQL />
    </div>
  </section>
</template>

<script setup>
const IconVue = resolveComponent("UIIconsBrandsVue");
</script>
