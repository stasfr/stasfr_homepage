<script setup lang="ts">
type Props = {
  href: string;
  icon: string;
  text: string;
};

const props = defineProps<Props>();
</script>

<template>
  <a class="font-thin tracking-widest" :href="props.href">
    <PrimeButton class="!p-2 md:!hidden">
      <Icon :name="props.icon" class="!w-6 !h-6" />
    </PrimeButton>

    <span class="hidden md:block">{{ props.text }}</span>
  </a>
</template>
