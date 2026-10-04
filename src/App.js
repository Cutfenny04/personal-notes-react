import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailPage from './pages/DetailPage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import { getAllNotes } from './utils/local-data';

function App() {
  const [notes, setNotes] = useState(() => getAllNotes());

  const refreshNotes = () => {
    setNotes(getAllNotes());
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage notes={notes} />} />
          <Route
            path="/notes/new"
            element={<AddNotePage onNotesChange={refreshNotes} />}
          />
          <Route
            path="/notes/:id"
            element={<DetailPage onNotesChange={refreshNotes} />}
          />
          <Route path="/archives" element={<ArchivePage notes={notes} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;