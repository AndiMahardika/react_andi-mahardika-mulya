# SUMMARY REACT FORM

### 1. Controller Component
- Mengelola data input form dengan menggunakan state. Biasanya, Controller Component menyimpan dan memperbarui nilai input melalui state lokal.
- contoh penggunaan
  ```
  import React, { useState } from "react";

  const ControlledForm = () => {
    const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input submitted: ${inputValue}`);
  };

  return (
     <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
     </form>
    );
  };
  ```
  
### 2. uncontroller Component
- Tidak menggunakan state untuk mengelola data. Sebaliknya, data dari formr diambil langsung dari DOM dengan menggunakan referensi (ref) untuk mengakses nilai input saat dibutuhkan.
  ```
  import React, { useRef } from "react";

  const UncontrolledForm = () => {
    const inputRef = useRef(null);
    
    const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input submitted: ${inputRef.current.value}`);
  };

  return (
     <form onSubmit={handleSubmit}>
       <input type="text" ref={inputRef} />
       <button type="submit">Submit</button>
     </form>
    );
  };
  ```
  
### 3. Validation Form
- Memastikan bahwa data yang dimasukkan oleh user benar dan sesuai dengan format yang diharapkan.
- Melindungi akun user dari kesalahan input yang dapat menyebabkan masalah.
- Menjaga keamanan dan integritas sistem aplikasi dengan mencegah data yang tidak valid masuk ke dalamnya.
- 2 cara validation
  - Client-side Validation
    - Menggunakan atribut HTML seperti required, minlength, maxlength, min, max, dan type untuk memastikan input pengguna sesuai dengan kriteria yang ditentukan.
    - Menggunakan JavaScript untuk menambahkan logika tambahan. 
  - server-side validation  
    - Dilakukan di server setelah data dikirim dari klien.
    - Server memeriksa dan memvalidasi data untuk memastikan bahwa input sesuai dengan yang diharapkan dan aman untuk diproses.
