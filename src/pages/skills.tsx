import { Icon } from "@iconify/react";
import SkillsIcons from "@/static/SkillsIcons";

import type { Skill } from "@/types/Skill";

export default function Skills() {
  return (
    <section className="mx-auto max-w-screen-xs space-y-8 px-4">
      <h2 className="text-center text-3xl underline decoration-border decoration-2 underline-offset-8">
        My skills
      </h2>

      <div className="grid grid-cols-2 justify-items-center gap-6 xs:grid-cols-3 sm:grid-cols-4">
        {SkillsIcons.map((skill: Skill) => (
          <div
            key={skill.title}
            className="flex size-24 cursor-pointer flex-col items-center justify-around gap-2 rounded bg-primary-bg p-2 text-black transition-colors duration-300 ease-in-out hover:bg-primary-bg-hover"
          >
            <Icon icon={skill.icon} className="size-12" />
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
