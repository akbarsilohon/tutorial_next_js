---
title: "Belajar Next.Js di KodingLog.com Dari Nol"
date: "2026-11-16T08:08:24+07:00"
category: "Next Js"
description: "Belajar Nex Js untuk pemula hingga mahir di KodingLog.com"
thumbnail: "/gambar/tutorial-next-js.webp"
---

Selamat datang di tutorial belajar Next.js. Pada tutorial ini, kita akan mempelajari bagaimana cara membangun aplikasi web menggunakan Next.js mulai dari dasar hingga memahami beberapa konsep yang lebih lanjut.

Next.js merupakan salah satu framework JavaScript yang dibangun di atas React. Framework ini menyediakan berbagai fitur yang dapat membantu developer dalam membangun aplikasi web modern, seperti sistem routing, rendering, optimasi gambar, dan berbagai fitur lainnya.

![unsplash image 1](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200\&auto=format\&fit=crop\&q=80)

## Apa Itu Next.js?

Next.js adalah framework React yang digunakan untuk membangun aplikasi web. Dengan menggunakan Next.js, kita tidak perlu mengatur seluruh kebutuhan aplikasi dari awal karena sudah tersedia berbagai fitur bawaan yang dapat digunakan.

Beberapa fitur yang tersedia di Next.js antara lain:

- **App Router:** Sistem routing berbasis struktur folder dan file.
- **Server Components:** Memungkinkan komponen dirender di sisi server.
- **Client Components:** Digunakan untuk komponen yang membutuhkan interaksi di browser.
- **Image Optimization:** Membantu mengoptimalkan gambar pada halaman website.
- **Metadata API:** Memudahkan pengaturan metadata untuk kebutuhan SEO.
- **Data Fetching:** Menyediakan beberapa pendekatan untuk mengambil data.

Dengan berbagai fitur tersebut, Next.js dapat digunakan untuk membangun blog, website company profile, dashboard, hingga aplikasi web yang lebih kompleks.

## Persiapan Sebelum Belajar Next.js

Sebelum mulai membuat project, ada beberapa perangkat lunak yang perlu disiapkan. Persiapan ini bertujuan agar proses pengembangan aplikasi dapat berjalan dengan baik.

Berikut beberapa kebutuhan yang perlu kamu instal:

1. **Node.js**: Node.js digunakan untuk menjalankan JavaScript di luar browser. Next.js membutuhkan Node.js agar aplikasi dapat dijalankan pada lingkungan development maupun production.
2. **NPM**: NPM merupakan package manager yang digunakan untuk mengelola dependency atau library pada project JavaScript.
3. **Kode Editor**: Kode editor digunakan untuk menulis dan mengelola kode program. Kamu dapat menggunakan Visual Studio Code, Cursor, atau kode editor lainnya.
4. **Browser**: Browser digunakan untuk melihat hasil aplikasi yang sedang dikembangkan.

![unsplash image 2](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200\&auto=format\&fit=crop\&q=80)

## Membuat Project Next.js Pertama

Setelah seluruh kebutuhan sudah tersedia, kita dapat mulai membuat project Next.js.

Buka terminal pada komputer, kemudian jalankan perintah berikut:

```bash
npx create-next-app@latest my-project
```

Perintah tersebut akan menjalankan proses pembuatan project baru menggunakan create-next-app.

Setelah proses selesai, masuk ke direktori project:

```bash
cd my-project
```

Kemudian jalankan development server:

```bash
npm run dev
```

Secara default, aplikasi dapat diakses melalui alamat berikut:

```text
http://localhost:3000
```

Jika halaman Next.js berhasil ditampilkan pada browser, berarti project sudah berhasil dibuat dan development server berjalan dengan baik.

## Mengenal Struktur Folder Next.js

Setelah membuat project, kita akan menemukan beberapa folder dan file yang memiliki fungsi masing-masing.

Berikut contoh struktur folder sederhana pada project Next.js menggunakan App Router:

```text
my-project/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── globals.css
│       └── about/
│           └── page.tsx
├── package.json
├── next.config.ts
└── tsconfig.json
```

Beberapa bagian yang perlu diketahui:

- `public/` digunakan untuk menyimpan file statis seperti gambar, ikon, dan aset lainnya.
- `src/app/` merupakan direktori utama untuk mengelola halaman menggunakan App Router.
- `layout.tsx` digunakan untuk membuat layout yang dapat digunakan bersama oleh beberapa halaman.
- `page.tsx` merupakan file yang digunakan untuk menampilkan halaman.
- `globals.css` digunakan untuk menyimpan CSS global.

## Memahami Sistem Routing

Salah satu fitur yang cukup menarik dari Next.js adalah sistem routing berbasis file.

Kita tidak perlu membuat konfigurasi routing secara manual untuk setiap halaman. Cukup membuat folder dan file `page` sesuai struktur yang diinginkan.

Sebagai contoh, jika kita ingin membuat halaman About, buat folder berikut:

```text
src/
└── app/
    └── about/
        └── page.tsx
```

Kemudian isi file `page.tsx`:

```tsx
export default function AboutPage() {
  return (
    <main>
      <h1>Tentang Kami</h1>
      <p>Ini adalah halaman About.</p>
    </main>
  );
}
```

Sekarang halaman tersebut dapat diakses melalui:

```text
http://localhost:3000/about
```

Dengan cara ini, kita dapat membuat banyak halaman dengan struktur folder yang lebih terorganisir.

![unsplash image 3](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200\&auto=format\&fit=crop\&q=80)

## Membangun Tampilan Website

Setelah memahami dasar project dan routing, tahap berikutnya adalah membangun tampilan website.

Kita dapat membuat beberapa komponen yang nantinya digunakan berulang kali, misalnya:

- Header atau navigasi website.
- Footer.
- Sidebar.
- Card artikel.
- Komponen tombol.
- Komponen pagination.

Dengan memisahkan tampilan menjadi beberapa komponen, struktur kode akan lebih mudah dikelola.

Contoh sederhana komponen Header:

```tsx
export default function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
```

Komponen tersebut dapat digunakan kembali pada layout utama sehingga tidak perlu menulis ulang kode navigasi di setiap halaman.

## Kesimpulan

Next.js menyediakan berbagai fitur yang dapat membantu kita membangun aplikasi web dengan lebih terstruktur. Namun, sebelum mempelajari fitur yang lebih kompleks, sebaiknya pahami terlebih dahulu dasar-dasar JavaScript, React, struktur project, dan sistem routing.

Melalui tutorial di KodingLog.com, kita akan mempelajari Next.js secara bertahap dengan contoh dan praktik langsung agar lebih mudah dipahami.

Selamat belajar dan semoga berhasil!