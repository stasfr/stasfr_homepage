<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
  {
    label: 'See my portfolio',
    to: '/portfolio',
    trailingIcon: 'i-lucide-arrow-right',
    color: 'neutral',
  },
  {
    label: "Let's talk",
    to: '/contacts',
    variant: 'outline',
    trailingIcon: 'i-lucide-phone',
    color: 'neutral',
  },
]);
</script>

<template>
  <UPageHero
    title="With greater experience comes greater salary"
    :links="links"
    class="flex-1 flex justify-center items-center z-50"
  />

  <UiParticles
    :particle-count="200"
    :particle-spread="10"
    :speed="0.05"
    :particle-colors="['#ffffff']"
    :move-particles-on-hover="false"
    :particle-hover-factor="0.5"
    :alpha-particles="true"
    :particle-base-size="100"
    :size-randomness="1"
    :camera-distance="20"
    :disable-rotation="false"
  />
</template>
