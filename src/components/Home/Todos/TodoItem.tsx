import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";

import type { Todo } from "@/types/Todo";

interface Props {
  todo: Todo;
}

export default function TodoItem(props: Props) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-primary-foreground p-4 text-primary">
      <div className="flex items-center gap-2">
        <Checkbox checked={props.todo.completed} disabled />
        <div>{props.todo.title}</div>
      </div>

      <div>
        <div>Start date: {format(props.todo.startDate, "dd.MM.yyyy")}</div>
        <div>Done: ...</div>
      </div>
    </div>
  );
}
