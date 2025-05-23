<template>
  <div class="min-h-screen flex flex-col gap-2">
    <AppHeader />

    <main class="container mx-auto px-2 flex-1">
      <slot />
    </main>
  </div>
</template>
