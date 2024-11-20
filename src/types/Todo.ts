export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  startDate: Date;
  completeDate: Date | null;
}
