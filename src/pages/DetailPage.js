import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';
import { showFormattedDate } from '../utils/date';

function DetailPage({ onNotesChange }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(() => getNote(id));

  useEffect(() => {
    setNote(getNote(id));
  }, [id]);

  if (!note) {
    return (
      <div className="not-found-inline">
        <p className="eyebrow">CATATAN TIDAK DITEMUKAN</p>
        <h1>Oops, catatan ini tidak ada.</h1>
        <p>Catatan mungkin sudah dihapus atau URL yang kamu masukkan tidak tepat.</p>
        <button className="button primary" onClick={() => navigate('/')}>
          Kembali ke Catatan
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    const confirmed = window.confirm(`Hapus catatan "${note.title}"?`);
    if (!confirmed) return;

    deleteNote(note.id);
    onNotesChange();
    navigate(note.archived ? '/archives' : '/');
  };

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(note.id);
    } else {
      archiveNote(note.id);
    }

    const updatedNote = getNote(note.id);
    setNote(updatedNote);
    onNotesChange();
  };

  return (
    <article className="detail-page">
      <button type="button" className="back-button" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      <div className="detail-header">
        <div>
          <span className={note.archived ? 'status-badge archived' : 'status-badge'}>
            {note.archived ? 'Diarsipkan' : 'Aktif'}
          </span>
          <h1>{note.title}</h1>
          <time dateTime={note.createdAt}>{showFormattedDate(note.createdAt)}</time>
        </div>
      </div>

      <div className="detail-content">
        {parser(note.body)}
      </div>

      <div className="detail-actions">
        <button type="button" className="button secondary" onClick={handleArchive}>
          {note.archived ? '↩ Batal Arsip' : '▣ Arsipkan'}
        </button>
        <button type="button" className="button danger" onClick={handleDelete}>
          Hapus
        </button>
      </div>
    </article>
  );
}

export default DetailPage;