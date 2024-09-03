<template>
  <div
    class="overflow-hidden flex flex-col bg-background text-textLight min-h-screen text-lg"
  >
    <HeaderComponent />
    <main class="flex flex-auto my-24">
      <slot />
    </main>
  </div>
</template>

<script setup></script>
