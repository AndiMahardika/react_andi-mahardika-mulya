# SUMMARY Introduction Restfull API

### 1. API (Application Programming Interface) adalah kumpulan fungsi atau prosedur yang memberikan akses ke fitur atau data suatu aplikasi, sehingga aplikasi dapat berkomunikasi satu sama lain. API memungkinkan, misalnya, frontend (FE) dan backend (BE) berinteraksi dengan lancar. API bertindak sebagai perantara atau jembatan, memungkinkan FE meminta dan mengirim data ke BE, yang kemudian mengolah permintaan itu dan mengirimkan data yang diperlukan kembali ke FE.

### 2. RESTful API adalah jenis API yang memungkinkan aplikasi saling berkomunikasi menggunakan prinsip REST (Representational State Transfer). RESTful API digunakan untuk mengakses dan memanipulasi data melalui protokol HTTP dengan standar tertentu sehingga frontend (FE) dapat berinteraksi dengan backend (BE).

### 3. Penulisan URL (Endpoint) dan Respons API
1. URL (Endpoint)
   - GET /api/v1/users – Mengambil semua data user.
   - POST /api/v1/users – Membuat data user baru.
   - GET /api/v1/users/{id} – Mengambil data user berdasaran ID.
   - PUT /api/v1/users/{id} – Memperbarui data user berdasaran ID.
   - DELETE /api/v1/users/{id} – Menghapus data user berdasaran ID.

2. Respons API 
    - success
      ```
      {
      "message": "success"
      "status": 200,
      "data": {
        "id": 1,
        "name": "andi",
        "email": "andi@google.com"
        }
      }
      ```
    - error
      ```
      {
        "message": "can't get data"
        "status": 404,
        "message": "User not found",
      }
      ```

### 4. Axios adalah library JavaScript yang digunakan untuk melakukan permintaan dari frontend ke server atau API. Cara penggunaan Axios
- GET – Mengambil Data
    ```
    import axios from 'axios';

    async function getUsers() {
      try {
        const response = await axios.get('https://api/v1/users');
        return response.data;
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    }
    ```
- POST – Menambahkan Data
    ```
    import axios from 'axios';

    async function createUser(newUser) {
      try {
        const response = await axios.post('https://api/v1/users', newUser);
        return response.data;
      } catch (error) {
        console.error('Error creating user: ', error);
      }
    }
    ```
- PUT – Memperbarui Data
    ```
    import axios from 'axios';

    async function updateUser(userId, updatedUser) {
      try {
        const response = await axios.put('https://api/v1/users/${userId}`, updatedUser);
        return response.data;
      } catch (error) {
        console.error('Error updating user: ', error);
      }
    }
    ```
- DELETE - Menghapus Data
    ```
    import axios from 'axios';

    async function deleteUser(userId) {
      try {
        const response = await axios.delete(`https://api/v1/users/${userId}`);
      } catch (error) {
        console.error('Error deleting user: ', error);
      }
    }
    ```