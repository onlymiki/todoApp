import type { Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
};

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 hover:bg-gray-100">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 h-4 w-4 accent-indigo-600"
        />
        <div>
          <p
            className={`text-sm ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </p>
          {todo.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {todo.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
