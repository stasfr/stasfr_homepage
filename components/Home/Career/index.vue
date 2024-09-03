<template>
  <div class="mb-4">
    <h2
      class="text-3xl text-left underline decoration-border decoration-4 underline-offset-8 mb-4"
    >
      Career
    </h2>
    <div>
      <HomeCareerStep v-for="step in 15" :num="step" />
    </div>
    <hr />
  </div>
</template>

<script setup></script>

<style></style>
