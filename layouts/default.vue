<template>
  <div
    class="overflow-hidden flex flex-col bg-backgroundLight dark:bg-background text-black dark:text-textLight min-h-screen transition-colors duration-300"
  >
    <UIHeaderComponent class="z-50" />
    <UIDogModelComponent
      class="m-auto -mb-[64px] mt-[24px] xs:-mb-[140px] xs:-mt-[10px] md:-mb-[200px] md:-mt-[60px]"
    />
    <main
      class="box-content max-w-lg mx-auto px-4 mb-24 mt-12 min-h-[70vh] z-50"
    >
      <slot />
    </main>
    <UIFooterComponent />
  </div>
</template>

<script setup></script>
