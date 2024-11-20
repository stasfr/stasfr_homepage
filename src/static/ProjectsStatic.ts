import type { Project } from "@/types/Project";

const ProjectsStatic: Project[] = [
  {
    id: 1,
    title: "Saviour Care",
    link: "https://stasfr.github.io/Saviour-Care/",
    img: "/img/projects/saviour_care.webp",
    description: "Adaptive landing with custom burger menu",
    stack: "Vanilla HTML, CSS",
    category: "landing",
  },
  {
    id: 2,
    title: "Wine and Dices",
    link: "https://github.com/stasfr/wad-reborn",
    img: "/img/projects/wad.webp",
    description: "Dream project about Wine and Dice Throne",
    stack: "Vue3, Supabase",
    category: "pet",
  },
  {
    id: 3,
    title: "Pari",
    link: "https://skpari.ru/",
    img: "/img/projects/skpari.webp",
    description: "Vue 2/3 SPA, made some private pet-projects for company",
    stack: "Vue 2/3, Vuetify, GitLab, TypeScript",
    category: "commercial",
  },
  {
    id: 4,
    title: "Alef test",
    link: "https://github.com/stasfr/alef-test",
    img: "/img/projects/alef_test.webp",
    description: "Test project for job interview",
    stack: "Nuxt, TypeScript, Custom form componetns",
    category: "test",
  },
  {
    id: 5,
    title: "Todo App",
    link: "https://github.com/stasfr/todo_app_test",
    img: "/img/projects/todo_app.webp",
    description: "Test project for job interview",
    stack: "Vue 3, TypeScript, AutoImports, Tailwind",
    category: "test",
  },
  {
    id: 6,
    title: "Crypto app",
    link: "https://github.com/stasfr/crypto-app",
    img: "/img/projects/crypto_app.webp",
    description: "Test project for job interview",
    stack: "Nuxt, TypeScript, Primevue, Chart.js, Docker",
    category: "test",
  },
];

export default ProjectsStatic;
