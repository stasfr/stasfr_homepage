import type { Project } from "@/types/project";

export default function useProjects() {
  const projects = ref<Project[]>([
    {
      title: "Saviour Care",
      link: "https://stasfr.github.io/Saviour-Care/",
      img: "/img/projects/saviour_care.png",
      description: "Adaptive landing with custom burger menu",
      stack: "Vanilla HTML, CSS",
      category: "Landing page",
    },
    {
      title: "Wine and Dices",
      link: "https://github.com/stasfr/wad-reborn",
      img: "/img/projects/wad.png",
      description: "Dream project about Wine and Dice Throne",
      stack: "Vue3, Supabase",
      category: "Pet project",
    },
    {
      title: "Goglobal",
      link: "https://goglobal.world/",
      img: "/img/projects/goglobal.png",
      description: "Vue3.js SPA, made little components",
      stack: "Vue3, JS",
      category: "Commercial project",
    },
    {
      title: "Alef test",
      link: "https://github.com/stasfr/alef-test",
      img: "/img/projects/alef_test.png",
      description: "Test project for job interview",
      stack: "Nuxt, TypeScript, Custom form componetns",
      category: "Test project",
    },
    {
      title: "Todo App",
      link: "https://github.com/stasfr/todo_app_test",
      img: "/img/projects/todo_app.png",
      description: "Test project for job interview",
      stack: "Vue 3, TypeScript, AutoImports, Tailwind",
      category: "Test project",
    },
    {
      title: "Crypto app",
      link: "https://github.com/stasfr/crypto-app",
      img: "/img/projects/crypto_app.png",
      description: "Test project for job interview",
      stack: "Nuxt, TypeScript, Primevue, Chart.js, Docker",
      category: "Test project",
    },
    {
      title: "Crypto app backend",
      link: "https://github.com/stasfr/crypto-app_backend",
      img: "/img/projects/nestjs_logo.png",
      description: "Backend on Nest.js for Crypto app",
      stack: "Nest, TypeScript, Prisma, Axios, JWT",
      category: "Test project",
    },
  ]);

  const projectsCount = computed(() => projects.value.length);
  const landingPagesCount = computed(
    () =>
      projects.value.filter((project) => project.category === "Landing page")
        .length
  );
  const petProjectsCount = computed(
    () =>
      projects.value.filter((project) => project.category === "Pet project")
        .length
  );
  const commercialProjectsCount = computed(
    () =>
      projects.value.filter(
        (project) => project.category === "Commercial project"
      ).length
  );
  const testProjectsCount = computed(
    () =>
      projects.value.filter((project) => project.category === "Test project")
        .length
  );

  function getProjectsByCategory(category: string) {
    return projects.value.filter((project) => project.category === category);
  }

  return {
    projects,
    projectsCount,
    landingPagesCount,
    petProjectsCount,
    commercialProjectsCount,
    testProjectsCount,
    getProjectsByCategory,
  };
}
