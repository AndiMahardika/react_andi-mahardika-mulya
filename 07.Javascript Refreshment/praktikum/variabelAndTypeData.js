// Menggunakan Let
// function swapValues(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   console.log(a, b);
// }

// swapValues(5, 10); // Output: 10 5
// let digunakan karena kita bisa mengganti nilai variabel yang ada.
// variabel temp adalah variabel sementara yang menyimpan nilai asli dari a agar tidak hilang saat a diisi dengan nilai b.

// Mwnggunakan Var
// function swapValues(a, b) {
//   var temp = a;
//   a = b;
//   b = temp;
//   console.log(a, b);
// }

// swapValues(5, 10); // Output: 10 5
// Penggunaan Var hampir sama seperti penggunakan Let , tapi tidak disarankan menggunakan Var karena dikhawatirkan
// akan menimbulkan bug

// Menggunakan Const
function swapValues(a, b) {
  const temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

swapValues(5, 10); // Output: 10 5
// const digunakan untuk variabel temp karena kita tidak akan mengubah nilai temp setelah dideklarasikan. temp hanya menyimpan nilai sementara.
// const cocok digunakan di sini karena setelah temp menyimpan nilai, nilainya tetap dan tidak perlu diubah.

// Pada fungsi swapValues, lebih baik menggunakan const untuk variabel yang nilainya tidak berubah setelah dideklarasikan, seperti temp