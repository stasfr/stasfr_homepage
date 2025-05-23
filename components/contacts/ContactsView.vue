<script setup lang="ts">
const name = ref<string>('');
const email = ref<string>('');
const subject = ref<string>('');
const message = ref<string>('');
</script>

<template>
  <section class="flex h-full items-center justify-around">
    <div
      class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between w-full p-8 bg-neutral-900 rounded-lg">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl md:text-4xl tracking-widest font-thin">
          Let's collaborate
        </h2>

        <div
          class="flex flex-row md:flex-col gap-2 md:gap-0 text-sm md:text-base">
          <a
            class="font-thin tracking-widest"
            href="mailto:sfworking@yandex.ru">
            <PrimeButton class="!p-2 md:!hidden">
              <Icon name="uil:envelope" class="!w-6 !h-6" />
            </PrimeButton>

            <span class="hidden md:block">sfworking@yandex.ru</span>
          </a>

          <a
            class="font-thin tracking-widest"
            href="https://t.me/stas_fr"
            target="_blank">
            <PrimeButton class="!p-2 md:!hidden">
              <Icon name="uil:telegram" class="!w-6 !h-6" />
            </PrimeButton>

            <span class="hidden md:block">t.me/stas_fr</span>
          </a>

          <a
            class="font-thin tracking-widest"
            href="https://github.com/stasfr"
            target="_blank">
            <PrimeButton class="!p-2 md:!hidden">
              <Icon name="uil:github" class="!w-6 !h-6" />
            </PrimeButton>

            <span class="hidden md:block">github.com/stasfr</span>
          </a>

          <a
            class="font-thin tracking-widest"
            href="https://www.linkedin.com/in/stanislav-farkash/"
            target="_blank">
            <PrimeButton class="!p-2 md:!hidden">
              <Icon name="uil:linkedin" class="!w-6 !h-6" />
            </PrimeButton>

            <span class="hidden md:block">
              linkedin.com/in/stanislav-farkash/
            </span>
          </a>
        </div>
      </div>

      <div class="flex basis-1/3 flex-col">
        <p class="text-xl tracking-widest font-thin mb-4">Say hello</p>

        <form class="space-y-4">
          <PrimeFloatLabel variant="on">
            <PrimeInputText id="name" v-model="name" fluid />
            <label for="name">Name</label>
          </PrimeFloatLabel>

          <PrimeFloatLabel variant="on">
            <PrimeInputText id="email" v-model="email" fluid />
            <label for="email">Email</label>
          </PrimeFloatLabel>

          <PrimeFloatLabel variant="on">
            <PrimeInputText id="subject" v-model="subject" fluid />
            <label for="subject">Subject</label>
          </PrimeFloatLabel>

          <PrimeFloatLabel variant="on">
            <PrimeTextarea id="message" v-model="message" fluid />
            <label for="message">Message</label>
          </PrimeFloatLabel>

          <PrimeButton label="Send" fluid />
        </form>
      </div>
    </div>
  </section>
</template>
