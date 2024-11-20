import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center gap-4 px-4 xs:px-0">
      <div className="w-auto space-y-2">
        <h2 className="text-3xl font-bold sm:text-4xl">Stanislav Farkash</h2>
        <p className="text-left">Moscow, Russia</p>
      </div>

      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>
            <img
              src="/img/avatars/avatar.png"
              alt="avatar"
              className="w-48 min-w-40 rounded-full border-4 border-primary"
            />
          </TooltipTrigger>

          <TooltipContent className="bg-primary-foreground px-4 py-2">
            <p className="text-sm font-bold text-primary">Любимая выбирала</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
