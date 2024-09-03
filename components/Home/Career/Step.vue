<template>
  <div class="text-left grid-cols-[30px_auto] grid">
    <div><UIIconsCheck class="w-full h-full" /></div>
    <h3 class="justify-items-start px-4 italic">{{ timestampData.year }}</h3>
    <div>
      <hr
        v-if="timestampData.showLine"
        class="w-1/12 h-full bg-white mx-auto"
      />
    </div>
    <div class="pb-4 px-4 text-base">
      <h4 class="text-xl font-bold">{{ timestampData.title }}</h4>
      <p class="mb-2">{{ timestampData.texts.body }}</p>

      <p v-if="timestampData.texts.site" class="font-bold">Site</p>
      <a class="mb-2" :href="timestampData.texts.site">{{
        timestampData.texts.site
      }}</a>

      <p v-if="timestampData.texts.stack" class="font-bold">Stack</p>
      <p class="mb-2" v-for="stackTech in timestampData.texts.stack">
        {{ stackTech }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  timestampData: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
