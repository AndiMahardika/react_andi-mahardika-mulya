# Summary Bootstrap
### 1. Framework CSS adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website, contoh Framework CSS yang sering digunakan ada Bootstrap dan Tailwind CSS
### 2. Ada 2 cara untuk memakai bootstrap
- Menggunakan CDN (Content Delivery Network):
  Masukkan tag <link> Bootstrap di dalam tag <head> pada file HTML untuk menghubungkan ke file CSS Bootstrap:
  ```
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  ```
  Tambahkan tag <script> di bagian bawah sebelum penutup tag </body> untuk menggunakan JavaScript Bootstrap (opsional):
  ```
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  ```
- Install mengunakan package manager
  ```
  npm install bootstrap
  ```
### 3. ada beberapa class yang sering digunakan di bootsrap
- Grid System (Layout) : Bootstrap menggunakan sistem grid berbasis flexbox dengan 12 kolom untuk membangun layout responsif. Beberapa class grid yang sering digunakan adalah:
    - `.container`, `.container-fluid`: Mengatur lebar kontainer.
    - `.row`: Membagi baris menjadi kolom.
    - `.col`, `.col-md-6`, `.col-lg-4`: Mengatur lebar kolom pada perangkat dengan ukuran tertentu.
- Buttons: Bootstrap menyediakan class untuk membuat tombol
    - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger` : Mengatur tampilan tombol.
    - `.btn-lg`, `.btn-sm` : Mengatur ukuran tombol.
### 4. ada 2 cara untuk mengkustom Bootstrap 
- CSS : Override class Bootstrap dengan menulis CSS baru di file terpisah atau di dalam style tag.
- SCSS : Jika menggunakan preprocessor SCSS, Bootstrap dapat diimpor dan diubah secara modular dengan lebih banyak kontrol melalui variabel Bootstrap.