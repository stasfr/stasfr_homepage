<template>
  <div
    class="overflow-hidden flex flex-col bg-background text-textLight min-h-screen"
  >
    <HeaderComponent />
    <main class="my-24 box-content max-w-lg mx-auto px-4">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
