<script setup lang="ts">
const themeType = ref<boolean>(false);

onMounted(() => {
  themeType.value = useColorMode().preference === "dark" ? true : false;
});

watch(themeType, (newThemeType) => {
  useColorMode().preference = newThemeType ? "dark" : "light";
});

const projectsStore = useProjects();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Skills",
    icon: "pi pi-star",
    to: "/skills",
  },
  {
    label: "Projects",
    icon: "pi pi-hammer",
    items: [
      {
        label: "All projects",
        icon: "pi pi-hammer",
        severity: "secondary",
        badge: projectsStore.projectsCount,
        to: "/projects",
      },
      {
        label: "Landings",
        icon: "pi pi-users",
        badge: projectsStore.landingProjectsCount,
        severity: projectsStore.categoreis.landing.bageSeverity,
        to: "/projects/landing",
      },
      {
        label: "Pet projects",
        icon: "pi pi-lightbulb",
        badge: projectsStore.petProjectsCount,
        severity: projectsStore.categoreis.pet.bageSeverity,
        to: "/projects/pet",
      },
      {
        label: "Commercial",
        icon: "pi pi-shopping-bag",
        badge: projectsStore.commercialProjectsCount,
        severity: projectsStore.categoreis.commercial.bageSeverity,
        to: "/projects/commercial",
      },
      {
        label: "Test tasks",
        icon: "pi pi-list-check",
        badge: projectsStore.testProjectsCount,
        severity: projectsStore.categoreis.test.bageSeverity,
        to: "/projects/test",
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    to: "/contacts",
  },
]);
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <nuxt-link to="/" class="font-bold mr-8"><h1>stas_fr</h1></nuxt-link>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <nuxt-link
        v-ripple
        class="flex items-center"
        v-bind="props.action"
        :to="item.to"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          :class="{ 'ml-auto': !root, 'ml-2': root }"
          :value="item.badge"
          :severity="item.severity"
        />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="[
            'pi pi-angle-down',
            { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
          ]"
        ></i>
      </nuxt-link>
    </template>

    <template #end>
      <nav class="flex items-center gap-2">
        <i class="pi pi-sun"></i>
        <ToggleSwitch v-model="themeType" />
        <i class="pi pi-moon"></i>
      </nav>
    </template>
  </Menubar>
</template>
