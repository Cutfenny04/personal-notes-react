import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <span className="not-found-number">404</span>
      <p className="eyebrow">HALAMAN TIDAK DITEMUKAN</p>
      <h1>Sepertinya kamu tersesat.</h1>
      <p>Alamat yang kamu buka tidak tersedia di Ruang Catatan.</p>
      <Link to="/" className="button primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFoundPage;