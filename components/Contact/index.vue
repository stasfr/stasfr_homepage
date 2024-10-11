<script setup lang="ts">
interface Props {
  title: string;
  link: string;
  buttonTitle: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h3 class="text-xl">{{ props.title }}</h3>
  <Button as="a" :href="props.link" :label="props.buttonTitle" />
</template>
