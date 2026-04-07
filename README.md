# LevelUp PS - PlayStation Rental Landing Page

LevelUp PS adalah sebuah *landing page* modern, responsif, dan elegan yang dirancang khusus untuk bisnis penyewaan (rental) PlayStation5 dan PlayStation 4. Proyek ini memfokuskan antarmuka pengguna pada kenyamanan, stabilitas tampilan (*minimalist plain layout* tanpa efek berat), serta sistem pemesanan langsung (terintegrasi dengan pesan WhatsApp).

## 🚀 Fitur Utama
- **Modern & Elegan**: Menggunakan warna palet *dark-slate/blue* dengan desain kartikal (card-based) modern dan efek mengambang (float & fade up) yang ringan.
- **Daftar Paket Sewa Dinamis**: Mendukung pemisahan kategori harga untuk PlayStation 5 dan PlayStation 4, termasuk dukungan label khusus seperti Paket Harian (24 jam).
- **Game Library List**: Katalog game terbaru ditampilkan menggunakan desain antarmuka *Horizontal Card Scroll* (Carousel List), cocok untuk layar sentuh pada perangkat *mobile* maupun desktop.
- **Langsung ke WhatsApp**: Form *Booking* interaktif pada *popup/modal* dengan pengisian nama, pilihan konsol, daftar paket, catatan khusus, dan alamat, lalu mengirimkan format pesanan rapi secara otomatis ke nomor WhatsApp pemilik bisnis.
- **Stabilitas Layout Tinggi**: Didesain di dalam wadah resolusi terkunci (maksimal lebar 1000px) untuk membasmi sepenuhnya _bug horizontal scroll_ atau elemen bergeser acak pada *device* layar lelebar maupun kecil.

## 🛠️ Tech Stack
- **Framework Utama**: [React.js](https://reactjs.org/) (Create React App as base / Vite compatibility depending on setup environment).
- **Styling**: Native CSS (`index.css`) -- menghindari ketergantungan kompleks dari *framework* CSS dan menjaga performa sekencang mungkin tanpa *overhead* ukuran bundel.
- **Icon Assets**: [Lucide React](https://lucide.dev/) (segar, jernih, dan ringan).

## 📂 Struktur Proyek
Root direktori untuk aset penting bisa ditemukan di folder `src/`:
```text
src/
├── components/          # Komponen React utama
│   ├── Navbar.js        # Navigasi atas yang statis dan bersih
│   ├── Hero.js          # Hero Section interaktif dengan animasi elemen
│   ├── Packages.js      # Tabel/Daftar Harga (PS5 & PS4 picker tab)
│   ├── GameSelector.js  # Tampilan carousel katalog game populer
│   ├── PaymentInfo.js   # Kartu rekening dan panduan pemesanan sederhana
│   └── Footer.js        # Area jejak kaki halaman paling bawah
├── App.js               # Root komponen + Integrasi Form Modal Booking WA
├── index.css            # Satu-satunya file desain style dengan utility classes khusus
└── index.js             # Entry Point proyek React
```

## ⚙️ Cara Menjalankan Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) sebelum memulai instruksi di bawah ini:

1. Buka terminal di direktori utama `myapp-rentalps`.
2. Lakukan instalasi ketergantungan program (pastikan dependencies komplit):
   ```bash
   npm install
   ```
3. Jalankan *development server*:
   ```bash
   npm start
   ```
4. Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda. Aplikasi akan me-*reload* otomatis setiap kali Anda melakukan perubahan kode (*hot-reloading*).

## 📞 Integrasi Pemesanan (WhatsApp)
Data pemesanan akan disambungkan ke konfigurasi API URL WhatsApp. Anda cukup mencari parameter referensi nomor HP di `App.js` di dalam fungsi `handleBooking`:
```javascript
window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
```
*Ganti `6281234567890` dengan nomor seluler admin operasional Anda yang valid tanpa tambahan angka nol atau tanda `+` di awal.*

---
*Dibuat menggunakan spesifikasi arsitektur bersih dan responsif tinggi. (Build by Google AI / Antigravity Agent)*
