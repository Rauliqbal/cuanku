# 💰 Cuanku

**Kelola keuangan dengan cara yang seru dan gampang!**

Cuanku adalah aplikasi manajemen keuangan pribadi untuk membantu kamu mencatat pemasukan, pengeluaran, dan mencapai tujuan finansial dengan lebih menyenangkan.  
Saya percaya bahwa mengatur uang itu **nggak harus ribet** — Cuanku hadir untuk bikin semuanya lebih mudah dan seru. 🚀

---

## ✨ Fitur Utama

- 📊 **Dashboard Keuangan** – Ringkasan keuangan yang jelas & interaktif.
- 📝 **Catat Pemasukan & Pengeluaran** – Transaksi bisa dicatat dengan kategori yang fleksibel.
- 🎯 **Target Tabungan** – Tetapkan tujuan keuangan, pantau progresnya, dan raih impianmu.
- 🔎 **Analisis & Laporan** – Dapatkan insight mingguan/bulanan biar makin pintar atur uang.
- 🔄 **Offline First** – Bisa dipakai tanpa internet, data otomatis sinkron saat online.

---

## 🚀 Teknologi yang Dipakai

- **Frontend**: Vue 3 + TailwindCSS
- **Backend**: Express + Typescript + Prisma
- **Database**: PostgreSQL
- **Autentikasi**: JWT Session Token

---

## 🚀 Roadmap Pengembangan

Roadmap ini dibagi dalam beberapa **fase bertahap** agar pengerjaan lebih terarah dan mudah dikerjakan secara iteratif.

---

### ✅ Fase 1 — Persiapan Proyek

| Task                                      | Status  |
| ----------------------------------------- | ------- |
| Tentukan nama aplikasi (✅ Cuanku)        | ✅ Done |
| Buat repository Git (GitHub / GitLab)     | ✅ Done |
| Buat struktur folder backend (Express.js) | ✅ Done |
| Setup `.env` + koneksi PostgreSQL         | ✅ Done |
| Install Prisma & Generate Client          | ✅ Done |
| Buat migration pertama                    | ✅ Done |

---

### 🔐 Fase 2 — Authentication & User Management _(Opsional jika single user)_

| Task                                        | Status  |
| ------------------------------------------- | ------- |
| Endpoint `POST /auth/register`              | ✅ Done |
| Endpoint `POST /auth/login` (JWT)           | ✅ Done |
| Middleware proteksi route (auth middleware) | ✅ Done |
| Endpoint `GET /me`                          | ✅ Done |

---

### 🗂 Fase 3 — Master Data (Accounts & Categories)

| Task                                        | Status     |
| ------------------------------------------- | ---------- |
| CRUD Accounts (Rekening / Dompet)           | ⬜ Pending |
| CRUD Categories (Income / Expense)          | ⬜ Pending |
| Seed kategori default saat user baru daftar | ⬜ Pending |

---

### 💸 Fase 4 — Core Fitur Transaksi

| Task                                                              | Status     |
| ----------------------------------------------------------------- | ---------- |
| Endpoint `POST /transactions`                                     | ⬜ Pending |
| Endpoint `GET /transactions` (+ filter tanggal / akun / kategori) | ⬜ Pending |
| Endpoint `PUT /transactions/:id`                                  | ⬜ Pending |
| Endpoint `DELETE /transactions/:id`                               | ⬜ Pending |
| Auto update saldo `accounts.balance` saat transaksi               | ⬜ Pending |

---

### 📊 Fase 5 — Laporan & Analitik

| Task                                         | Status     |
| -------------------------------------------- | ---------- |
| Endpoint `GET /reports/summary?from=&to=`    | ⬜ Pending |
| Endpoint `GET /reports/monthly?year=&month=` | ⬜ Pending |
| Breakdown per kategori                       | ⬜ Pending |

---

### 🎯 Fase 6 — Budgeting (Opsional)

| Task                                           | Status     |
| ---------------------------------------------- | ---------- |
| CRUD Budgets (Target pengeluaran per kategori) | ⬜ Pending |
| Hitung progress penggunaan anggaran            | ⬜ Pending |
| Notifikasi jika anggaran hampir habis          | ⬜ Pending |

---

### 🚀 Fase 7 — Deployment & Dokumentasi

| Task                                        | Status     |
| ------------------------------------------- | ---------- |
| Standarisasi Response JSON + Error Handling | ⬜ Pending |
| Swagger / API Docs                          | ⬜ Pending |
| Deploy ke Railway / Render / VPS            | ⬜ Pending |

---

## ✅ Status Proyek

| Fase                      | Progress       |
| ------------------------- | -------------- |
| Fase 1 — Persiapan Proyek | 🟡 On Planning |
| Fase 2 — Authentication   | 🔲 Belum Mulai |
| Fase 3 — Master Data      | 🔲 Belum Mulai |
| Fase 4 — Transaksi        | 🔲 Belum Mulai |
| Fase 5 — Laporan          | 🔲 Belum Mulai |
| Fase 6 — Budgeting        | 🔲 Belum Mulai |
| Fase 7 — Deployment       | 🔲 Belum Mulai |

---

## 📝 Catatan

- Setiap fase bisa dikerjakan bertahap dan tidak harus berurutan jika bekerja secara modular.
- Disarankan gunakan **branch per fase** agar version control lebih bersih.
- Roadmap ini bisa diekspor jadi **Notion Board / Trello Board / GitHub Projects** jika dibutuhkan.

---

> _Update roadmap setiap selesai milestone, agar progres tetap terlihat jelas ✅_
