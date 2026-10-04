import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddNotePage({ onNotesChange }) {
  const navigate = useNavigate();
  const bodyRef = useRef(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanBody = body.trim();

    if (!cleanTitle || !cleanBody || cleanBody === '<br>') {
      setError('Judul dan isi catatan wajib diisi.');
      return;
    }

    addNote({
      title: cleanTitle,
      body: cleanBody,
    });

    onNotesChange();
    navigate('/');
  };

  const handleBodyInput = (event) => {
    setBody(event.currentTarget.innerHTML);
    if (error) setError('');
  };

  return (
    <div className="form-page">
      <button type="button" className="back-button" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      <div className="form-header">
        <p className="eyebrow">CATATAN BARU</p>
        <h1>Tulis sesuatu yang ingin kamu ingat.</h1>
        <p>Gunakan toolbar sederhana di bawah untuk membuat isi catatan lebih ekspresif.</p>
      </div>

      <form className="note-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Judul</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (error) setError('');
            }}
            placeholder="Contoh: Ide project akhir"
            maxLength={100}
            autoFocus
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Isi catatan</label>
          <div className="editor-toolbar" aria-label="Format teks">
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => document.execCommand('bold')}
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => document.execCommand('italic')}
            >
              <em>I</em>
            </button>
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => document.execCommand('insertUnorderedList')}
            >
              • List
            </button>
          </div>
          <div
            ref={bodyRef}
            id="body"
            className="editor"
            contentEditable
            role="textbox"
            aria-multiline="true"
            data-placeholder="Tulis isi catatan di sini..."
            onInput={handleBodyInput}
            suppressContentEditableWarning
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <div className="form-actions">
          <button type="button" className="button secondary" onClick={() => navigate('/')}>
            Batal
          </button>
          <button type="submit" className="button primary">
            Simpan Catatan
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNotePage;