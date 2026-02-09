import { useState, useEffect } from 'react';
import type { Todo } from './types/todo';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';
import { TagFilter } from './components/TagFilter';

const initialTodos: Todo[] = [
  {
    id: '1',
    text: 'Buy groceries',
    completed: false,
    tags: ['shopping', 'food'],
  },
  {
    id: '2',
    text: 'Finish React project',
    completed: false,
    tags: ['work', 'coding'],
  },
  {
    id: '3',
    text: 'Go for a run',
    completed: true,
    tags: ['health'],
  },
];

const DEFAULT_TAGS = ['shopping', 'food', 'work', 'coding', 'health'];

type StatusFilter = 'all' | 'active' | 'completed';

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [newTodo, setNewTodo] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [availableTags, setAvailableTags] = useState<string[]>(DEFAULT_TAGS);
  const [newTagName, setNewTagName] = useState('');
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === 'active') return !todo.completed;
    if (statusFilter === 'completed') return todo.completed;
    if (statusFilter === 'all') return todo;
    if (tagFilter && !todo.tags.includes(tagFilter)) return false;
    return true;
  });

  const addTodo = () => {
    const trimmedText = newTodo.trim();
    if (!trimmedText) return;

    setTodos((prevTodos) => {
      const nextId = prevTodos.length
        ? (Number(prevTodos[prevTodos.length - 1].id) + 1).toString()
        : '1';

      return [
        ...prevTodos,
        {
          id: nextId,
          text: trimmedText,
          completed: false,
          tags: selectedTag ? [selectedTag] : [],
        },
      ];
    });

    setNewTodo('');
    setSelectedTag('');
  };

  const usedTags = [...new Set(todos.flatMap((t) => t.tags))];

  useEffect(() => {
    if (tagFilter && !usedTags.includes(tagFilter)) {
      setTagFilter(null);
    }
  }, [tagFilter, usedTags]);

  const addTagOption = () => {
    const trimmed = newTagName.trim();
    if (!trimmed) return;

    setAvailableTags((prev) =>
      prev.includes(trimmed) ? prev : [...prev, trimmed],
    );
    setSelectedTag(trimmed);
    setNewTagName('');
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 pb-2">Todo App</h1>

      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Add Todo</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">No tag</option>
            {availableTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <button
            onClick={addTodo}
            disabled={!newTodo.trim()}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            Add
          </button>
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Add new tag option"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-xs shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            onClick={addTagOption}
            disabled={!newTagName.trim()}
            className="rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-amber-300"
          >
            Add tag
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">Filter</h2>
        <div className="flex flex-wrap items-center gap-3">
          <FilterBar currentFilter={statusFilter} onChange={setStatusFilter} />
          <TagFilter
            tags={usedTags}
            currentTag={tagFilter}
            onChange={setTagFilter}
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-lg font-semibold text-gray-700">Todo List</h2>
          <button
            type="button"
            onClick={removeCompleted}
            disabled={completedCount === 0}
            className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          >
            Elimina completati
          </button>
        </div>
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      </section>
    </div>
  );
}

export default App;
