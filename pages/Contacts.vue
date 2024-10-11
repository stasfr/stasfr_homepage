<script setup lang="ts">
import type { Contact } from "@/types/contact";

const telegramContacts = ref<Contact>({
  title: "Telegram",
  link: "https://t.me/stas_fr",
  buttonTitle: "Message me",
});

const githubContacts = ref<Contact>({
  title: "Github",
  link: "https://github.com/stasfr",
  buttonTitle: "Follow me",
});

const emailContacts = ref<Contact>({
  title: "Yandex",
  link: "mailto:sfworking@yandex.ru",
  buttonTitle: "Email me",
});
</script>

<template>
  <section class="flex flex-col space-y-8">
    <UISectionTitle title="Let's talk" class="text-center" />

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
