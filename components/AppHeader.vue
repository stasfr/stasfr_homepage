<script setup lang="ts">
function toggleMenu(event: MouseEvent) {
  if (!menu.value) {
    return;
  }
  menu.value.toggle(event);
}

const menu = useTemplateRef('menu');
const items = ref([
  {
    label: 'Skills',
    route: '/skills',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'Contacts',
    route: '/contacts',
  },
]);
</script>

<template>
  <div class="bg-zinc-900/50 backdrop-blur-xs">
    <div class="container mx-auto flex justify-between items-center p-2">
      <NuxtLink to="/">
        <PrimeButton
          class="p-0!"
          label="stas_fr dev"
          component="h1"
          variant="link" />
      </NuxtLink>

      <nav class="hidden md:block">
        <NuxtLink to="/skills">
          <PrimeButton label="Skills" variant="link" />
        </NuxtLink>

        <NuxtLink to="/projects">
          <PrimeButton label="Projects" variant="link" />
        </NuxtLink>

        <NuxtLink to="/contacts">
          <PrimeButton label="Contacts" variant="link" />
        </NuxtLink>
      </nav>

      <PrimeButton class="md:hidden! p-2!" type="button" @click="toggleMenu">
        <Icon name="prime:ellipsis-v" />
      </PrimeButton>

      <PrimeMenu id="overlay_menu" ref="menu" :model="items" :popup="true">
        <template #item="{ item, props }">
          <NuxtLink v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </NuxtLink>
        </template>
      </PrimeMenu>
    </div>
  </div>
</template>
