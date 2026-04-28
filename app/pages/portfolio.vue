<script setup lang="ts">
interface IPortfolioProject {
  title: string;
  link: string;
  description: string;
  tag: 'pet-project' | 'pari' | 'ggw' | 'ac';
}

const projects: IPortfolioProject[] = [
  {
    title: 'Git-Friday',
    link: 'https://github.com/stasfr/git-friday',
    description:
      'AI-powered CLI tool for analyzing git commits and generating reports.',
    tag: 'pet-project',
  },
  {
    title: 'Partner Portal',
    link: 'https://skpari.ru/',
    description:
      'Personal account for PARI insurance company partners. Partners can manage their data, track sales, and receive up-to-date information.',
    tag: 'pari',
  },
  {
    title: 'Employee Portal',
    link: 'https://skpari.ru/',
    description:
      'Internal personal account for PARI IC employees. Designed for managing insurance policies, customer databases, and other work processes.',
    tag: 'pari',
  },
  {
    title: 'Venture Capital Platform',
    link: 'https://ggw.ru/',
    description:
      'Platform for GGW venture investments with OpenAI and Google APIs integration for data analysis and investment decision support.',
    tag: 'ggw',
  },
  {
    title: 'Official Website',
    link: 'https://ac.gov.ru/',
    description:
      'Development of the official public website of the Analytical Center under the Government of the Russian Federation.',
    tag: 'ac',
  },
  {
    title: 'Corporate Portal',
    link: 'https://ac.gov.ru/',
    description:
      'Corporate portal for AC RF employees. Designed for internal collaboration, document exchange, and information sharing.',
    tag: 'ac',
  },
  {
    title: 'Project Management System',
    link: 'https://ac.gov.ru/',
    description:
      'MS Project alternative for internal use with Gantt charts and dashboards.',
    tag: 'ac',
  },
  {
    title: 'Analytical Dashboards Portal',
    link: 'https://ac.gov.ru/',
    description:
      'Assembly of dashboards for various indicators, as services and as separate standalone applications for closed circuits.',
    tag: 'ac',
  },
];

const openSourceProjects = computed(() =>
  projects.filter((project) => project.tag === 'pet-project'),
);

const pariProjects = computed(() =>
  projects.filter((project) => project.tag === 'pari'),
);

const ggwProjects = computed(() =>
  projects.filter((project) => project.tag === 'ggw'),
);

const acProjects = computed(() =>
  projects.filter((project) => project.tag === 'ac'),
);
</script>

<template>
  <UPage>
    <UPageHeader title="My projects" />

    <UPageBody>
      <h3 class="text-xl">Open source</h3>
      <UPageGrid>
        <UPageCard
          v-for="project in openSourceProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          spotlight
          spotlight-color="neutral"
          :to="project.link"
        />
      </UPageGrid>

      <h3 class="text-xl">PARI IC</h3>
      <UPageGrid>
        <UPageCard
          v-for="project in pariProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          spotlight
          spotlight-color="neutral"
          :to="project.link"
        />
      </UPageGrid>

      <h3 class="text-xl">GoGlobal World</h3>
      <UPageGrid>
        <UPageCard
          v-for="project in ggwProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          spotlight
          spotlight-color="neutral"
          :to="project.link"
        />
      </UPageGrid>

      <h3 class="text-xl">
        Analytical Center under the Government of the Russian Federation
      </h3>
      <UPageGrid>
        <UPageCard
          v-for="project in acProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          spotlight
          spotlight-color="neutral"
          :to="project.link"
        />
      </UPageGrid>
    </UPageBody>
  </UPage>
</template>
