import React from 'react';
import NoteCard from './NoteCard';

function NoteList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">○</div>
        <h2>{emptyMessage}</h2>
        <p>Coba gunakan kata kunci lain atau buat catatan baru.</p>
      </div>
    );
  }

  return (
    <section className="notes-grid" aria-label="Daftar catatan">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
}

export default NoteList;