import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Project } from "@/types/Project";

interface Props {
  project: Project;
}

export default function ProjectCard(props: Props) {
  return (
    <Card className="max-w-72">
      <CardHeader>
        <CardTitle>{props.project.title}</CardTitle>
        <CardDescription className="min-h-10">{props.project.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <img src={props.project.img} alt={props.project.title} />
        <p className="min-h-12">{props.project.stack}</p>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button asChild>
          <a href={props.project.link}>Learn more</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
