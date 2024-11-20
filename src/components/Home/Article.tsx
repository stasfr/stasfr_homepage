import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import type { HomePageArticle } from "@/types/HomePageArticle";

interface Props {
  article: HomePageArticle;
}

export default function Article(props: Props) {
  return (
    <section className="mx-auto max-w-screen-sm px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl underline decoration-border decoration-2 underline-offset-8">
            {props.article.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {props.article.text.map((text, index) => (
            <p key={index} className="text-justify indent-8">
              {text}
            </p>
          ))}
        </CardContent>

        <CardFooter>
          <Button asChild className="bg-primary-bg mx-auto text-black">
            <Link to={props.article.link}>
              <Icon icon={props.article.buttonIcon} className="size-5" />
              {props.article.buttonTitle}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
