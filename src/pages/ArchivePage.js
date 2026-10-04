import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePage({ notes }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search') || '';

  const archivedNotes = useMemo(() => {
    const currentNotes = getArchivedNotes();
    const normalizedKeyword = keyword.trim().toLowerCase();

    if (!normalizedKeyword) return currentNotes;

    return currentNotes.filter((note) =>
      note.title.toLowerCase().includes(normalizedKeyword),
    );
  }, [notes, keyword]);

  const handleSearch = (value) => {
    if (value.trim()) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <section className="simple-hero">
        <p className="eyebrow">ARSIP</p>
        <h1>Catatan yang disimpan</h1>
        <p>Catatan yang sudah tidak aktif tetap aman di sini.</p>
      </section>

      <section className="section-heading">
        <div>
          <p className="eyebrow">KOLEKSI ARSIP</p>
          <h2>Arsip Saya</h2>
        </div>
        <SearchBar value={keyword} onChange={handleSearch} />
      </section>

      <NoteList
        notes={archivedNotes}
        emptyMessage={keyword ? 'Arsip tidak ditemukan' : 'Arsip kosong'}
      />
    </div>
  );
}

export default ArchivePage;