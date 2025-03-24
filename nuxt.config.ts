import tailwindcss from '@tailwindcss/vite';
import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
    components: {
      prefix: 'Prime',
    },
  },
});
