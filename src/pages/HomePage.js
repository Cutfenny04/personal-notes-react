import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';

function HomePage({ notes }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search') || '';

const currentNotes = getActiveNotes();
const normalizedKeyword = keyword.trim().toLowerCase();

const activeNotes = normalizedKeyword
  ? currentNotes.filter((note) =>
      note.title.toLowerCase().includes(normalizedKeyword),
    )
  : currentNotes;
  
  const handleSearch = (value) => {
    const trimmed = value.trim();

    if (trimmed) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <section className="hero">
        <div>
          <p className="eyebrow">CATATAN PRIBADI</p>
          <h1>Semua ide pentingmu,<br /><span>tersimpan rapi.</span></h1>
          <p className="hero-description">
            Tulis, simpan, arsipkan, dan temukan kembali catatanmu kapan saja.
          </p>
        </div>
        <div className="hero-shape" aria-hidden="true">
          <span></span>
        </div>
      </section>

      <section className="section-heading">
        <div>
          <p className="eyebrow">KOLEKSI AKTIF</p>
          <h2>Catatan Saya</h2>
        </div>
        <SearchBar value={keyword} onChange={handleSearch} />
      </section>

      <NoteList
        notes={activeNotes}
        emptyMessage={keyword ? 'Catatan tidak ditemukan' : 'Tidak ada catatan'}
      />
    </div>
  );
}

export default HomePage;