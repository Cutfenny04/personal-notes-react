import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark"></span>
            <span>Ruang Catatan</span>
          </Link>

          <nav className="main-nav" aria-label="Navigasi utama">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Catatan
            </NavLink>
            <NavLink
              to="/archives"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Arsip
            </NavLink>
            <Link to="/notes/new" className="nav-add">
              + Catatan Baru
            </Link>
          </nav>
        </div>
      </header>

      <main className="page-container">{children}</main>

      <footer className="app-footer">
        <p>Ruang Catatan · React SPA</p>
      </footer>
    </div>
  );
}

export default Layout;