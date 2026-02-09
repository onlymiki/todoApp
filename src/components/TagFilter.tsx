type TagFilterProps = {
    tags: string[]; 
    currentTag: string | null;
    onChange: (tag: string | null) => void;
  };

  export function TagFilter({ tags, currentTag, onChange }: TagFilterProps) {
    if (tags.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 text-xs">
        <button
          onClick={() => onChange(null)}
          className={`rounded-full border px-3 py-1 font-medium transition ${
            currentTag === null
              ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          All tags
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className={`rounded-full border px-3 py-1 font-medium transition ${
              currentTag === tag
                ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }
  
  