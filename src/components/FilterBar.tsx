export type FilterValue = 'all' | 'active' | 'completed';
import { FilterButton } from './FilterButton';

type FilterBarProps = {
  currentFilter: FilterValue;
  onChange: (filter: FilterValue) => void;
};

export function FilterBar({ currentFilter, onChange }: FilterBarProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1">
      <FilterButton
        type="button"
        onClick={() => onChange('all')}
        aria-pressed={currentFilter === 'all'}
        text="All"
      />
      <FilterButton
        type="button"
        onClick={() => onChange('active')}
        aria-pressed={currentFilter === 'active'}
        text="Active"
      />
      <FilterButton
        type="button"
        onClick={() => onChange('completed')}
        aria-pressed={currentFilter === 'completed'}
        text="Completed"
      />
    </div>
  );
}
