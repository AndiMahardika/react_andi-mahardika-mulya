# SUMMARY CSS
### 1. CSS  adalah bahasa yang digunakan untuk mengatur tampilan element - element di sebuah halaman website
### 2. CSS dapat ditambahkan dengan 3 cara yaitu 
- External CSS Ditambahkan dalam file CSS terpisah. Dihubungkan ke halaman HTML menggunakan tag <link> di dalam bagian <head>:
  ```
  <link rel="stylesheet" href="styles.css">
  ```
- Internal CSS : Dituliskan langsung di dalam file HTML.
  ```
  <style>
  p {
    color: blue;
  }
  </style>
  ```
- Inline CSS : CSS diterapkan langsung ke elemen HTML.
  ```
  <p style="color: blue;">Ini teks berwarna biru</p>
  ```
### 3. Selector CSS : 
- Selector ID (#): Digunakan untuk menargetkan elemen dengan atribut id. Selector ID hanya berlaku untuk satu elemen.
  ``` 
  #header {
    background-color: blue;
  }
  ```
- Selector Class (.): Digunakan untuk menargetkan elemen dengan atribut class. Class dapat diterapkan pada banyak elemen.
  ```
  .container {
    margin: 0 auto;
  }
  ```
### 4.CSS Margin & Padding
- Margin jarak antara border element dengan parent dari element tersebut
- Padding jarak antara content dengan border

### 5.CSS Display
- Block : Elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan).
- Inline-Block : Elemen inline-block membutuhkan lebar sesuai yang diperlukan.
- None : Menyembunyikan elemen untuk tidak ditampilkan.