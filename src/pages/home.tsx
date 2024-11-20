import { Icon } from "@iconify/react";
import Avatar from "@/components/Home/Avatar";

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="bg-primary-bg xs:w-80 mx-auto flex w-72 items-center justify-center gap-2 rounded-sm py-2 font-medium text-black">
        <Icon icon="lucide:heart" className="size-5" />
        From Russian frontend with love!
      </div>

      <Avatar />
    </section>
  );
}
