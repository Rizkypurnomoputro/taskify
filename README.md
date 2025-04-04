# 📝 Taskify — Modular To-Do App (Under Construction)

Taskify adalah aplikasi To-Do sederhana berbasis **Vanilla JavaScript** yang dirancang dengan struktur modular dan prinsip _separation of concerns_. Cocok sebagai proyek pembelajaran untuk memahami DOM manipulation, localStorage, dan modularisasi JavaScript.

> ⚠️ **Catatan**: Project ini **belum selesai**. Fitur dasar sudah berjalan (tambah dan tampilkan task), tetapi fitur seperti hapus, edit, dan drag-and-drop **belum diimplementasikan**.

---

## 🚀 Fitur Utama (Saat Ini)

- Tambah task melalui input form
- Task tersimpan di `localStorage` browser
- Struktur folder terorganisir (modular)

---

## 📁 Struktur Folder

taskify/
├── index.html ← HTML utama
├── style.css ← styling
├── main.js ← ENTRY POINT (linked ke index.html)
├── README.md
├── js/
│ ├── app.js ← kontrol utama app
│ ├── storage.js ← modul simpan/load task
│ ├── dom.js ← render elemen
│ └── dragndrop.js ← fungsionalitas drag & drop
└── assets/ ← gambar/icon dsb.
