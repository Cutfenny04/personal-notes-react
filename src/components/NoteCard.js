import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/date';
import parser from 'html-react-parser';

function NoteCard({ note }) {
  return (
    <article className="note-card">
      <Link to={`/notes/${note.id}`} className="note-card-link">
        <div className="note-card-top">
          <span className="note-dot" />
          <time dateTime={note.createdAt}>{showFormattedDate(note.createdAt)}</time>
        </div>
        <h2>{note.title}</h2>
        <div className="note-preview">
          {parser(note.body || '<p>Catatan ini belum memiliki isi.</p>')}
        </div>
        <span className="read-more">Buka catatan </span>
      </Link>
    </article>
  );
}

export default NoteCard;