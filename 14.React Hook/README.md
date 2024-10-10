#  SUMMARY React Hooks
### 1. Hooks
- Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

### 2. Hooks Dasar
- useState adalah hook di React yang digunakan untuk membuat dan mengelola state dalam komponen fungsional. Ketika state berubah, komponen akan dirender ulang secara otomatis.
- useEffect adalah hook yang digunakan untuk mengelola efek samping (side effects) dalam komponen, seperti melakukan fetch data dari server.
- useRef adalah hook yang digunakan untuk menyimpan referensi ke elemen DOM atau untuk menyimpan nilai yang tidak menyebabkan re-render ketika berubah.
- useContext adalah hook yang digunakan untuk mengakses nilai dari konteks (context) dalam aplikasi React. Ini memungkinkan Anda untuk berbagi data antara komponen tanpa harus mengoper props.

### 3. Aturan pada hooks
- Hanya Panggil Hooks di Tingkat Atas
Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions.
- Hanya Panggil Hooks dari Fungsi-Fungsi React
Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa :
  - Memanggil Hooks dari komponen-komponen fungsi React.
  - Memanggil Hooks dari custom Hooks

### 4. contoh penggunann useEffect dan useState untuk fecth data
```
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  // Mendefinisikan state untuk menyimpan data dan loading status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Menggunakan useEffect untuk mengambil data saat komponen pertama kali dirender
  useEffect(() => {
    // Fungsi untuk mengambil data
    const fetchData = async () => {
      try {
        // Mengambil data dari API
        const response = await fetch('https://api.example.com/data');
        
        // Memeriksa apakah permintaan berhasil
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Mengonversi data menjadi JSON
        const result = await response.json();
        
        // Memperbarui state dengan data yang diambil
        setData(result);
      } catch (err) {
        // Menangani error jika ada
        setError(err.message);
      } finally {
        // Mengubah status loading menjadi false
        setLoading(false);
      }
    };

    // Memanggil fungsi fetchData
    fetchData();
  }, []); // Dependency array kosong untuk menjalankan efek hanya sekali saat komponen dirender

  // Menampilkan loading, error, atau data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Menampilkan item dalam daftar
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
```