import type { FilterButtonProps } from '../types/filterButton';

export function FilterButton({
  type,
  onClick,
  'aria-pressed': ariaPressed,
  text,
}: FilterButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-pressed={ariaPressed}
      className={`rounded-full px-3 py-1 text-xs font-medium border transition
        ${
          ariaPressed
            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
    >
      {text}
    </button>
  );
}
