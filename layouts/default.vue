<template>
  <div
    class="overflow-hidden flex flex-col bg-background text-textLight min-h-screen"
  >
    <UIHeaderComponent />
    <main class="box-content max-w-lg mx-auto px-4 my-24 min-h-[70vh]">
      <slot />
    </main>
    <UIFooterComponent />
  </div>
</template>

<script setup></script>
