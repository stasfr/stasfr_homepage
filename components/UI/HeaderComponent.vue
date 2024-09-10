<template>
  <header class="absolute w-full left-0 top-0 border-b-[1px] border-border">
    <div
      class="flex min-h-12 items-center justify-between box-content max-w-lg mx-auto px-4"
    >
      <nuxt-link to="/" class="font-bold">stas_fr</nuxt-link>
      <nav class="hidden sm:block">
        <ul class="flex flex-wrap space-x-4">
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li><nuxt-link to="/skills">Skills</nuxt-link></li>
          <li><nuxt-link to="/contacts">Contacts</nuxt-link></li>
        </ul>
      </nav>
      <div class="flex gap-3">
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            @click="
              setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
            "
          />
          <UIIconsLight />
          <UIIconsDark />
        </label>
        <label
          class="btn btn-circle swap swap-rotate border-none bg-inherit sm:hidden text-textLight"
        >
          <input
            v-model="checkbox"
            type="checkbox"
            @click="mobileMenu = !mobileMenu"
          />
          <UIIconsBurger />
          <UIIconsClose />
        </label>
      </div>
      <!-- mobile menu -->
      <div
        v-if="mobileMenu"
        class="fixed right-4 top-16 w-full max-w-[150px] rounded-md bg-primary text-textDark"
      >
        <ul class="flex flex-col gap-1 mx-4 my-2 space-y-2">
          <li>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/projects"
              >Projects</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/skills"
              >Skills</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/contacts"
              >Contacts</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenu = ref(false);
const checkbox = ref(false);

const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme;
  console.log(useColorMode().preference);
};
</script>
