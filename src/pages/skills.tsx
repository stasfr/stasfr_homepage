import { Icon } from "@iconify/react";

export default function Skills() {
  const skillsIcons = [
    { name: "flowbite:css-solid", title: "CSS" },
    { name: "simple-icons:express", title: "Express" },
    { name: "bi:git", title: "Git" },
    { name: "akar-icons:google-fill", title: "Google" },
    { name: "akar-icons:graphql-fill", title: "GraphQL" },
    { name: "flowbite:html-solid", title: "HTML" },
    { name: "akar-icons:javascript-fill", title: "JS" },
    { name: "akar-icons:node-fill", title: "Node.js" },
    { name: "akar-icons:npm-fill", title: "NPM" },
    { name: "simple-icons:nuxtdotjs", title: "Nuxt" },
    { name: "akar-icons:postgresql-fill", title: "PostgreSQL" },
    { name: "simple-icons:postman", title: "Postman" },
    { name: "akar-icons:sass-fill", title: "SASS" },
    { name: "flowbite:tailwind-solid", title: "Tailwind" },
    { name: "akar-icons:typescript-fill", title: "TS" },
    { name: "akar-icons:vue-fill", title: "Vue" },
    { name: "file-icons:chartjs", title: "Chart.js" },
    { name: "ant-design:docker-outlined", title: "Docker" },
    { name: "ri:supabase-fill", title: "Supabase" },
    { name: "akar-icons:figma-fill", title: "Figma" },
    { name: "devicon-plain:vuetify", title: "Vuetify" },
    { name: "akar-icons:react-fill", title: "React" },
    { name: "simple-icons:shadcnui", title: "shadcn" },
    { name: "akar-icons:python-fill", title: "Python" },
  ];

  return (
    <section className="max-w-screen-xs mx-auto space-y-8 px-4">
      <h2 className="text-3xl underline decoration-border decoration-2 underline-offset-8">
        My skills
      </h2>

      <div className="xs:grid-cols-3 grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-4">
        {skillsIcons.map((icon) => (
          <div
            key={icon.title}
            className="bg-primary-bg hover:bg-primary-bg-hover flex size-24 cursor-pointer flex-col items-center justify-around gap-2 rounded p-2 text-black transition-colors duration-300 ease-in-out"
          >
            <Icon icon={icon.name} className="size-12" />
            <span>{icon.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
