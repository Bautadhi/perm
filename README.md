# Permintaan Toko - Smart Device Redirector (GitHub Pages)

Sistem pengalihan otomatis (Auto Redirect) berdasarkan jenis perangkat pengakses:
- **HP / Smartphone** ➔ `https://polytasik-pixel.github.io/permintaanToko/`
- **Laptop / PC (Desktop)** ➔ `https://polytasik-pixel.github.io/permintaanTokoo/`

---

## 📁 Struktur File Project

```
permintaan-redirector/
├── index.html     # Halaman utama & struktur HTML
├── style.css      # Desain modern Glassmorphism dark mode
├── app.js         # Logika pendeteksi perangkat HP vs PC & redirect otomatis
└── README.md      # Panduan penggunaan & upload ke GitHub
```

---

## 🚀 Cara Upload ke GitHub & Aktifkan GitHub Pages

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [GitHub](https://github.com/) dan login.
2. Klik tombol **`+`** di kanan atas ➔ **New repository**.
3. Beri nama repository (misalnya: `permintaan` atau `permintaan-redirect`).
4. Pastikan pilih **Public**.
5. Klik **Create repository**.

---

### Langkah 2: Upload File Project
Anda bisa mengupload via **Web Interface GitHub** atau via **Git Terminal**:

#### Opsi A: Upload via Web Interface (Paling Mudah)
1. Di halaman repository yang baru dibuat, klik **`uploading an existing file`**.
2. Drag & drop ketiga file ini:
   - `index.html`
   - `style.css`
   - `app.js`
3. Ketik Commit message (misal: "Initial commit device redirector").
4. Klik **Commit changes**.

#### Opsi B: Upload via Git Terminal
Buka PowerShell / Terminal di folder project:
```bash
git init
git add .
git commit -m "Add device redirector"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO.git
git push -u origin main
```

---

### Langkah 3: Aktifkan GitHub Pages
1. Masuk ke **Settings** repository Anda di GitHub.
2. Di menu sebelah kiri, klik **Pages**.
3. Pada bagian **Build and deployment** ➔ **Branch**:
   - Pilih `main` (atau `master`).
   - Folder: `/ (root)`.
4. Klik **Save**.
5. Tunggu 1–2 menit, link web Anda akan aktif (contoh: `https://USERNAME.github.io/REPOS_NAME/`).

---

## 🔍 Logika Pendeteksian HP vs PC

Script `app.js` menggunakan kombinasi 3 lapis pemeriksaan:
1. **User-Agent Header Inspection**: Memeriksa identitas browser (`Android`, `iPhone`, `iPod`, `Mobile`, dll.).
2. **Viewport / Resolution Test**: Memeriksa lebar layar (`window.innerWidth <= 768px`).
3. **Pointer Type Check**: Memeriksa apakah layar menggunakan *coarse pointer* (sentuhan jari pada layar HP).
