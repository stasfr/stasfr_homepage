<template>
  <div class="mb-4">
    <h2
      class="text-3xl text-left underline decoration-border decoration-4 underline-offset-8 mb-4"
    >
      Career
    </h2>
    <div>
      <HomeCareerStep
        v-for="(timestamp, index) in timeline"
        :timestampData="timestamp"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup>
const timeline = ref([
  {
    year: 2000,
    title: "I was born",
    text: "I was born and could build a PC with closed eyes.",
  },
  {
    year: 2024,
    title: "Im doing this site",
    text: "im writing this",
  },
]);
</script>
