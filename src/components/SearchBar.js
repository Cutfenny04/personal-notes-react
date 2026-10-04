import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <label htmlFor="search-note" className="sr-only">
        Cari catatan berdasarkan judul
      </label>
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        id="search-note"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari berdasarkan judul..."
        className="search-input"
      />
      {value && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onChange('')}
          aria-label="Hapus pencarian"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;