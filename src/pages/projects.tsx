import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectsStatic from "@/static/ProjectsStatic";

import type { Project } from "@/types/Project";

export default function Projects() {
  return (
    <section className="mx-auto space-y-8 px-4">
      <h2 className="text-center text-3xl underline decoration-border decoration-2 underline-offset-8">
        My projects
      </h2>

      <div className="grid grid-cols-2 justify-items-center gap-12">
        {ProjectsStatic.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}{" "}
      </div>
    </section>
  );
}
