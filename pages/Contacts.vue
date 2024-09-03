<template>
  <div class="box-content w-[440px] mx-auto px-4 text-center">
    <h2
      class="text-3xl text-left underline decoration-border decoration-4 underline-offset-8 mb-4"
    >
      In touch
    </h2>
    <Contacts v-for="contact in contacts" :contact="contact" />
  </div>
</template>

<script setup>
const contacts = ref([
  { title: "Telegram", link: "https://t.me/stas_fr", btn: "Message me" },
  { title: "Github", link: "https://github.com/stasfr", btn: "Follow me" },
]);
</script>
