<template>
  <UPage>
    <UPageHeader title="Let's keep in touch" />

    <UPageBody>
      <UPageGrid>
        <UPageCard
          title="sfworking@yandex.ru"
          description="Mail me"
          icon="i-lucide-mail"
          to="mailto:sfworking@yandex.ru"
          target="_blank"
          spotlight
          spotlight-color="neutral"
        />

        <UPageCard
          title="t.me/stas_fr"
          description="Telegram"
          icon="i-simple-icons-telegram"
          to="https://t.me/stas_fr"
          target="_blank"
          spotlight
          spotlight-color="neutral"
        />

        <UPageCard
          title="github.com/stasfr"
          description="GitHub"
          icon="i-simple-icons-github"
          to="https://github.com/stasfr"
          target="_blank"
          spotlight
          spotlight-color="neutral"
        />
      </UPageGrid>
    </UPageBody>
  </UPage>
</template>
