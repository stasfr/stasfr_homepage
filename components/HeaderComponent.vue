<template>
  <header
    class="absolute w-full left-0 top-0 z-50 border-b-[1px] border-border"
  >
    <div
      class="flex min-h-16 items-center justify-between box-border max-w-[1000px] my-0 mx-auto px-4"
    >
      <nuxt-link to="/" class="font-bold">stas_fr</nuxt-link>
      <nav>
        <ul class="flex flex-wrap">
          <li class="mr-4"><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li class="mr-4"><nuxt-link to="/skills">Skills</nuxt-link></li>
          <li class=""><nuxt-link to="/contacts">Contacts</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>
