#  SUMMARY Event Handling
### 1. State
- State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses ke component lain.

### 2. Statefull and Stateless
- Stateful component adalah komponen yang memiliki state (penyimpanan data internal). Komponen ini biasanya dibuat dengan class. Keunggulannya adalah memiliki lifecycle, tidak digunakan untuk mengambil data eksternal (fetch), fokus utamanya untuk menampilkan visual, dan dapat digunakan kembali.
- Stateless Component adalah komponen yang tidak memiliki state, hanya menerima data melalui props. Biasanya dibuat dengan function karena lebih ringkas, sering digunakan untuk mengambil data dari luar (fetch), berinteraksi dengan aplikasi, tapi tidak dapat digunakan kembali.

### 3. Handling Events
- onSubmit adalah atribut yang digunakan untuk menangani pengiriman formulir dalam komponen React. 
- onClick adalah atribut yang digunakan untuk menangani klik pada elemen, seperti tombol atau tautan. Ketika elemen tersebut diklik, fungsi yang ditentukan dalam onClick akan dijalankan. 
- onChange adalah atribut di elemen HTML yang digunakan untuk menangani perubahan pada elemen, seperti ketika pengguna mengetik di dalam input atau memilih opsi dari dropdown. Fungsi ini akan dipanggil setiap kali nilai elemen tersebut berubah.