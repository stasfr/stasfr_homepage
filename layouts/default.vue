<script setup lang="ts">
const particlesColor = computed(() =>
  useColorMode().value === 'dark' ? '#FFFFFF' : '#000000'
);
</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <AppHeader />

    <main class="container mx-auto p-2 flex-1 flex flex-col">
      <slot />
    </main>

    <div class="absolute inset-0 w-full h-full z-[-1] pointer-events-none">
      <SparklesBg
        background="transparent"
        :min-size="0.8"
        :max-size="2"
        :particle-density="800"
        :particle-color="particlesColor" />
    </div>
  </div>
</template>
