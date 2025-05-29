<script setup lang="ts">
const links = [
  {
    href: 'mailto:sfworking@yandex.ru',
    icon: 'uil:envelope',
    text: 'sfworking@yandex.ru',
  },
  {
    href: 'https://t.me/stas_fr',
    icon: 'uil:telegram',
    text: 't.me/stas_fr',
  },
  {
    href: 'https://github.com/stasfr',
    icon: 'uil:github',
    text: 'github.com/stasfr',
  },
  {
    href: 'https://www.linkedin.com/in/stanislav-farkash/',
    icon: 'uil:linkedin',
    text: 'linkedin.com/in/stanislav-farkash/',
  },
];

const name = ref<string>('');
const email = ref<string>('');
const subject = ref<string>('');
const message = ref<string>('');
</script>

<template>
  <section class="flex h-full flex-1 items-center justify-around">
    <div
      class="flex flex-col md:flex-row gap-4 md:gap-0 w-full md:max-w-3xl justify-between p-8 bg-neutral-900 rounded-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl md:text-4xl tracking-widest font-thin">
          Let's collaborate
        </h2>

        <div
          class="flex flex-row md:flex-col gap-2 md:gap-0 text-sm md:text-base">
          <ContactsUILinkButton
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            :icon="link.icon"
            :text="link.text" />
        </div>
      </div>

      <div class="flex basis-1/3 flex-col">
        <p class="text-xl tracking-widest font-thin mb-4">Say hello (soon)</p>

        <form class="space-y-4">
          <PrimeFloatLabel variant="on">
            <PrimeInputText id="name" v-model="name" fluid disabled />
            <label for="name">Name</label>
          </PrimeFloatLabel>

          <PrimeFloatLabel variant="on">
            <PrimeInputText id="email" v-model="email" fluid disabled />
            <label for="email">Email</label>
          </PrimeFloatLabel>

          <PrimeFloatLabel variant="on">
            <PrimeInputText id="subject" v-model="subject" fluid disabled />
            <label for="subject">Subject</label>
          </PrimeFloatLabel>

          <PrimeFloatLabel variant="on">
            <PrimeTextarea id="message" v-model="message" fluid disabled />
            <label for="message">Message</label>
          </PrimeFloatLabel>

          <PrimeButton label="Send" fluid disabled />
        </form>
      </div>
    </div>
  </section>
</template>
