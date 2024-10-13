import type { Project } from "@/types/project";

export default function useProjects() {
  const projects = ref<Project[]>([
    {
      title: "Saviour Care",
      link: "https://stasfr.github.io/Saviour-Care/",
      img: "/img/projects/saviour_care.webp",
      description: "Adaptive landing with custom burger menu",
      stack: "Vanilla HTML, CSS",
      category: "landing",
    },
    {
      title: "Wine and Dices",
      link: "https://github.com/stasfr/wad-reborn",
      img: "/img/projects/wad.webp",
      description: "Dream project about Wine and Dice Throne",
      stack: "Vue3, Supabase",
      category: "pet",
    },
    {
      title: "Goglobal",
      link: "https://goglobal.world/",
      img: "/img/projects/goglobal.webp",
      description: "Vue3.js SPA, made little components",
      stack: "Vue3, JS",
      category: "commercial",
    },
    {
      title: "Alef test",
      link: "https://github.com/stasfr/alef-test",
      img: "/img/projects/alef_test.webp",
      description: "Test project for job interview",
      stack: "Nuxt, TypeScript, Custom form componetns",
      category: "test",
    },
    {
      title: "Todo App",
      link: "https://github.com/stasfr/todo_app_test",
      img: "/img/projects/todo_app.webp",
      description: "Test project for job interview",
      stack: "Vue 3, TypeScript, AutoImports, Tailwind",
      category: "test",
    },
    {
      title: "Crypto app",
      link: "https://github.com/stasfr/crypto-app",
      img: "/img/projects/crypto_app.webp",
      description: "Test project for job interview",
      stack: "Nuxt, TypeScript, Primevue, Chart.js, Docker",
      category: "test",
    },
    {
      title: "Crypto app backend",
      link: "https://github.com/stasfr/crypto-app_backend",
      img: "/img/projects/nestjs_logo.webp",
      description: "Backend on Nest.js for Crypto app",
      stack: "Nest, TypeScript, Prisma, Axios, JWT",
      category: "test",
    },
  ]);

  const categoreis = {
    landing: { bageSeverity: "contrast", title: "My landing pages" },
    pet: { bageSeverity: "warn", title: "My pet projects" },
    commercial: { bageSeverity: "success", title: "My commercial projects" },
    test: { bageSeverity: "info", title: "My test tasks for jobs" },
  };

  const projectsCount = computed(() => projects.value.length);
  const landingProjectsCount = computed(
    () =>
      projects.value.filter((project) => project.category === "landing").length
  );
  const petProjectsCount = computed(
    () => projects.value.filter((project) => project.category === "pet").length
  );
  const commercialProjectsCount = computed(
    () =>
      projects.value.filter((project) => project.category === "commercial")
        .length
  );
  const testProjectsCount = computed(
    () => projects.value.filter((project) => project.category === "test").length
  );

  function getProjectsByCategory(category: string) {
    return projects.value.filter((project) => project.category === category);
  }

  return {
    projects,
    categoreis,
    projectsCount,
    landingProjectsCount,
    petProjectsCount,
    commercialProjectsCount,
    testProjectsCount,
    getProjectsByCategory,
  };
}
