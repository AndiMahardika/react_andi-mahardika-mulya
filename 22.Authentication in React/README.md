# SUMMARY Authentication in React

### 1 . Authentication proses memverifikasi identitas user ketika mereka masuk ke aplikasi biasanya dilakukan dengan meminta username dan password, yang kemudian diverifikasi melalui backend. Jika informasi benar, maka backend akan mengembalikan token autentikasi (JWT) yang digunakan aplikasi untuk mengelola status login.

### 2. Authorization adalah proses untuk menentukan apa saja yang boleh dilakukan oleh user. Setelah identitas user terverifikasi, sistem menentukan akses apa yang diperbolehkan atau tidak diperbolehkan bagi user tersebut, berdasarkan peran atau tingkat aksesnya.

### 3. Strategi Login yang Sering Digunakan
1. **Open App**
2. **Cek Token Tersedia atau Tidak**: Saat aplikasi dimulai, sistem akan memeriksa apakah token Authentication sudah tersimpan, misalnya di **cookies** atau **local storage**.
3. **Jika Token Ada, Masuk ke Aplikasi**: Jika token ditemukan dan valid, user langsung diarahkan ke halaman utama aplikasi tanpa perlu login ulang.
4. **Jika Token Tidak Ada, Masukkan Username dan Password**: Jika token tidak ada, user diarahkan ke halaman login untuk memasukkan username dan password.
5. **Verifikasi Login**: Backend memverifikasi username dan password. Jika benar, backend akan memberikan token Authentication yang baru.
6. **Simpan Token dan Masuk ke Aplikasi**: Token yang diterima dapat disimpan di cookies (atau local storage). Setelah itu, user diarahkan ke halaman utama aplikasi dan bisa mengaksesnya.