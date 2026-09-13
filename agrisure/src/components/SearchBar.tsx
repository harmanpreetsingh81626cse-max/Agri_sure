interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}: SearchBarProps) {
  return (
    <div className="search-bar">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      {value && (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;