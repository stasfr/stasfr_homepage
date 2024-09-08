<template>
  <header class="absolute w-full left-0 top-0 border-b-[1px] border-border">
    <div
      class="flex min-h-12 items-center justify-between box-content max-w-lg mx-auto px-4"
    >
      <nuxt-link to="/" class="font-bold">stas_fr</nuxt-link>
      <nav>
        <ul class="flex flex-wrap space-x-4">
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li><nuxt-link to="/skills">Skills</nuxt-link></li>
          <li><nuxt-link to="/contacts">Contacts</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>
