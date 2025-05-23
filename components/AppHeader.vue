<script setup lang="ts">
const router = useRouter();

function goTo(path: string) {
  router.push(path);
}

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
  <div class="bg-neutral-800">
    <div class="container mx-auto flex justify-between items-center p-2">
      <PrimeButton
        class="p-0!"
        label="stas_fr dev"
        component="h1"
        variant="link"
        @click="goTo('/')" />

      <nav class="hidden md:block">
        <PrimeButton label="Skills" variant="link" @click="goTo('/skills')" />

        <PrimeButton
          label="Projects"
          variant="link"
          @click="goTo('/projects')" />
        <PrimeButton
          label="Contacts"
          variant="link"
          @click="goTo('/contacts')" />
      </nav>

      <PrimeButton class="md:hidden! p-2!" type="button" @click="toggleMenu">
        <Icon name="prime:ellipsis-v" />
      </PrimeButton>

      <PrimeMenu id="overlay_menu" ref="menu" :model="items" :popup="true">
        <template #item="{ item, props }">
          <router-link v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </PrimeMenu>
    </div>
  </div>
</template>
