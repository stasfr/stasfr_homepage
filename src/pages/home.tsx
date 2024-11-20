import { Icon } from "@iconify/react";
import Avatar from "@/components/Home/Avatar";
import Article from "@/components/Home/Article";

import HomePageArticles from "@/static/HomePageArticles";
import type { HomePageArticle } from "@/types/HomePageArticle";

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="mx-auto flex w-72 items-center justify-center gap-2 rounded-sm bg-primary-bg py-2 font-medium text-black xs:w-80">
        <Icon icon="lucide:heart" className="size-5" />
        From Russian frontend with love!
      </div>

      <Avatar />

      {HomePageArticles.map((article: HomePageArticle) => (
        <Article key={article.id} article={article} />
      ))}
    </section>
  );
}
