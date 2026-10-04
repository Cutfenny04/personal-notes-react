# Ruang Catatan — Personal Notes App

Submission aplikasi Single Page Application (SPA) React untuk pengelolaan catatan pribadi.

## Fitur

### Kriteria wajib
- Daftar catatan pada route `/`.
- Detail catatan pada route `/notes/:id`.
- Navigasi SPA menggunakan `react-router-dom`.
- Menambahkan catatan pada `/notes/new`.
- Controlled component untuk input judul.
- `contentEditable` untuk isi catatan.
- Data catatan disimpan di memori.
- Menghapus catatan.
- Conditional rendering saat daftar kosong.

### Fitur opsional
- Arsip dan batal arsip catatan.
- Pencarian berdasarkan judul menggunakan search parameter URL.
- Halaman 404.
- Rich text sederhana pada isi catatan dengan `contentEditable`.
- Struktur folder berdasarkan tanggung jawab.

## Struktur

```text
public/
src/
├── components/
│   ├── Layout.js
│   ├── NoteCard.js
│   ├── NoteList.js
│   └── SearchBar.js
├── pages/
│   ├── AddNotePage.js
│   ├── ArchivePage.js
│   ├── DetailPage.js
│   ├── HomePage.js
│   └── NotFoundPage.js
├── styles/
│   └── style.css
├── utils/
│   ├── date.js
│   └── local-data.js
├── App.js
└── index.js
```

## Instalasi

```bash
npm install
npm start
```

Aplikasi berjalan di `http://localhost:3000`.

## Catatan

Data disimpan hanya di memori JavaScript. Karena itu, data baru, penghapusan, dan perubahan arsip akan kembali ke data awal setelah browser di-refresh.

`node_modules` tidak disertakan dalam berkas submission.