<script setup>
const props = defineProps({
  timelineOptions: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="space-y-8 flex flex-col items-center">
    <Timeline
      :value="props.timelineOptions"
      pt:eventopposite:class="!flex-none"
    >
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
        >
          <i class="pi pi-check-circle"></i>
        </span>
      </template>

      <template #content="slotProps">
        <Card class="mt-4">
          <template #title>
            <p class="text-base italic font-normal">
              {{ slotProps.item.year }}
            </p>
            <p>{{ slotProps.item.title }}</p>
          </template>

          <template #subtitle>
            {{ slotProps.item.subtitle }}
          </template>

          <template #content>
            <div class="space-y-4">
              <div v-if="slotProps.item.body">
                <p>{{ slotProps.item.body }}</p>
              </div>
              <div v-if="slotProps.item.site">
                <p class="font-bold">Site</p>
                <a :href="slotProps.item.site">{{ slotProps.item.site }}</a>
              </div>
              <div v-if="slotProps.item.stack">
                <p class="font-bold">Stack</p>
                <p v-for="stackTech in slotProps.item.stack">{{ stackTech }}</p>
              </div>
            </div>
          </template>
        </Card>
      </template>
    </Timeline>

    <Button
      label="My Projects"
      icon="pi pi-bolt"
      as="router-link"
      to="/projects"
    ></Button>
  </section>
</template>
