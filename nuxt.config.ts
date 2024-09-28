import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
  ],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  css: ["primeicons/primeicons.css"],
});
