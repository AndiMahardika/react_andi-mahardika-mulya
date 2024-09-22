# SUMMARY Javascript Refreshment
### 1. Javascript adalah : 
- Bahasa pemrograman high-level (mudah dimengerti oleh manusia). 
- Scripting (digunakan terutama di browser).
- Untyped (tidak memerlukan deklarasi tipe data secara eksplisit). Bahasa ini sangat mudah dipahami oleh pemula karena sintaksnya yang sederhana dan fleksibel.
- Interpreted: Kode JavaScript dapat dieksekusi secara langsung oleh browser.
### 2. Tipe data : 
- Primitive dalam pemrograman adalah unit pemprosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman. 
    - contoh : `String`, `Boolean`, `Number`, `BigInt`, `undefined`, `null`.
- Objects adalah yang menyimpan properti dan fungsi (method)
    - contoh : `Object`, `array`, `function`, `Date`, `set`, `map`, `weak set`, `weak map`.
### 3. Variabel :
- var : Dapat dideklarasikan ulang dan cakupannya berada di function atau global scope. 
  - contoh : `var x = 10;`
- let : Dapat dideklarasikan ulang, namun cakupannya dibatasi oleh block scope
  - contoh : `let y = 20;`
- const : Untuk variabel yang nilainya konstan (tidak dapat diubah setelah dideklarasikan).
  - contoh : `const z = 30;`
### 4. Destructuring 
###### adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek, ke dalam variabel yang berbeda.
- Array Destructuring:
  ```
  const [a, b] = [10, 20];
  console.log(a); // 10
  console.log(b); // 20
  ```
- Object Destructuring:
  ```
  const person = { name: 'John', age: 30 };
  const { name, age } = person;
  console.log(name); // John
  console.log(age); // 30
  ```
###### Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar
- spread array
  ```
  let a [1,2,3]
  let b = [...al
  console.log(b); // [1,2,3] 
  console.log(a === b); // false
  ```
- spread object
  ```
  const a = {p: 1, q: 2};
  const b = {...a};
  console.log(b); // {p:1,q2}
  ```
### 5. Method
###### Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing. Contoh
- Cancat
  ```
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const result = arr1.concat(arr2);
  console.log(result); // [1, 2, 3, 4]
  ```
- Map
  ```
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6, 8]
  ```
- ForEach
  ```
  const numbers = [1, 2, 3];
  numbers.forEach(num => console.log(num));
  // Output: 1, 2, 3
  ```
- Slice
  ```
  const fruits = ['apple', 'banana', 'orange'];
  const sliced = fruits.slice(1, 3);
  console.log(sliced); // ['banana', 'orange']
  ```
- Filter
  ```
  const numbers = [1, 2, 3, 4, 5];
  const even = numbers.filter(num => num % 2 === 0);
  console.log(even); // [2, 4]
  ```
- Reduce
  ```
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log(sum); // 10
  ```
### 6. Control Flow : 
###### Pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan
### 7. Function 
###### Function di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method, Function digunakan untuk melakukan serangkaian komputasi prosedur yang dapat digunakan berulang kali. ada 2 jenis fuction
- Function Declaration : Didefinisikan dengan kata kunci function dan memiliki nama.
  ```
  function greet(name) {
    return `Hello, ${name}`;
  }
  console.log(greet('Andi')); // Hello, Andi
  ```
- Arrow Function : Arrow function diperkenalkan dalam ES6 dan memiliki sintaks yang lebih singkat daripada function biasa.
  ```
  const sum = (a, b) => a + b;
  console.log(sum(2, 3)); // 5
  ```
### 8. Fetch Api
###### Fetch API adalah antarmuka modern yang digunakan untuk melakukan permintaan HTTP (HTTP requests) dan menerima respons dari server.
- Fecth Api menggunakan Async Await dan try catch
  ```
  async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
   }
  fetchData();
  ```
### 9. Classes
- Class adalah prototype dari suatu object yang akan kita buat
- Constructor adalah method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object.
- Method adalah sebuah fungsi yang berada di dalam class
- Attributes adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class
- Extends digunakan untuk membuat Kelas anak dari kelas induk. kelas anak mewarisi semua atribut dan metode dari kelas induk
### 10. DOM (Document Object Model)
###### Document Object Model adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object
- Selection Method
    - getElementById()
    - getElementsByTagName()
    - getElementsByClassName()
    - querySelector()
    - querySelectorAll()
- Manipulation
    - element.innerHTML : Digunakan merubah isi dari tag yang sudah kita seleksi.
    - element.style.<propertyCSS> : Digunakan merubah style dari tag yang sudah kita seleksi
    - element.setAttribute() : Digunakan mengelola / memanipulsasi attribute yang sudah kita seleksi.
    - element.classList.add() : Digunakan mengelola / memanipulsasi class yang sudah kita seleksi.
- Event
    - onclick : Digunakan ketika pengguna mengklik mouse
    - onchange : Digunakan dalam kombinasi dengan validasi bidang input.
    - onblur : Digunakan ketika anda meninggalkan kolom input
    - onmouseover : Digunakan ketika pengguna mengarahkan mouse ke atas pada suatu object
    - onmouseout : Digunakan ketika pengguna mengarahkan mouse ke keluar pada suatu object
    - oncopy : Digunakan ketika pengguna mengcopy suatu object