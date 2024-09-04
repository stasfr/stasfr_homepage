<template>
  <section class="flex flex-col space-y-8">
    <h2
      class="block text-3xl text-left underline decoration-border decoration-4 underline-offset-8"
    >
      In touch
    </h2>
    <div class="space-y-4">
      <Contacts v-for="contact in contacts" :contact="contact" />
    </div>
  </section>
</template>

<script setup>
const contacts = ref([
  { title: "Telegram", link: "https://t.me/stas_fr", btn: "Message me" },
  { title: "Github", link: "https://github.com/stasfr", btn: "Follow me" },
]);
</script>
