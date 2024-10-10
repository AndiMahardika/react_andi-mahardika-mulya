#  SUMMARY React Fundamental
### 1. JSX (JavaScript XML) adalah ekstensi sintaks JavaScript yang digunakan dalam React untuk menggambarkan elemen UI secara lebih deklaratif. Contoh JSX :
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2. React Component adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI. Komponen dapat menerima props yang memungkinkan Anda mengirimkan data dari komponen induk ke komponen anak. dan juga dapat mengirimkan elemen sebagai children ke dalam komponen.

### 3. Lifecycle Di react :
- Mounting : terjadi saat komponen pertama kali dimasukkan (mount) ke dalam DOM.
- Updating : terjadi saat komponen sudah terpasang dan mengalami perubahan state atau props.
- Unmounting : terjadi saat komponen dihapus dari DOM.

### 4. Condition di react
- Menggunakan if
  ```
  function Greeting({ isLoggedIn }) {
        if (isLoggedIn) {
            return <h1>Selamat datang kembali!</h1>;
        } else {
            return <h1>Silakan masuk.</h1>;
        }
    }
    ```
- Menggunakan if dengan operator &&
  ```
  function Notification({ message }) {
        return (
            <div>
                {message && <p>Pesan: {message}</p>}
            </div>
        );
    }
   ```
- Menggunakan if-else dengan ternary operator
    ```
    function UserStatus({ isLoggedIn }) {
        return (
            <div>
                {isLoggedIn ? <h1>Selamat datang!</h1> : <h1>Silakan masuk.</h1>}
            </div>
        );
    }
    ```
- Menggunakan ! (negasi)
    ```
    function Warning({ isError }) {
        return (
            <div>
                {!isError && <p>Tidak ada kesalahan.</p>}
                {isError && <p>Terjadi kesalahan!</p>}
            </div>
        );
    }
    ```

### 5. Directory structure
- Kelompokkan file berdasarkan fitur atau rute.
- Kelompokkan file berdasarkan jenisnya.
- Hindari membuat terlalu banyak folder di dalam folder (nesting).