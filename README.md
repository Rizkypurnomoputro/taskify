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
├── index.html          # HTML utama, di-link ke main.js
├── style.css           # File styling utama
├── main.js             # ENTRY POINT — menginisialisasi app
├── README.md           # Dokumentasi proyek
├── js/                 # Folder modul JavaScript
│   ├── app.js          # Kontrol utama aplikasi (event handler, init)
│   ├── storage.js      # Modul untuk simpan/muat task dari localStorage
│   ├── dom.js          # Fungsi untuk render task ke DOM
│   └── dragndrop.js    # (Belum selesai) Logika drag & drop task
└── assets/             # Gambar/icon (jika diperlukan)

