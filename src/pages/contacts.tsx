import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

import ContactsLinks from "@/static/ContactsLinks";

import type { Contact } from "@/types/Contact";

export default function Contacts() {
  return (
    <section className="mx-auto max-w-screen-xs space-y-8 px-4">
      <h2 className="text-center text-3xl underline decoration-border decoration-2 underline-offset-8">
        On touch
      </h2>

      <div className="flex flex-col gap-6">
        {ContactsLinks.map((item: Contact) => (
          <div
            key={item.title}
            className="flex w-full items-center justify-between rounded bg-primary-foreground px-4 py-2"
          >
            <h3 className="flex items-center gap-4 text-xl">
              <Icon icon={item.icon} className="size-5" /> {item.title}
            </h3>

            <Button key={item.title} asChild className="min-w-32" variant="outline">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.buttonTitle}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
