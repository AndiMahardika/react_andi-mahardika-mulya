# SUMMARY REACT ROUTER

### 1. Router merupakan modul dalam react yang berfungsi untuk melakukan tugas navigasi pada SPA (Single page application). SPA sendiri adalah aplikasi web yang hanya memiliki satu halaman, tetapi dapat menangani semua aktivitas yang terjadi di dalam aplikasi tersebut tanpa memuat ulang halaman.
### 2. React Router Dom
- salah satu library yang sering digunakan dalam React untuk menangani navigasi antar halaman.
    ```
    import { BrowserRouter, Route, Routes } from "react-router-dom";
    import { Login } from "../features/authentication/components/login";
    import { Register } from "../features/authentication/components/register";
    
    export const AppRouter = () => {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      );
    };
    ```

### 3. URL Params
- URL Params adalah bagian dari URL yang berfungsi untuk mengirim informasi dinamis dari satu halaman ke halaman lain.
- Contoh URL Params: 
  ```
  http://localhost:8000.com/user/:id
  ```
  
  Cara Penggunaan
  ```
  import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

  const UserProfile = () => {
    // Mengambil parameter userId dari URL
    const { userId } = useParams();
      return <h2>Profil Pengguna dengan ID: {userId}</h2>;
    };
    
  export const AppRouter = () => {
     return (
        <BrowserRouter>
          <Routes>
            <Route path="/user/:userId" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      );
  };
  ```
  
### 4. Navigate
- Navigate adalah fungsi yang digunakan dalam React Router Dom untuk memindahkan pengguna dari satu halaman ke halaman lain.
- Cara Menggunakan `Navigate` dalam React Router Dom
  ```
  import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

  const Home = () => <h2>Halaman Utama</h2>;
  const Login = () => {
    const isLoggedIn = true; // Contoh: kondisi login
    return isLoggedIn ? <Navigate to="/" /> : <h2>Halaman Login</h2>;
  };

  export const AppRouter = () => {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    );
  };
  ```
