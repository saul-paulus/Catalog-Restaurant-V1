# Katalog Restaurant App 
---
#### _Front-end Expert Dicoding_
#### _Submission ke 1_
Ini adalah aplikasi yang dibangun dengan memanfaatkan API katalog restauran dari dicoding.com App ini merupakan app submission pertama / ke 1 supaya dapat melanjutkan ke materi selanjutnya dari kelas Front-end Expert Dicoding

[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express) 

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Teknologi
 `- Javascript`
 `- Webpack`
 `- prinsip PWA`
 
## Kriteria App
---
App ini dibangun haruslah memenuhi beberapa kriteria ini agar supaya dapat memenuhi persyaratan lulus:

1. App Bar (Navigation Bar)
    Syarat:
    Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).
    Terdapat navigation menu:
    Home → mengarah ke root domain.
    Favorite → target URL cukup bernilai “#” (Sebagai placeholder untuk digunakan pada submission selanjutnya).
    About Us → arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.
    Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.

2. Hero Element (Jumbotron Element)
    Syarat:
    Menampilkan hero element dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src → public → images → hero. Gambar yang tidak digunakan, bisa Anda hapus.
    Gambar hero element yang ditampilkan haruslah full-width atau memenuhi persyaratan sebagai berikut: 
    Tampilkanlah minimal width 1000px pada  viewport width >= 1200px.
    Jika ukuran viewport width < 1200px, maka hero element ditampilkan full-width.

3. Daftar Restoran
    Syarat:
    Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter (src → DATA.json), untuk menampilkannya boleh melalui cara hardcoded di berkas HTML, atau menggunakan DOM manipulation menggunakan JavaScript.
    Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.

4. Footer
    Syarat:
    Terdapat footer yang ditampilkan di bawah halaman.
    Terdapat konten teks bebas sesuai dengan kreatifitas Anda. Misalnya, konten copyright yang mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.

5. Responsibilitas Tampilan
    Syarat:
    Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.
    Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission akan ditolak.
    Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.

6. Aksesibilitas Website
    Syarat:
    Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada.
    Menerapkan teknik skip to content untuk melewati focus pada menu navigasi.
    Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila hanya gambar tidak memiliki arti apapun, cukup berikan atribut alt dengan nilai kosong. 
    Dimensi touch target pada elemen yang diinteraksikan dengan touch harus memilliki ukuran minimal 44x44px. Adapun beberapa contoh elemen tersebut ialah button, anchor, input text, dan textarea.
    Pastikan juga terdapat jarak antar elemen tersebut supaya dimensi touch target tidak menumpuk.
    Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.

## Features Katalog Restaurant App
- Dapat menyimpan restaurant yang dipilih
- Dapat responsive 

## How To Use
```bash
# Clone this repository
$ git clone https://github.com/saul-paulus/Catalog-Restaurant-V1.git

# Go into the repository
$ cd Catalog-Restaurant-V1

# Install dependencies
$ npm install

# Run the app
$ npm start
```
> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

Demo: https://boring-pasteur-1cc0fa.netlify.app/

## License

MIT
