# SUMMARY GLOBAL STATE MANAGEMENT
### 1. Global state cara yang memungkinkan state atau data bisa diakses dan digunakan di berbagai komponen tanpa perlu dikirim melalui props atau argumen dari satu komponen ke komponen lainnya.

### 2. Zustand : salah satu library salah satu library untuk manajemen state di React. beberapa komponen penting di zustand : 
- Store : penyimpan data dan fungsi (actions) yang digunakan untuk memperbarui state.
- Actions : fungsi yang ada di dalam store untuk mengubah state.
- State : data yang disimpan di dalam store.
- Set: Fungsi untuk memperbarui state di dalam actions.

### 3. persisted zustand adalah cara menyimpan state secara permanen di local storage, session storage, atau penyimpanan lain. Dengan menggunakan fitur persist, state di store akan tetap tersimpan meski halaman di-refresh atau aplikasi ditutup dan dibuka lagi, sehingga data tidak hilang.