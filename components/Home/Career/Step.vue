<template>
  <div class="mb-4 step__grid">
    <div><UIIconsCheck /></div>
    <div class="text=left justify-items-start">step # {{ props.num }}</div>
    <div class="relative">
      <hr class="absolute top-0 left-0 w-full h-full" />
    </div>
    <div>bla bla bla</div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: {
    type: Number,
    required: true,
  },
});
</script>
<style>
.step__grid {
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows: 30px auto;
}
</style>
