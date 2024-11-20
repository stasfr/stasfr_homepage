import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TodoItem from "@/components/Home/Todos/TodoItem";

import type { Todo } from "@/types/Todo";

interface Props {
  todos: Todo[];
}

export default function TodosList(props: Props) {
  return (
    <section className="mx-auto max-w-screen-sm px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl underline decoration-border decoration-2 underline-offset-8">
            My todos
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {props.todos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
