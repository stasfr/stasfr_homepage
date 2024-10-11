<script setup></script>

<template>
  <div
    class="overflow-hidden flex flex-col min-h-screen transition-colors duration-300"
  >
    <UIHeader class="z-50" />
    <UIDogModel class="m-auto -mb-12" />
    <main
      class="box-content max-w-lg mx-auto px-4 mb-24 mt-12 min-h-[70vh] z-50"
    >
      <slot />
    </main>
    <UIFooter />
  </div>
</template>
