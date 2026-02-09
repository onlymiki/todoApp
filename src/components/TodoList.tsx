import type { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
};

export function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
      ))}
    </div>
  );
}
