<script setup>
const telegramContacts = ref({
  title: "Telegram",
  link: "https://t.me/stas_fr",
  buttonTitle: "Message me",
});

const githubContacts = ref({
  title: "Github",
  link: "https://github.com/stasfr",
  buttonTitle: "Follow me",
});

const emailContacts = ref({
  title: "Yandex",
  link: "mailto:sfworking@yandex.ru",
  buttonTitle: "Email me",
});
</script>

<template>
  <section class="flex flex-col space-y-8">
    <h2
      v-motion-slide-top
      class="block text-3xl text-center underline decoration-border decoration-4 underline-offset-8"
    >
      Let's talk
    </h2>

    <div class="grid grid-cols-2 gap-6 items-center" v-motion-slide-bottom>
      <Contact
        :title="telegramContacts.title"
        :link="telegramContacts.link"
        :buttonTitle="telegramContacts.buttonTitle"
      />

      <Contact
        :title="githubContacts.title"
        :link="githubContacts.link"
        :buttonTitle="githubContacts.buttonTitle"
      />

      <Contact
        :title="emailContacts.title"
        :link="emailContacts.link"
        :buttonTitle="emailContacts.buttonTitle"
      />
    </div>
  </section>
</template>
