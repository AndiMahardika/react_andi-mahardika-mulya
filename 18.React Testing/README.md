# SUMMARY TESTING

### 1. Testing adalah proses untuk memeriksa kode program agar tidak terdapat error dan sesuai dengan ketentuan yang telah ditetapkan. Proses ini dilakukan untuk mencegah terjadinya bug dalam aplikasi sebelum aplikasi dideploy. Selain itu, testing juga bertujuan untuk memastikan bahwa kode yang ditulis berfungsi dengan benar sepanjang masa penggunaan aplikasi.

### 2. Tingkatan dalam Testing : 
- Unit Testing: memeriksa bagian terkecil dari kode, seperti fungsi atau metode, secara individu untuk memastikan bahwa setiap unit berfungsi dengan baik. 
- Integration Testing: menguji gabungan berbagai komponen yang telah diuji sebelumnya untuk memastikan bahwa mereka bekerja dengan baik saat digabungkan.
- System Testing: pada tahap ini, seluruh sistem aplikasi diuji sebagai satu kesatuan untuk memastikan bahwa semua komponen dapat bekerja sesuai dengan persyaratan yang telah ditentukan.
- Acceptance Testing: tahap akhir pengujian untuk menentukan apakah aplikasi memenuhi kebutuhan pengguna dan siap diluncurkan. Pengujian ini melibatkan user untuk memastikan bahwa aplikasi dapat diterima sebelum deployment.

### 3. Jest: salah satu alat untuk melakukan testing pada aplikasi React. Ia memungkinkan akses ke DOM melalui jsdom, sehingga sangat baik untuk menguji komponen React.
- install
   ```
   npm install --save-dev jest
   ```
- contoh simple test function
   ```
   // sum.js
    function sum(a, b) {
        return a + b;
    }
    
    module.exports = sum;
   ```
   
   ```
   // sum.test.js
   import sum from './sum.js'
    
   test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
   });
   ```