<script setup lang="ts">
import type { TimelineStamp } from "@/types/timeline";
interface Props {
  timelineOptions: TimelineStamp[];
}

const props = defineProps<Props>();
</script>

<template>
  <section class="text-center">
    <Card>
      <template #title>
        <UISectionTitle title="My timeline" />
      </template>

      <template #content>
        <Timeline
          :value="props.timelineOptions"
          pt:eventopposite:class="!flex-none"
          class="my-4"
        >
          <template #marker="slotProps">
            <span
              class="flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm"
            >
              <i class="pi pi-check-circle"></i>
            </span>
          </template>

          <template #content="slotProps">
            <Card class="mb-4 dark:border-zinc-800 border-[1px]">
              <template #title>
                <p class="text-base italic font-normal mb-2">
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
                    <p v-for="stackTech in slotProps.item.stack">
                      {{ stackTech }}
                    </p>
                  </div>
                </div>
              </template>
            </Card>
          </template>
        </Timeline>
      </template>

      <template #footer>
        <Button
          label="My Projects"
          icon="pi pi-hammer"
          as="router-link"
          to="/projects"
        />
      </template>
    </Card>
  </section>
</template>
