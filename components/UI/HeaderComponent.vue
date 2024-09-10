<template>
  <header class="absolute w-full left-0 top-0 border-b-[1px] border-border">
    <div
      class="flex min-h-12 items-center justify-between box-content max-w-lg mx-auto px-4"
    >
      <nuxt-link to="/" class="font-bold">stas_fr</nuxt-link>
      <nav class="hidden md:block">
        <ul class="flex flex-wrap space-x-4">
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li><nuxt-link to="/skills">Skills</nuxt-link></li>
          <li><nuxt-link to="/contacts">Contacts</nuxt-link></li>
        </ul>
      </nav>
      <div class="flex gap-3">
        <label
          class="btn btn-circle swap swap-rotate border-none bg-inherit md:hidden text-textLight"
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
      <transition name="fade"
        ><div
          v-if="mobileMenu"
          class="fixed right-4 top-16 w-full max-w-[150px] rounded-md"
        >
          <ul class="flex flex-col gap-1">
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/blog"
            >
              <li class="p-2">
                <span>Blog</span>
              </li>
            </nuxt-link>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/works"
            >
              <li class="p-2">
                <span>Works</span>
              </li>
            </nuxt-link>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/skills"
            >
              <li class="p-2">
                <span>Skills</span>
              </li>
            </nuxt-link>
            <nuxt-link
              @click="(checkbox = !checkbox), (mobileMenu = !mobileMenu)"
              to="/contact"
            >
              <li class="p-2">
                <span>Contact</span>
              </li>
            </nuxt-link>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
const mobileMenu = ref(false);
const checkbox = ref(false);
</script>
